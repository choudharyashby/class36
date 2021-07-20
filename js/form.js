class Form
{ constructor (){}

 display(){
    var title = createElement('h2');
    title.position(300,0); 
    title.html('Car Racing Game'); 
    
    var input = createInput();
    input.position(250,160); 
    var button = createButton('Play'); 
     button.position(250,200); 
        
     var greeting = createElement('h3'); 
    
     button.mousePressed(function(){ 
            input.hide();
             
            button.hide();
              
            var name = input.value();
            greeting.html("hello " + name);
            greeting.position(250,160);
            playerCount+=1; 
            player.update(name); 
            console.log(name)
            player.updateCount(playerCount); 

                }) 
            } 
        }