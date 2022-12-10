function checkvalue(val)
{
    if(val==="other")
       document.getElementById('contactOther').style.display='block';
    else
       document.getElementById('contactOther').style.display='none'; 
}

function validateForm() 
{
    email = document.getElementById("email");

    if (!(/(.+)@(.+){2,}\.(.+){2,}/.test(email))) {
        alert("Please enter a valid email address.")
        email.style.borderColor = "red";
        return false;
    }
    else {
        return true;
    }
}