from flask import Flask, Blueprint, request, jsonify
# from .models.user import User
from .models.auth import Authser
main = Blueprint("/register", __name__)
from flask_jwt_extended import (jwt_refresh_token_required)
user = Authser()



@main.route('/', methods=['GET'])
def home():
    return "welcome to MARS MISSION CONTROL APP"


@main.route('/login', methods=['POST'])
def user_login():
    return user.auth_user(request.get_json())


@main.route('/register', methods=['POST'])
def register_user():
    print("calling--------", request.get_json())
    return user.register_user(request.get_json())


@main.route('/refresh', methods=['GET'])
@jwt_refresh_token_required
def refresh_user():
    return user.refresh()


@main.route('/users', methods=['GET', 'DELETE', 'PATCH'])
def get_users():
    return user.get_user(request.get_json())
