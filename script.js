let x = document.querySelector('#button1');
x.addEventListener('click', showMsg);

function showMsg(){

    alert("You clicked! 👍");
}

let newgamer = document.querySelector('#tell-us');
newgamer.addEventListener('click', inputMsg);

function inputMsg(){
    let name = prompt('Enter name of gamer:');
    newgamer.textContent = 'We will contact ' + '-->' + name + '<--' + ', soon!';
}

/*this is
a
comment*/

MyName = "Harsh";
MyAge = 18;
isFamous = true;
console.log(isFamous);
