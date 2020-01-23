var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var fullname = document.getElementById("fullname");

firstname.onkeypress = function() {
   return ((event.charCode > 64 && event.charCode < 91) ||(event.charCode > 96 && event.charCode < 123))
}

lastname.onkeypress = function() {
   return ((event.charCode > 64 && event.charCode < 91) ||(event.charCode > 96 && event.charCode < 123))
}

lastname.onblur = function(){
   var fname= document.getElementById("firstname").value;
   var sname= document.getElementById("lastname").value;
    console.log("Function working");
    if(form_fullname_validation(fname, sname) == false)
    {
       console.log("working")
      fullname.value= fname+' '+sname; 
    }
}

function form_fullname_validation()
{
   var fname= document.getElementById("firstname").value;
   var sname= document.getElementById("lastname").value;
   if(fname.length <= 1 || sname.length <= 1)
   {
      return true;
   }
   else
   {
      return false;
   }
   
}


function form_validation(fname, sname){
   if(fname.length <= 1 || sname.length <= 1)
   {
      return true;
   }
   else
   {
      return false;
   }
}