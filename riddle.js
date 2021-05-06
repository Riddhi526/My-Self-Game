class Riddle {
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
       
     
     this.input.position(610,420);
     this.button.position(610,440);
  this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
      var answer = this.input.value();
    
    if (answer==="pencil lead"){
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
        text("I come from a mine ",600,200);
     textSize(40);
     text("and get's surrounded ",600,240)
     textSize(40);
     text("by wood only.",600,280);
     textSize(40);
     text("everyone uses me!",600,320)
     textSize(40);
     text("What am I?",600,360)
     textSize(40);
     stroke("black");
     fill("black");
     text("(Note: write everything in small)",600,400);
     textSize(40);
    }
}