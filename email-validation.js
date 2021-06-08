function ValidateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(archents.in|archents.com)$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
}
}