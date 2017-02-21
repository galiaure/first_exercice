$(function() {
  $('#texteJQ').html('Hello world. Ce texte est affiché par jQuery.');
});

/* fonction de modification des textes */

$(function() {
$('[class~="liste"]').css('color','green');
$('[class~="lettre"]').css('color','blue');
$('[class$="e"]').css('font-size','18px');
$('li:last').css('font-size','20px');
$('p:even').css('color','red');
      }); 




var chat_chien = document.getElementById("animal1");

chat_chien.onclick = 

(function() {
    $('img').each(function(index){
        this.src = 'images/images2/image' + (index+1) + '.jpg';
        });  
    }); 
    

var chien_chat = document.getElementById("animal2");

chien_chat.onclick = 

(function() {
    $('img').each(function(index){
        this.src = 'images/images1/image' + (index+1) + '.jpg';
        });  
    }); 
    
