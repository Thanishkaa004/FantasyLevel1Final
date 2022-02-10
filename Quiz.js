
function calculateScoreFantasyLevel1(){
  var points = 0;
  var q1 = document.quiz.fantasyLevel1Question1.value;
  var q2 = document.quiz.fantasyLevel1Question2.value;
  var q3 = document.quiz.fantasyLevel1Question3.value;
  var q4 = document.quiz.fantasyLevel1Question4.value;
  var q5 = document.quiz.fantasyLevel1Question5.value;
  var q6 = document.quiz.fantasyLevel1Question6.value;

  if(q1 === "Hedwig"){
    points += 1;
  }
  if(q2 === "Seeker"){
    points += 1;
  }
  if(q3 === "Controls"){
    points += 1;
  }
  if(q4 === "Expelliarmus"){
    points += 1;
  }
  if(q5 === "Otter"){
    points += 1;
  }
  if(q6 === "Marvolo's Ring"){
    points += 1;
  } 

 alert("Final score is " + points + "/6")


}

function calculateScoreFantasyLevel2(){
  console.log("Hi");
  var q7 = document.quiz.fantasyLevel2Question1.value;
  var q8 = document.quiz.fantasyLevel2Question2.value;
  var q9 = document.quiz.fantasyLevel2Question3.value;
  var q10 = document.quiz.fantasyLevel2Question4.value;
  var q11 = document.quiz.fantasyLevel2Question5.value;
  var q12 = document.quiz.fantasyLevel2Question6.value;
  var q13 = document.quiz.fantasyLevel2Question7.value;
  points = 0;


  if(q7 === "Butcher"){
    points += 1;
  }
  if(q8 === "Fink"){
    points += 1;
  }
  if(q9 === "Avenia"){
    points += 1;
  }
  if(q10 === "Blue and Gold"){
    points += 1;
  }
  if(q11 === "Staring directly at the princess"){
    points += 1;
  }
  if(q12 === "Brown"){
    points += 1;
  }

  if(q13 === "Thank you."){
    points += 1;
  }

  alert("Your final score is " + points + "/7");

}

function calculateScoreFantasyLevel3(){
  var q13 = document.quiz.fantasyLevel3Question1.value;
  var q14 = document.quiz.fantasyLevel3Question2.value;
  var q15 = document.quiz.fantasyLevel3Question3.value;
  var q16 = document.quiz.fantasyLevel3Question4.value;
  var q17 = document.quiz.fantasyLevel3Question5.value;
  var q18 = document.quiz.fantasyLevel3Question6.value;
  var q19 = document.quiz.fantasyLevel3Question7.value;
  var q20 = document.quiz.fantasyLevel3Question8.value;
  points = 0;

  if(q13 === "Inej"){
    points += 1;
  }
  if(q14 === "By dropping down from a rooftop"){
    points += 1;
  }
  if(q15 === "Toffee"){
    points += 1;
  }
  if(q16 === "Grey"){
    points += 1;
  }
  if(q17 === "Amsterdam"){
    points += 1;
  }
  if(q18 === "Ravka"){
    points += 1;
  }

  if(q19 === "White Island"){
    points += 1;
  }

  if(q20 === "Shipwreck"){
    points += 1;
  }

  alert("Your final score is " + points + "/8");

}




function calculateScoreFictionLevel1(){
  var points = 0;
  var q1 = document.quiz.fictionLevel1Question1.value;
  var q2 = document.quiz.fictionLevel1Question2.value;
  var q3 = document.quiz.fictionLevel1Question3.value;
  var q4 = document.quiz.fictionLevel1Question4.value;
  var q5 = document.quiz.fictionLevel1Question5.value;
  var q6 = document.quiz.fictionLevel1Question6.value;

  if(q1 === "Greg Heffley"){
    points += 1;
  }
  if(q2 === "By crossing your fingers"){
    points += 1;
  }
  if(q3 === "is getting braces"){
    points += 1;
  }
  if(q4 === "Wrestling"){
    points += 1;
  }
  if(q5 === "Tree"){
    points += 1;
  }
  if(q6 === "His mom's"){
    points += 1;
  } 

 alert("Final score is " + points + "/6")


}

