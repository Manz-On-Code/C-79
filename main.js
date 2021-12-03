var namearray = [];

function submit(){
var n1 = document.getElementById ("box1").value;
var n2 = document.getElementById ("box2").value;
var n3 = document.getElementById ("box3").value;
var n4 = document.getElementById ("box4").value;
var n5 = document.getElementById ("box5").value;

namearray.push(n1);
namearray.push(n2);
namearray.push(n3);
namearray.push(n4);
namearray.push(n5);

console.log(namearray);
document.getElementById ("displayname").innerHTML = namearray;
document.getElementById ("buttonsubmit").style.display = "none";
document.getElementById ("buttonsort").style.display = "inline-block";
}

function sorting() {
namearray.sort();
console.log(namearray);
document.getElementById ("displayname").innerHTML = namearray;
}