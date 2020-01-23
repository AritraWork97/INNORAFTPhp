var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var textarea = document.getElementById("para1");
var phone = document.getElementById("phone");
var form = document.getElementById("form-element");

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

textarea.onkeypress = function() {
   return ((event.charCode > 64 && event.charCode < 91) ||(event.charCode > 96 && event.charCode < 123) ||
           (event.charCode > 48 && event.charCode <= 57) || event.charCode == 124 || event.charCode == 13)
}

phone.onkeypress = function(){
   return ((event.charCode > 48 && event.charCode <= 57) ||  event.charCode == 43)
}

form.onsubmit = function(){
   var fname= document.getElementById("firstname").value;
   var sname= document.getElementById("lastname").value;
   var phone= document.getElementById("phone").value;
   var email= document.getElementById("email").value;

   if(form_validation(fname, sname, phone, email) == true)
   {
      console.log("form error");
      return false;
   }
   else
   {
      return true;
   }
}

function form_fullname_validation(fname, sname){
   if(fname.length <= 1 || sname.length <= 1){
      return true;
   }
   else
   {
      return false;
   }
}

function form_validation(fname, sname, phone, email){
   if(fname.length <= 1 || sname.length <= 1 || (phone.length < 10 || phone.length > 14) || email.length <= 3)
   {
      return true;
   }
   else
   {
      return false;
   }
}