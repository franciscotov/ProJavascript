// JavaScript file task 3.js
// Created by Harrison Kong
// Copyright (C) Coursera 2020

function button1Clicked() {

  var target1 = document.getElementById('target-1');
  if(target1 != null){
    target1.innerHTML = "Target 1 has been found!";
  }

}

function button2Clicked() {

  target2 = document.getElementById('target-2')
  if(target2 != null){
    target2.innerHTML = "Target 2 discovered!"
  }
  // your turn to try!!
  // find target2 and change its text to "Target 2 discovered!"

}

// change styles

function button3Clicked() {

  // alert("button 3 clicked!");
  target1 = document.getElementById('target-1');
  if(target1 != null){
    target1.style.color = "red";
  }
}

function button4Clicked() {

  // alert("button4Clicked!");

  // your turn to try!!
  // find target2 and change its backgroundColor to "orange"
  target2 = document.getElementById('target-2');
  if(target2 != null){
    target2.style.backgroundColor = "orange";
  }
}

// generate new HTML tags and dynamic HTML contents by calling log( )
h3 = document.createElement('h3');
h3.innerHTML = '<p>THE END</p>'
document.body.append(h3);