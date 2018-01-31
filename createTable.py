import MySQLdb
import json

def createConnection(sql):
    db=MySQLdb.connect(host="localhost",user="root",passwd="p",db="compitition")
    cursor=db.cursor()
    cursor.execute(sql)
    db.commit()
    db.close()


#sql1="create table student(rollNo integer primary key NOT NULL,studentName varchar(30),field varchar(10),level1Result integer,level2Result integer,level3Result integer,4Result integer);"


#sql2="create table newtworking(qNo integer primary key NOT NULL,quetion varchar(500),option1 varchar(20),option2 varchar(20),option3 varchar(20),option4 varchar(20),answer varchar(20));"

#sql3="create table operatingSystem(qNo integer primary key NOT NULL,quetion varchar(500),option1 varchar(20),option2 varchar(20),option3 varchar(20),option4 varchar(20),answer varchar(20));"

#sql4="create table dataStructure(qNo integer primary key NOT NULL,quetion varchar(500),option1 varchar(20),option2 varchar(20),option3 varchar(20),option4 varchar(20),answer varchar(20));"

#sql5="create table mathematics(qNo integer primary key NOT NULL,quetion varchar(500),option1 varchar(20),option2 varchar(20),option3 varchar(20),option4 varchar(20),answer varchar(20));"

#createConnection(sql5);

def insertDataIntoTable(data):
    data=json.loads(data);
    sql="insert into student values("+data["rollNo"]+","+"\""+data["name"]+"\""+","+"\""+data["field"]+"\""+","+"\"\""+","+"\"\""+","+"\"\""+","+"\"\""+");"
    '''
    db=MySQLdb.connect(host="localhost",user="root",passwd="p",db="compitition")
    cursor=db.cursor()
    cursor.execute(sql)
    db.close();'''
    createConnection(sql);
    return sql;






