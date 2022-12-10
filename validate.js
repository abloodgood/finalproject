function checkvalue(val)
{
    if(val==="other")
       document.getElementById('contactOther').style.display='block';
    else
       document.getElementById('contactOther').style.display='none'; 
}

function validateForm() 
{

    emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    email = document.getElementById("email");

    if (!emailRegExp.test(email)) {
        alert("Please enter a valid email address.")
        email.style.borderColor = "red";
    }
    else {
        return true;
    }
}