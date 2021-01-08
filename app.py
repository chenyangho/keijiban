from flask import Flask, render_template, url_for, redirect, request

app = Flask(__name__)

@app.route('/login', methods=['GET', 'POST'])
def index():
    if request.method == 'POST': 
        return 'Hello ' + request.values['username']
    return render_template("index.html")

def login_check(username, password):
    """登入帳號密碼檢核"""
    if username == 'admin' and password == 'hello':
        return True
    else:
        return False

if __name__ == '__main__':
    app.debug = True
    app.run()