var form = document.airlineForm;
var submit = form.submit;

function formAlert(event) {
    event.preventDefault()
    var firstName = form.firstName.value;
    var lastName = form.lastName.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form.travelLocation.value;
    var diet = [];
    var dietList = document.getElementsByClassName("diet")
    for (var i = 0; i < dietList.length; i++) {
        if (dietList[i].checked) {
        diet.push(" " + dietList[i].value)
        }
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


form.addEventListener("submit", formAlert);