from flask import Flask, Blueprint
from .routes import main
from .dbconnection import mongo
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt


def create_app(config_file='settings.py'):
    app = Flask(__name__)
    app.config.from_pyfile(config_file)
    mongo.init_app(app)
    jwt = JWTManager(app)

    app.register_blueprint(main)
    return app
