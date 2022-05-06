
var no=document.querySelectorAll(".drum").length;
for(var i=0; i<no; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
    var buttonInnerHTML=this.innerHTML;
    buttonAnimation(buttonInnerHTML)
});
}

function tom1()
{
    var a=new Audio("sounds/tom-1.mp3")
    a.play()
}

function tom2()
{
    var a=new Audio("sounds/tom-2.mp3")
    a.play()
}
function tom3()
{
    var a=new Audio("sounds/tom-3.mp3")
    a.play()
}
function tom4()
{
    var a=new Audio("sounds/tom-4.mp3")
    a.play()
}
function snare()
{
    var a=new Audio("sounds/snare.mp3")
    a.play()
}
function crash()
{
    var a=new Audio("sounds/crash.mp3")
    a.play()
}
function kick()
{
    var a=new Audio("sounds/kick-bass.mp3")
    a.play()
}



document.addEventListener("keypress",function(event)
{

    makeSound(event.key)
    buttonAnimation(event.key)
});

function makeSound(key)
{
    switch (key)
    {
        case "w":
        var a=new Audio("sounds/tom-1.mp3")
        a.play()
        break;

        case "a":
        var a=new Audio("sounds/tom-2.mp3")
        a.play()
        break;

        case "s":
        var a=new Audio("sounds/tom-3.mp3")
        a.play()
        break;

        case "d":
        var a=new Audio("sounds/tom-4.mp3")
        a.play()
        break;

        case "j":
        var a=new Audio("sounds/snare.mp3")
        a.play()
        break;

        case "k":
        var a=new Audio("sounds/crash.mp3")
        a.play()
        break;

        case "l":
        var a=new Audio("sounds/kick-bass.mp3")
        a.play()
        break;
    }
}

function buttonAnimation(currentKey)
{
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}