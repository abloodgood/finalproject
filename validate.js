function checkvalue(val)
{
    if(val==="other")
       document.getElementById('contactOther').style.display='block';
    else
       document.getElementById('contactOther').style.display='none'; 
}

function validateForm() 
{	
	var name = document.getElementById("name");
	/*Check to make sure first and last name are both over 2 characters*/
	if (name.value.length <= 2) {
		Alert("Name must contain two or more characters!");
		name.style.borderColor = "red";
		return false;
	}
		
	/*use reg ex to test if first or last name have anything other than letters*/
	var letters = /^[a-zA-Z]+$/;
	if (!letters.test(name.value)) {
		alert("Names can only contain letters!");
		firstName.style.borderColor = "red";
		lastName.style.borderColor = "red";
		return false;
	}
    var phone = document.getElementById("phone");
    var phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (!(phoneRegExp.test(phone))) {
        alert("Please enter a valid phone number.")
        phone.style.borderColor = "red";
        return false;
    }
    else {
        return true;
    }
}