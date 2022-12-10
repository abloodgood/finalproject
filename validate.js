function checkvalue(val)
{
    if(val==="other")
       document.getElementById('contactOther').style.display='block';
    else
       document.getElementById('contactOther').style.display='none'; 
}

function validateForm() 
{	
	var contact_name = document.getElementById("name");

	var letters = /^[a-zA-Z]+$/;
	if (!letters.test(contact_name.value)) {
		alert("Names can only contain letters!");
		contact_name.style.borderColor = "red";
		return false;
	}
    var phone = document.getElementById("phone");
    var phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (!(phoneRegExp.test(phone.value))) {
        alert("Please enter a valid phone number.")
        phone.style.borderColor = "red";
        return false;
    }
    else {
        return true;
    }
}