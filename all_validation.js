$(document).ready(function()
{

	console.log("I'm ready");

	$("#register_for_compitition").click(function(){
		login();
	});

	$("#register").click(function(){
	var roll_no=document.getElementById("roll_no").value;
	var password=document.getElementById("password").value;
	check_from_validation(roll_no,password);
	});

  $("#submitStudent").click(function(){
    submitStudentInfo();
  });
  
  $("#add_question").click(function(){
    submitQuestion();
  });
}
);


function submitQuestion()
{
  var request={}
  var subject=$("#subject").val();
  var quetion=$("#que").val();
  var option1=$("#option1").val();
  var option2=$("#option2").val();
  var option3=$("#option3").val();
  var option4=$("#option4").val();
  var answer=$("#answer").val();
  request["subject"]=subject;
  request["question"]=question;
  request["option1"]=option1;
  request["option2"]=option2;
  request["option3"]=option3;
  request["option4"]=option4;
  request["answer"]=answer;
  if(subject=="")
  {
    console.log("must be fill subject");
    return false;
  }
  else
  {
    if(subject=="dataStructure"||subject=="mathematics"||subject=="networking"||subject=="operatingSystem")
    {
      console.log("insert data");
    }
    else{
      console.log("must be enter [dataStructure,mathematics,networking,operatingSystem] in subject field");
      return false;
    }
  }
  if(quetion=="")
  {
    console.log("must be fill qno");
    return false;
  }
  if(option1=="")
  {
    console.log("option1 must be fill");
    return false;
  }
  if(option2=="")
  {
    console.log("option2 must be fill");
    return false;
  }
  if(option3=="")
  {
    console.log("option3 must be fill");
    return false;
  }
  if(option4=="")
  {
    console.log("option4 must be fill");
    return false;
  }
  if(answer=="")
  {
    console.log("answer must be fill");
    return false;
  }
  $.post("http://localhost/s_project/createTable.py/insertDataIntoSubjectTable",{data:JSON.stringify(request)}).done(function(response){console.log(response)});
}

function submitStudentInfo()
{
  var request={}
  var rollNo=$("#rollNo").val();
  var name=$("#name").val();
  var field=$("#field").val();
  request["rollNo"]=rollNo;
  request["name"]=name;
  request["field"]=field;
  // if(validate)
  if(rollNo=="")
  {
    console.log("plz fill roll no");
    return false;
  }
  else
  {
    if(isNaN(rollNo))
    {
      console.log("roll no must be number");
      return false;
    }
  }
  if(name=="")
  {
    console.log("must be fill name");
    return false;
  }
  else
  {
    var re=/^[ _a-zA-Z]*$/;
    if(!name.match(re))
    {
      console.log("name containce only letters");
      return false;
    }
  }
  if(field=="")
  {
    console.log("field must be fill");
    return false;
  }
  else
  {
    if(field=="MSC" || field=="MCA")
    {
      $.post("http://localhost/s_project/createTable.py/insertDataIntoTable",{data:JSON.stringify(request)}).done(function(response){console.log(response)});
    }
    else
    {
      console.log("field must be MSC or MCA");
      return false;
    }
  }
}

function login()
{
window.location="login.html"
}


function check_from_validation(roll_no,password)
{
	var re = /\d{5}/;
	if(roll_no=="")
	{
		console.log("blank roll no");
	}
	else
	if(isNaN(roll_no))
	{
		console.log("not a number");
	}
	else
	{
	if (password=="")
	{
		console.log("blank password");
	}
	else
	{
	window.location="compitition.html"
	}
	}
}


/*

function check_from_validation(roll_no,password)
{

	window.loaction="compitition.html"
/*	//var rno = /^\d{5}$/;
	var rno=/^[0-9]+$/;
	if(roll_no== rno)
	{
		console.log("correct");
	if (password==" ")
	{
		console.log("blank password");
	}
	else
	{
		console.log("correct password");
		window.loaction="compitition.html"
	}
	}
	else
	if(roll_no=="")
	{
		console.log("blank");
	}
	else
	{
		console.log("not numbers");
	}
	
	
	//
	
	if(roll_no=="")
	{
		console.log("blank");
	}
	else
	{
	if (password=="")
	{
		console.log("blank password");
	}
	else
	{
		console.log("correct password");
		window.loaction="compitition.html"
	}
	}
}

*/
