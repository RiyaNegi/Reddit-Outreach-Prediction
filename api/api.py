
from flask import Flask, render_template
from flask_jwt import JWT, jwt_required, current_identity
from werkzeug.security import safe_str_cmp
from flask_cors import CORS, cross_origin


app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecret'
CORS(app, support_credentials=True)


app.debug = True

@app.route('/api', methods=['GET'])
def api():
    return{
        'userId':1,
        'tile': 'flask react app',
        'completed':False
    }

class User(object):
    def __init__(self, id, username, password):
        self.id = id
        self.username = username
        self.password = password

    def __str__(self):
        return "User(id='%s')" % self.id

users = [
    User(1, 'milind', 'milind'),
    User(2, 'mike', 'mike'),
]

username_table = {u.username: u for u in users}
userid_table = {u.id: u for u in users}

def authenticate(username, password):
    user = username_table.get(username, None)
    if user and safe_str_cmp(user.password.encode('utf-8'), password.encode('utf-8')):
        return user

def identity(payload):
    user_id = payload['identity']
    return userid_table.get(user_id, None)

@app.route('/', methods=['GET','POST', 'OPTIONS'])
@cross_origin(supports_credentials=True)
def index():
    return render_template("../public/index.html")


jwt = JWT(app, authenticate, identity)

@app.route('/protected')
@jwt_required()
def protected():
    return '%s' % current_identity

@app.route('/api/form')
def form():
    print("form called")
    return '%s' % current_identity
    
@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Credentials', 'true')
  response.headers.add('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response

if __name__ == '__main__':
    socketIo.run(app)