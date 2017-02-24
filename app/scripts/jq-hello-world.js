$(function() {
  $('#texteJQ').html('Hello world. Ce texte est affiché par jQuery.');
});

/* --------------- */
/* fonction de modification des textes */

$(function() {
$('[class~="liste"]').css('color','green');
$('[class~="lettre"]').css('color','blue');
$('[class$="e"]').css('font-size','18px');
$('li:last').css('font-size','20px');
      }); 


/* --------------- */

var chat_chien = document.getElementById("animal1");

chat_chien.onclick = 

(function() {
    $('img').each(function(index){
        this.src = 'images/images2/image' + (index+1) + '.jpg';
        });  
    }); 
    
/* --------------- */

var chien_chat = document.getElementById("animal2");

chien_chat.onclick = 

(function() {
    $('img').each(function(index){
        this.src = 'images/images1/image' + (index+1) + '.jpg';
        });  
    }); 
    
/* --------------- */

/* Auto attribut lien blank et set */

$('a').attr('target', function() {
  if(this.host == location.host) return '_self'
  else return '_blank'
});

/* --------------- */

/* ajout d'une classe pour les images animaux */
$(function() {
$('#animaux img').addClass('img_dimension');
});

/* --------------- */


/* connaitre la position des bloc avec jquery */

var posparent = $('#parent').position();
var posenfant = $('#enfant').position();


$('#resultat').text('Parent : x=' + posparent.left + ', y=' + posparent.top + ' Enfant : x=' + posenfant.left + ', y=' + posenfant.top);
                   
/* --------------- */

/* connaitre les dimensions des bloc avec jquery */

var dimensions = 'width=' + $('div').width() + ', height=' + $('div').height() ;
$('#resultat2').text(dimensions);

/* --------------- */

/* Associer des données des balises avec jquery */

$(function() {
    var div = $('div')[0];
    $.data(div, 'mesValeurs', {premier: 'bonjour', deuxieme: 12, troisieme:'http://www.perdu.com' });
    
    var val1 = $.data(div, 'mesValeurs').premier;
    var val2 = $.data(div, 'mesValeurs').deuxieme;
    var val3 = $.data(div, 'mesValeurs').troisieme;    
    $('#sp1').text(val1);
    $('#sp2').text(val2);
    $('#sp3').text(val3);
});

/* --------------- */

/*  Insérer et remplacer des éléments dans le DOM   */

$('h2').append('<hr>');
$('h2').each(function(){
    $(this).replaceWith('<h3>' + $(this).text() + '</h3>');
});
$('<hr>').prependTo($('h3:last'));
$('#deux').after($('#un'));
$('#deux').clone().insertBefore($('#un'));
$('ul:last').clone().insertBefore($('h3:first'));
$('ul:last').wrap('<strong></strong>');

