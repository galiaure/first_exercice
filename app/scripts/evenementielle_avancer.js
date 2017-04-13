// Jeu au clic

 $(function() {
     
    function traitement() {
      alert('Image cliquée');
    }; 
     
    $('#activer').on('click', function() {
      $('#iron_man').click(traitement);
    });
     
    $('#desactiver').on('click', function() {
      $('#iron_man').off('click', traitement);
    });
     
});

//  Evenement unique et déclenchement d'évènement

$(function() {
    $('#jurassik').click(function(event,texte) {
      if (texte == undefined)
        texte = "par vous";
      $('#message').text('L\'image a été cliquée ' + texte).fadeIn(1000).fadeOut(1000);
    });
    $('button').click(function() {
      $('#jurassik').trigger('click', 'par jQuery');
    });
  });
    