# import os
#
# SECRET_KEY = os.getenv('SECRET_KEY')
# HOST = os.getenv('HOST')
# PORT = os.getenv('PORT')
# DATABASE_NAME = os.getenv('DATABASE_NAME')
import os
import datetime

MONGO_URI = os.getenv('MONGO_URI')
JWT_SECRET_KEY = os.getenv('SECRET')
JWT_ACCESS_TOKEN_EXPIRES = datetime.timedelta(days=1)