function calculateScoreFictionLevel2(){
  var points = 0;
  var q1 = document.quiz.fictionLevel2Question1.value;
  var q2 = document.quiz.fictionLevel2Question2.value;
  var q3 = document.quiz.fictionLevel2Question3.value;
  var q4 = document.quiz.fictionLevel2Question4.value;
  var q5 = document.quiz.fictionLevel2Question5.value;
  var q6 = document.quiz.fictionLevel2Question6.value;
  var q7 = document.quiz.fictionLevel2Question7.value;

  if(q1 === "He makes jokes and discusses classes that would interest Auggie"){
    points += 1;
  }
  if(q2 === "Jack was suspended from school and had to write letters of apology"){
    points += 1;
  }
  if(q3 === "Courage and Greatness"){
    points += 1;
  }
  if(q4 === "Via"){
    points += 1;
  }
  if(q5 === "Summer"){
    points += 1;
  }
  if(q6 === "Jack"){
    points += 1;
  } 
  if(q7 === "Daisy"){
    points += 1;
  } 

 alert("Final score is " + points + "/7")


}


function calculateScoreFictionLevel3(){
  var points = 0;
  var q1 = document.quiz.fictionLevel3Question1.value;
  var q2 = document.quiz.fictionLevel3Question2.value;
  var q3 = document.quiz.fictionLevel3Question3.value;
  var q4 = document.quiz.fictionLevel3Question4.value;
  var q5 = document.quiz.fictionLevel3Question5.value;
  var q6 = document.quiz.fictionLevel3Question6.value;
  var q7 = document.quiz.fictionLevel3Question7.value;

  if(q1 === "Astrid"){
    points += 1;
  }
  if(q2 === "Zoey"){
    points += 1;
  }
  if(q3 === "Zoey"){
    points += 1;
  }
  if(q4 === "12"){
    points += 1;
  }
  if(q5 === "Rachel"){
    points += 1;
  }
  if(q6 === "Braidy Punch bumped her"){
    points += 1;
  } 
  if(q7 === "Asteroid"){
    points += 1;
  } 

 alert("Final score is " + points + "/7")


}

function calculateScoreNonFictionLevel1(){
  var points = 0;
  var q1 = document.quiz.nonfictionLevel1Question1.value;
  var q2 = document.quiz.nonfictionLevel1Question2.value;
  var q3 = document.quiz.nonfictionLevel1Question3.value;
  var q4 = document.quiz.nonfictionLevel1Question4.value;
  var q5 = document.quiz.nonfictionLevel1Question5.value;
  var q6 = document.quiz.nonfictionLevel1Question6.value;


  if(q1 === "Mercury"){
    points += 1;
  }
  if(q2 === "5.9 trillion (9.5 trillion km)"){
    points += 1;
  }
  if(q3 === "Greek/Roman Gods"){
    points += 1;
  }
  if(q4 === "Jupiter"){
    points += 1;
  }
  if(q5 === "Venus"){
    points += 1;
  }
  if(q6 === "Neptune"){
    points += 1;
  } 


 alert("Final score is " + points + "/6")


}

function calculateScoreNonFictionLevel2(){
  var points = 0;
  var q1 = document.quiz.nonfictionLevel2Question1.value;
  var q2 = document.quiz.nonfictionLevel2Question2.value;
  var q3 = document.quiz.nonfictionLevel2Question3.value;
  var q4 = document.quiz.nonfictionLevel2Question4.value;
  var q5 = document.quiz.nonfictionLevel2Question5.value;
  var q6 = document.quiz.nonfictionLevel2Question6.value;


  if(q1 === "70%"){
    points += 1;
  }
  if(q2 === "Days and Nights"){
    points += 1;
  }
  if(q3 === "Eye"){
    points += 1;
  }
  if(q4 === "2.5 miles"){
    points += 1;
  }
  if(q5 === "Australia"){
    points += 1;
  }
  if(q6 === "Magma"){
    points += 1;
  } 


 alert("Final score is " + points + "/6")


}

function calculateScoreNonFictionLevel3(){
  var points = 0;
  var q1 = document.quiz.nonfictionLevel3Question1.value;
  var q2 = document.quiz.nonfictionLevel3Question2.value;
  var q3 = document.quiz.nonfictionLevel3Question3.value;
  var q4 = document.quiz.nonfictionLevel3Question4.value;
  var q5 = document.quiz.nonfictionLevel3Question5.value;
  var q6 = document.quiz.nonfictionLevel3Question6.value;


  if(q1 === "Skin"){
    points += 1;
  }
  if(q2 === "Mammals"){
    points += 1;
  }
  if(q3 === "120 days"){
    points += 1;
  }
  if(q4 === "66%"){
    points += 1;
  }
  if(q5 === "15-20 times"){
    points += 1;
  }
  if(q6 === "14"){
    points += 1;
  } 


 alert("Final score is " + points + "/6")


}

