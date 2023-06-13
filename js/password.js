// function in inputs

var inputs=document.getElementsByTagName("input"); //this inputs  in page
var correct=document.getElementById("correct"); // mark right in input user
var correct2=document.getElementById("correct2"); // mark right in input phone
var btn1 =document.getElementById("btn1"); //btn sign up
var aler=document.getElementsByClassName("alert")[0];
var alertI=document.getElementById("alertI")

//when User foucs clear placeholder and blur retrn placeholder

inputs[0].addEventListener("focus",clearPlaceH);
inputs[0].addEventListener("blur",function()
{
    inputs[0].setAttribute("placeholder","Please Enter User Name");
    if(inputs[0].value=="")
        {
            correct.classList.add("hide");
        }
});

//when User foucs clear placeholder and blur retrn placeholder

inputs[1].addEventListener("focus",clearPlaceH);
inputs[1].addEventListener("blur",function()
{
    inputs[1].setAttribute("placeholder","Please Enter phone");
});
// show right and no right in user name

//when keydown the class will remove
inputs[0].addEventListener("keydown",function()
{
    // correct.classList.remove("hide");
    correct.classList.remove("fa-circle-xmark");
    correct.classList.remove("fa-solid");
    correct.classList.remove("fa-check");
    
});

//show right and not right in input

correct.addEventListener("click",function()
{
    if(correct.className =="fa-solid fa-circle-xmark")
    {
        inputs[0].value="";
    }

});
correct2.addEventListener("click",function()
{
    if(correct2.className =="fa-solid fa-circle-xmark")
    {
        inputs[1].value="";
    }

});

    //when keyup the class will added
    var pattrnemil =/^([a-zA-Z0-9_\.-]+)@([[a-zA-Z\.]+)\.(com|eg)$/g;
inputs[0].addEventListener("keyup",function()
{
    correct.classList.remove("hide");
    if(inputs[0].value.match(pattrnemil)) 
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

//valid number
var patrnPhone=/^0([1-9][0-9]{9})$/g;

inputs[1].addEventListener("keyup",function()
{
    correct2.classList.remove("hide");
    if(inputs[1].value.match(patrnPhone)) 
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
// validation to form

btn1.addEventListener("click",function()
{
    if(inputs[0].value.match(pattrnemil) && inputs[1].value.match(patrnPhone))
    {
        saveStorg();
    }
    else
    {
        inputs[0].style.boxShadow="3px 3px 3px #bf3737";
        inputs[1].style.boxShadow="3px 3px 3px #bf3737";
            event.preventDefault()
            aler.classList.remove("hide")
            aler.style.opacity="1";

    }
});

alertI.addEventListener("click",function()
{
    aler.style.opacity=".0"
    aler.style.transition="2s"
    aler.classList.add("hide");
});
//save data in localstorge
function saveStorg()
{
   var userNameData=inputs[0].value;
   var PasswordData=inputs[1].value;
    localStorage.setItem("userName",userNameData);
    localStorage.setItem("Password",PasswordData);
    localStorage.getItem("userName");
    localStorage.getItem("Password");
}

function clearPlaceH()
{
    this.setAttribute("placeholder","");
};
// -------------------------------------------------------------------------------
// Min 1 uppercase letter,Min 1 lowercase letter,
// Min 1 special character,Min 1 number,Min 8 characters and Max 30 characters.
//----------------------------------------------------------