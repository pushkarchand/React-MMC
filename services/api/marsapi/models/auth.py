from flask_jwt_extended import (create_access_token, create_refresh_token,
                                jwt_required, jwt_refresh_token_required, get_jwt_identity)
from ..dbconnection import mongo
import os
from flask import Flask
from flask import request, jsonify

from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt
flask_bcrypt = Bcrypt()
jwt = JWTManager()


# from app.schemas import validate_user


@jwt.unauthorized_loader
def unauthorized_response(callback):
    return jsonify({
        'ok': False,
        'message': 'Missing Authorization Header'
    }), 401


class Authser():
    def __init__(self):
        return

    def auth_user(self, user_data):
        try:
            print("user_data---------", user_data)
            ''' auth endpoint '''
            data = user_data
            if data:
                user = mongo.db.users.find_one({'email': data['email']})
                if user and flask_bcrypt.check_password_hash(user['password'], data['password']):
                    user.pop('password')
                    user["userid"] = str(user["_id"])
                    user.pop('_id')
                    access_token = create_access_token(identity=user)
                    refresh_token = create_refresh_token(identity=user)
                    user['token'] = access_token
                    user['refresh'] = refresh_token
                    return jsonify({'ok': True, 'data': user}), 200
                else:
                    return jsonify({'ok': False, 'message': 'invalid username or password'}), 401
            else:
                return jsonify({'ok': False, 'message': 'Bad request parameters: {}'.format(data['message'])}), 400
        except Exception as e:
            print("error in login", e)
            return jsonify({'ok': False, 'message': 'internal server error: '
                                                    '{}'.format(data['message'])}), 500

    async def register_user(self, user_data):
        try:
            print("user_data---------", user_data)
            data = user_data
            if data:
                data['password'] = flask_bcrypt.generate_password_hash(
                    data['password'])
                mongo.db.users.insert_one(data)
                return jsonify({'ok': True, 'message': 'User created successfully!'}), 200
            else:
                return jsonify({'ok': False, 'message': 'Bad request parameters: {}'.format(data['message'])}), 400
        except Exception as e:
            print("error in register_user", e)
            return jsonify({'ok': False, 'message': 'Internal server error: {}'.format(data['message'])}), 500

    async def some_delay(self):
        print("some db call")
        return await asyncio.sleep(5)


    def refresh(self):
        ''' refresh token endpoint '''
        current_user = get_jwt_identity()
        ret = {
            'token': create_access_token(identity=current_user)
        }
        return jsonify({'ok': True, 'data': ret}), 200

    def get_user(self, request):
        ''' route read user '''
        if request is None:
            query = {}
            data = list(mongo.db.users.find(query, {"_id": 0, "password": 0}))
            print("data-------", data)
            return jsonify({'ok': True, 'data': data}), 200

        if request.method == 'GET':
            query = request.args
            data = mongo.db.users.find_one(query, {"_id": 0, "password": 0})
            return jsonify({'ok': True, 'data': data}), 200

        data = request.get_json()
        if request.method == 'DELETE':
            if data.get('email', None) is not None:
                db_response = mongo.db.users.delete_one({'email': data['email']})
                if db_response.deleted_count == 1:
                    response = {'ok': True, 'message': 'record deleted'}
                else:
                    response = {'ok': True, 'message': 'no record found'}
                return jsonify(response), 200
            else:
                return jsonify({'ok': False, 'message': 'Bad request parameters!'}), 400

        if request.method == 'PATCH':
            if data.get('query', {}) != {}:
                mongo.db.users.update_one(
                    data['query'], {'$set': data.get('payload', {})})
                return jsonify({'ok': True, 'message': 'record updated'}), 200
            else:
                return jsonify({'ok': False, 'message': 'Bad request parameters!'}), 400
