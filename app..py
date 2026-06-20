from flask import *
import mysql.connector
from flask_mail import Mail,Message 
app=Flask(__name__)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'yourgmail@gmail.com'
app.config['MAIL_PASSWORD'] = 'your_app_password'

mail = Mail(app)
db=mysql.connector.connect(

    host='localhost',
    user='root',
    password='murali2004',
    database='authentication'
)
cursor=db.cursor()

@app.route('/')
def login():
    return render_template('loginpage.html')
@app.route('/signup')
def signup():
    return render_template('registerpage.html')
@app.route('/register',methods=['POST'])
def register():
    user_name=request.form['username']
    age=request.form['age']
    password=request.form['password']
    cursor.execute("insert into login_details(username,age,password) values(%s,%s,%s)",(user_name,age,password))
    
    db.commit()
    return render_template('loginpage.html')
@app.route('/loginsucess',methods=['POST'])
def loginsuccessful():
    username=request.form['username']
    password=request.form['password']
    cursor.execute("select * from login_details where username=%s and password=%s",(username,password))
    uselog=cursor.fetchone()
    if uselog:
        return render_template('gamepg.html',msg=uselog[0])
    else:
        return render_template('loginpage.html',msg='Authentication Fail')
@app.route('/rock-paper-sissor')
def rock_open():
    return render_template('index_rock.html')
@app.route('/tic-toc-toe')
def tic_open():
    return render_template('index_tic.html')
@app.route('/back')
def back():
    return render_template('gamepg.html')



app.run(debug=True)