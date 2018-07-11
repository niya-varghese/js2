function validatesignup()
{

  document.getElementById("vname").innerHTML='';
  document.getElementById("vmail").innerHTML='';
  document.getElementById("vpass").innerHTML='';
    if(typeof(Storage) !== "undefined") 
    {

          var getName = document.getElementById('name').value;
          var getMailid = document.getElementById('email').value;
          var getPasword = document.getElementById('password').value;

          localStorage.resultname = getName;
          localStorage.resultMail = getMailid;
          localStorage.resultPassword = getPasword;


          user = {
            name: getName,
            email: getMailid,
            password: getPasword
          };
          if (localStorage.firstentry)
          {
            abc = JSON.parse(localStorage["abc"]);
          }
          //user=JSON.stringify(user);
          //
          //abc = JSON.parse(localStorage["abc"]);
          abc.push(user);
          localStorage.setItem("abc",JSON.stringify(abc));

          localStorage.firstentry += 1;
        } 
    else 
    {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }

// VALIDATE LOGIN

function validatelogin()
{
  document.getElementById("userid").innerHTML='';
  document.getElementById("pass").innerHTML='';
    abc = JSON.parse(localStorage["abc"]);
    valid=0;
    for(var i=0;i<abc.length;i++)
    {
      var checkmail =JSON.parse(localStorage["abc"])[i].email;
      var checkpassword =JSON.parse(localStorage["abc"])[i].password;
      //alert(checkmail+":"+checkpassword+":"+i+document.getElementById("user").value+":"+document.getElementById("pwd").value);
      if ((checkmail==document.getElementById("user").value) && (checkpassword==document.getElementById("pwd").value))
      {
        valid=1;
        break;
      }

    }

    if(valid==1)
    {
      contactpage();
    }
    else
    {
      document.getElementById("result").innerHTML = "Invalid login credentials.";
    }
    
  }

// VALIDATE CONTACT US

function validatecontact()
{
  
    API (cuser,cmail,phone,comment);
    return true;
}


//API DATA TRANSFER AND API RESPONSE

function API (cuser,cmail,phone,comment){
    var params = {
        cuser:cuser,
        cmail:cmail,
        phone:phone,
        comment:comment
    }
    var http = new XMLHttpRequest()
    http.open('POST','http://demo6835492.mockable.io/sendEmail')
    http.setRequestHeader('Content-type', 'application/json')
    http.send(JSON.stringify(params))
    http.onload = function() 
    {
        alert(http.responseText);
    }
}
// loading signup
function signuppage() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "signup.html", true);
  xhttp.send();
}
//loading contact page
function contactpage() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "contact.html", true);
  xhttp.send();
}