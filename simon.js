$(document).ready(function(){
var combination =[];
var userCombination =[];
var stepsCount = 0;
var strict;


function chooseStep(){
  var randomnumber = Math.ceil(Math.random()*100);
  if (randomnumber >= 0 && randomnumber <=25 ){
     return 1;
   }
  else if (randomnumber >= 26 && randomnumber <= 50 )
  {
     return 2;
  }
  else if (randomnumber >= 51 && randomnumber <= 75 )
  {
     return 3;
  }
   else{
     return 4;
  }
}

function compareArrays(a,b){
  for (var j= 0; j < a.length; j++){
    if(a[j] != b[j]){
      return false;
      break;
    }
  }
 return true;
}


function playStep (oneStep){
  var audio = $("#" + "audio" + oneStep)[0];
  audio.play();
  $('#' + "id" + oneStep).css("opacity","1");
  setTimeout(function(){
  $('#' + "id" + oneStep).css("opacity", "0.7");
}, 400);
}

function playCombination (x,h){
  setTimeout(function() { playStep(x[h]); }, 900*(h+1));
}

function compareCombinations() {
  if(userCombination.length == combination.length && compareArrays(combination,userCombination) == true && stepsCount == 19){
    $('#winner').css('visibility','visible');
    setTimeout(function(){
     $('#winner').css('visibility','hidden');
  }, 1500);
  combination =[];
  userCombination =[];
  stepsCount = 0;
  $("#game_steps").text(stepsCount);
  }
  else if (userCombination.length == combination.length && compareArrays(combination,userCombination) == true && stepsCount != 19) {
  stepsCount++;
  userCombination =[];
  $("#game_steps").text(stepsCount);
  var anotherStep = chooseStep();
  combination.push(anotherStep);
  console.log("combination" + combination);
  console.log("user combination" + userCombination);
  setTimeout(function(){
  for (var k = 0; k < combination.length; k++ ){
   playCombination(combination, k);
  }
}, 1000);

  }
  else if(userCombination.length == combination.length && compareArrays(combination,userCombination) == false && strict == false){
  userCombination =[];
  $(this).css('visibility','hidden');
  $('#error').css('visibility','visible');
  setTimeout(function(){
   $('#error').css('visibility','hidden');
}, 1000);
  setTimeout(function(){
  for (var k = 0; k < combination.length; k++ ){
   playCombination(combination, k);
  }
}, 1200);
  }
  else if (userCombination.length == combination.length && compareArrays(combination,userCombination) == false && strict == true){
    $('#error').css('visibility','visible');
    setTimeout(function(){
     $('#error').css('visibility','hidden');
  }, 1000);
    //clear all the previous info
    combination =[];
    userCombination =[];
    stepsCount = 0;
    setTimeout(function(){
     $("#game_steps").text(stepsCount);
  }, 1200);
    //find a new step, push it to array and play it
    var nextStep = chooseStep();
    combination.push(nextStep);
    setTimeout(function(){
     playStep(nextStep);
  }, 1600);
    console.log(combination);
    console.log(userCombination);
  }
}

$("#start").click(function(){
  strict = false;
  //clear all the previous info
  combination =[];
  userCombination =[];
  stepsCount = 0;
  $("#game_steps").text(stepsCount);
  //find a new step, push it to array and play it
  var nextStep = chooseStep();
  combination.push(nextStep);
  playStep(nextStep);
  console.log(combination);
  console.log(userCombination);
});


$("#id1").click(function(){
  //push user step to array and play it
  var nextStep = 1;
  userCombination.push(nextStep);
  playStep(nextStep);

  //compare length of userCombination and combination. If length and content are the same
 compareCombinations()
});

$("#id2").click(function(){
  //push user step to array and play it
  var nextStep = 2;
  userCombination.push(nextStep);
  playStep(nextStep);

  //compare length of userCombination and combination. If length and content are the same
  compareCombinations()
});

$("#id3").click(function(){
  //push user step to array and play it
  var nextStep = 3;
  userCombination.push(nextStep);
  playStep(nextStep);

  //compare length of userCombination and combination. If length and content are the same
  compareCombinations()

});

$("#id4").click(function(){
  //push user step to array and play it
  var nextStep = 4;
  userCombination.push(nextStep);
  playStep(nextStep);

  //compare length of userCombination and combination. If length and content are the same
  compareCombinations()

});
//STRICT MODE---------------
$("#strict").click(function(){
  strict = true;
  //clear all the previous info
  combination =[];
  userCombination =[];
  stepsCount = 0;
  $("#game_steps").text(stepsCount);
  //find a new step, push it to array and play it
  var nextStep = chooseStep();
  combination.push(nextStep);
  playStep(nextStep);
  console.log(combination);
  console.log(userCombination);
});



});
