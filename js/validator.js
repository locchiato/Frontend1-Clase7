function validateEmailAddress(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate() {
    $("#result").text("");
    var emailaddress = $("#email").val();
    if (validateEmailAddress(emailaddress)) {
        $("#result").text(emailaddress + ". El correo es valido :)");
        $("#result").css("color", "green");
    } else {
        $("#result").text(emailaddress + " . Es incorrecto, intente nuevamente :(");
        $("#result").css("color", "red");
    }
    return false;
}
$("#validate").bind("click", validate);

/*

HTML:
<form>
<p>Enter an email address:</p>
<input id='email'>
<button type='submit' id='validate'>Validate!</button>
</form>
<h2 id='result'></h2>

*/