function form_validation(){
   
}


function fulldisplay()
{
    var fname= document.getElementById("firstname").value;
    var sname= document.getElementById("lastname").value;
    fullname.value= fname+' '+sname;
}

function allowed_char_letters(){
   return ((event.charCode > 64 && event.charCode < 91) ||(event.charCode > 96 && event.charCode < 123))
}

function allowed_char_numbers(){
   return ((event.charCode > 48 && event.charCode <= 57) ||  event.charCode == 43)
}