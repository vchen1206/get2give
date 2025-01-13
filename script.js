var percent = 0;
var level = 1;
var maxp = 100;
var lvl = document.getElementById("lvl");
var mtext = document.getElementById("mtext");

//stats
var donated = 0;
var thrifted = 0;
var mCount = 0;
var donB = document.getElementById("donB");
var thriftB = document.getElementById("thriftB");
var medalB = document.getElementById("medalB");


//medals
var m1 = document.getElementById("1");
var m2 = document.getElementById("2");
var m3 = document.getElementById("3");
var m4 = document.getElementById("4");
var m5 = document.getElementById("5");
var m6 = document.getElementById("6");
var m7 = document.getElementById("7");
var m8 = document.getElementById("8");
var m9 = document.getElementById("9");
var m10 = document.getElementById("10");
const medalList = [m1,m2,m3,m4,m5,m6,m7,m8,m9,m10];

var share = document.getElementById("share");
var pic = document.getElementById("pic");
share.addEventListener("click", shareModal);
// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var prog = document.getElementById("progress-container");

var modalOn = false;

var donate = document.getElementById("donate");
if (donate) {
  donate.addEventListener("click", changeDon);
}

var thrift = document.getElementById("thrift");
if (thrift) {
  thrift.addEventListener("click", changeThrift);
}

function changeDon() {
  donated += 1;
  donB.innerHTML = "Donations: " + donated;
  percent += maxp/level;
  changeStyle();
}

function changeThrift() {
  thrifted += 1;
  thriftB.innerHTML = "Thrifts: " + thrifted;
  percent += maxp/level/2;
  changeStyle();
}

function changeStyle() {
  console.log("Hi");
  if (prog) {
    console.log("here");
    if (percent >= maxp) {
      if (medalList[level]) {
        console.log("pls show up");
        medalList[level].style.display = "block";
      }
      level += 1;   
      lvl.innerHTML = "Level " + level;
      prog.style.width = maxp + "%";
      levelUp();    
      setTimeout(() => { prog.style.width = 0;
      percent = percent % maxp; 
      console.log(percent);
    prog.style.width = percent + "%";}, 2000);
      
    } else {
    console.log(percent);
    prog.style.width = percent + "%";
      }
  }
}

function levelUp() {
  mCount += 1;
  medalB.innerHTML = "Medals: " + mCount;
  modal.style.display = "block";
  mtext.innerHTML = "Congrats! You finished Level " + (level-1);
  prog.style.width = maxp + "%";
}




// When the user clicks on <span> (x), close the modal
if (span) {
  span.onclick = function() {
  modal.style.display = "none";
  }
}


// when  user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// modal for share function
function shareModal() {
  modal.style.display = "block";
  mtext.innerHTML = "Donations: 1, Thrifts: 2, Medals: 1 | I challenge you to Get2Give!";
  
}