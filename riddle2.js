class Riddle2 {
    constructor(){
        this.input = createInput("Your Answer");
        this.button = createButton('Submit');
    }
    hide(){
      //  this.greeting.hide();
        this.button.hide();
        this.input.hide();
       // this.title.hide();
      }
    
    display(){
       
     
      this.input.position(450,520);
      this.button.position(450,540);
      this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      var answer = this.input.value();
    
    if (answer==="heroine"){
        //show();
gamestate = 2;
    }
    else
    {
        gamestate = 3;
    }})
    
    }
    show()
    {
        text("What word in the English ",400,290);
     textSize(30);
     text("language does the following: ",400,330)
     textSize(30);
     text("the first two letters signify a male",400,370);
     textSize(30);
     text("the first three letters signify a female",400,410)
     textSize(30);
     text("the first four letters signify a great",400,450)
     textSize(30);
     text("while the entire word signifie a great woman.",400,490)
     textSize(30);
     text("What is the word?",400,530)
     textSize(30);
     stroke("black");
     fill("black");
     text("(Note: write everything in small)",400,490);
     textSize(30);
    }
}
