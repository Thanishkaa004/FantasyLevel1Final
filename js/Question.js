
class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter your option");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("BOOKS TRIVIA");
    this.title.position(190, 0);
    //document.body.style.backgroundColor = "green";
    
    
    document.body.style.backgroundImage = "url('book.jpg')";

    // this.question("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    // this.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.html("Which genre do you want to pick first?? " );
    // question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );

    this.question.position(150, 80);
    this.option1.html("Fiction" );
    this.option1.position(150, 100);
    this.option2.html("Fantasy" );
    this.option2.position(150, 120);
    this.option3.html("Non-Fiction " );
    this.option3.position(150, 140);

  

    


    
    

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    

    this.button.mousePressed(()=>{
      if(this.input2.value() === "Fantasy"){
        window.location.assign("https://thanishkaa004.github.io/FantasyLevel1Final/FantasyLevel1.html")
      }
      if(this.input2.value() === "Fiction"){
        window.location.assign("https://thanishkaa004.github.io/FictionLevel1/FictionLevel1.html")
      }
      if(this.input2.value() === "Non-Fiction"){
        window.location.assign("https://thanishkaa004.github.io/NonFictionLevel1/NonfictionLevel1.html")
      }
      
      // this.message.html("Thank You, Your Answer Has Been Submitted");
      // this.message.position();

      // this.message("Thank You, Your Answer Has Been Submitted");
      // this.message(350, 350);

      // this.message.html("Thank You, Your Answer Has Been Submitted");
      // this.message.position(350);


    });
  }
}
