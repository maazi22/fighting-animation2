 var forword = 0
 var  forword2 = 0

function move1(){
  var  character = document.getElementById('ch')
  if(event.keyCode == 68 && forword < 1000){ //d
    forword = forword + 20
   character.style.left = forword + "px"
   
  }
  
  if(event.keyCode === 70 && forword > 0 ) { // f
    forword = forword - 20
    character.style.left = forword + "px"
    
   } 

   if(event.keyCode === 71 ) {  //g 
    character.style.width = "262px"
    character.style.height = "262px"
     character.src = "https://www.fightersgeneration.com/characters3/sol-cstance.gif"
     setTimeout(function(){
      character.src = "https://www.fightersgeneration.com/np2/char2/gif/sol/sol-walkf.gif"
      character.style.width = "250px"
      character.style.height = "250px"

     },2200)
   
  
   }

 if(event.keyCode === 32) { //space
  character.style.width = "400px"
  character.style.height = "300px"
     character.src = "https://www.fightersgeneration.com/characters3/sol-elec.gif"
     setTimeout(function(){
      character.src = "https://www.fightersgeneration.com/np2/char2/gif/sol/sol-walkf.gif"
      character.style.width = "250px"
      character.style.height = "250px"

     },1200)
 }
 
 if(event.keyCode === 72) {  //h
  character.style.width = "900px"
  character.style.height = "400px"
    character.src = "https://www.fightersgeneration.com/characters3/sol-dam.gif"
    setTimeout(function(){
      character.src = "https://www.fightersgeneration.com/np2/char2/gif/sol/sol-walkf.gif"
      character.style.width = "250px"
      character.style.height = "250px"

     },2800)
 }

 if(event.keyCode === 74) {  //j
  character.style.width = "823px"
  character.style.height = "300px"
    character.src = "https://www.fightersgeneration.com/characters3/sol-badguy-taunt1.gif"
    setTimeout(function(){
      character.src = "https://www.fightersgeneration.com/np2/char2/gif/sol/sol-walkf.gif"
      character.style.width = "250px"
      character.style.height = "250px"

     },2000)
 }



 var character2 = document.getElementById('ch2')
console.log(event.keyCode)


 if(event.keyCode == 81 && forword2 < 1120){ // <-
  forword2 = forword2 + 20
  character2.style.right = forword2 + "px"
  
 
 }

 
 if(event.keyCode === 69 && forword2  > 0 ) { // ->
  forword2 = forword2 - 20
   character2.style.right = forword2 + "px"
   
  } 

   if(event.keyCode === 8) { //backspace 
    character2.src = "./img/fig2.gif"
    setTimeout(function(){
      character2.src = "https://www.fightersgeneration.com/characters3/spidey-scratchin.gif"
    },1500)
   }    

   if(event.keyCode === 88 ) { //x
     character2.src = "https://www.fightersgeneration.com/characters3/spidey-flipkick-fk.gif"
     character2.style.width = "375px"
     character2.style.height = "400px"
     setTimeout(function(){
      character2.src = "https://www.fightersgeneration.com/characters3/spidey-scratchin.gif"
      character2.style.width = "250px"
      character2.style.height = "250px"
     },1500)

   }

   if(event.keyCode === 86){ // v
    character2.src = "https://www.fightersgeneration.com/characters3/spidey-scratchin.gif"
    character2.style.width = "700px"
    character2.style.height = "450px"
    setTimeout(function(){
      character2.src = "https://www.fightersgeneration.com/characters3/spidey-scratchin.gif"
      character2.style.width = "250px"
      character2.style.height = "250px"
    },4000)
    
   }
 if(event.keyCode === 66){ //b
  character2.src = "https://www.fightersgeneration.com/characters3/spider-sting.gif" 
  character2.style.width = "687px"
  character2.style.height = "524px"
  setTimeout(function(){
    character2.src = "https://www.fightersgeneration.com/characters3/spidey-scratchin.gif"
    character2.style.width = "250px"
    character2.style.height = "250px"
  },6000)

 }
}


window.onkeydown = move1






 