// function in inputs

var inputs=document.getElementsByTagName("input"); //this inputs  in page
var checkBox1=document.getElementById("checkBox1");//checkbox
var correct=document.getElementById("correct"); // mark right in input user
var correct2=document.getElementById("correct2"); // mark right in input user
var btn1 =document.getElementById("btn1"); //btn LoGin
var aler=document.getElementsByClassName("alert")[0];
var alertI=document.getElementById("alertI")
//first name foucs and blur
inputs[0].addEventListener("focus",clearPlaceH);
inputs[0].addEventListener("blur",function(){inputs[0].setAttribute("placeholder","Please Enter FirstName");});

//last name foucs and blur
inputs[1].addEventListener("focus",clearPlaceH)
inputs[1].addEventListener("blur",function(){inputs[1].setAttribute("placeholder","Please Enter LastName");});
inputs[2].addEventListener("focus",clearPlaceH)
inputs[2].addEventListener("blur",function()
{
    inputs[2].setAttribute("placeholder","Please Enter Phone")
    if(inputs[2].value=="")
    {
        correct2.classList.add("hide");
    }
;});
inputs[2].addEventListener("keydown",function()
{
    // correct2.classList.remove("hide");
    correct2.classList.remove("fa-circle-xmark");
    correct2.classList.remove("fa-solid");
    correct2.classList.remove("fa-check");
});
//patern phone
var patrnPhone=/^0([1-9][0-9]{9})$/g;
inputs[2].addEventListener("keyup",function()
{
    correct2.classList.remove("hide");
    if(inputs[2].value.match(patrnPhone)) 
    { 
        correct2.classList.add("fa-solid");
        correct2.classList.add("fa-check");
        correct2.style.color="green";
    }
    else 
    {
        correct2.classList.remove("fa-check");
        correct2.classList.add("fa-solid");
        correct2.classList.add("fa-circle-xmark");
        correct2.style.color="red";
    }
});

//when User foucs clear placeholder and blur retrn placeholder
inputs[3].addEventListener("focus",clearPlaceH)
inputs[3].addEventListener("blur",function()
{
    inputs[3].setAttribute("placeholder","Please Enter Email");
    if(inputs[3].value=="")
        {
            correct.classList.add("hide");
        }
});
    
//when keydown the class will remove to check every once

inputs[3].addEventListener("keydown",function()
{
    // correct.classList.remove("hide");
    correct.classList.remove("fa-circle-xmark");
    correct.classList.remove("fa-solid");
    correct.classList.remove("fa-check");
});

//when keyup the class will added
var pattrnemil =/^([a-zA-Z0-9_\.-]+)@([[a-zA-Z\.]+)\.(com|eg)$/g;
inputs[3].addEventListener("keyup",function()
{
    correct.classList.remove("hide");
    if(inputs[3].value.match(pattrnemil)) 
    { 
        correct.classList.add("fa-solid");
        correct.classList.add("fa-check");
        correct.style.color="green";
    }
    else 
    {
        correct.classList.remove("fa-check");
        correct.classList.add("fa-solid");
        correct.classList.add("fa-circle-xmark");
        correct.style.color="red";
    }
});

//if u click on cross will delete the text input in email
correct.addEventListener("click",function()
{
    if(correct.className =="fa-solid fa-circle-xmark")
    {
        inputs[3].value="";
    }
});
//when User foucs clear placeholder and blur retrn placeholder
inputs[4].addEventListener("focus",clearPlaceH)
inputs[4].addEventListener("blur",function()
{
    inputs[4].setAttribute("placeholder","Please Enter password");
    if(inputs[4].value=="")
    {
        showPassword.style.color="black";
    }
});
//show and hide password
var showPassword=document.getElementById("showPassword");
showPassword.addEventListener("click",
function()
{
    if( inputs[4].type==="password"){
        inputs[4].setAttribute("type","text");
        showPassword.classList.replace("fa-eye-slash","fa-eye");
    }
    else
    {
        inputs[4].setAttribute("type","password");
        showPassword.classList.replace("fa-eye","fa-eye-slash");
    }
});

//valid password
var patrn=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/g;
inputs[4].addEventListener("keyup",function()
{
    if(inputs[4].value.match(patrn))
    {
        showPassword.style.color="green";
    }
    else
    {
        showPassword.style.color="red";
    }
});

// validation to form

btn1.addEventListener("click",function()
{
    if(inputs[3].value.match(pattrnemil) && inputs[4].value.match(patrn) && inputs[2].value.match(patrnPhone) && inputs[1].value.length>3 &&inputs[0].value.length>3 )
    {
        console.log(saveStorg())
        saveStorg();
    }
    else
    {
        inputs[0].style.boxShadow="3px 3px 3px #bf3737";
        inputs[1].style.boxShadow="3px 3px 3px #bf3737";
        inputs[2].style.boxShadow="3px 3px 3px #bf3737";
        inputs[3].style.boxShadow="3px 3px 3px #bf3737";
        inputs[4].style.boxShadow="3px 3px 3px #bf3737";
            event.preventDefault();
            aler.classList.remove("hide");
            aler.style.opacity="1";

    }
});
alertI.addEventListener("click",function()
{
    aler.style.opacity=".0"
    aler.style.transition="2s"
    aler.classList.add("hide");
});
//function focus
function clearPlaceH()
{
    this.setAttribute("placeholder","");
};
//save data in localstorge

function saveStorg()
{
    var userNameData=inputs[3].value;
    var PasswordData=inputs[4].value;
    
    
    if(checkBox1.checked==true)
    {
        localStorage.setItem("userName",userNameData);
        localStorage.setItem("Password",PasswordData);
        localStorage.getItem("userName");
        localStorage.getItem("Password");
    }
    else 
    {
        // localStorage.removeItem("userName")
    // localStorage.removeItem("Password")
    }
}
//------------------------------------------------send data---------
// var dat=function()
// {
//     var per=
//     {
//         firstName:inputs[0].value,
//         lastN:inputs[1].value,
//         phone:inputs[2].value,
//         Email:inputs[3].value,
//         pass:inputs[4].value
//     }
//     console.log(per)
//     const xhttp = new XMLHttpRequest();
      
//       xhttp.open("post", "password.html", true);
//       xhttp.send(per);
//       document.write(per)
// }
// document.getElementById("tes").addEventListener("click",dat);
// -------------------------------------------------------------------------------
// Min 1 uppercase letter,Min 1 lowercase letter,
// Min 1 special character,Min 1 number,Min 8 characters and Max 30 characters.
//----------------------------------------------------------