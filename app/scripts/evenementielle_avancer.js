// Jeu au clic

 $(function() {
    function traitement() {
      alert('Image cliquée');
    };  
    $('#activer').on('click', function() {
      $('#iron-man').click(traitement);
    });
    $('#desactiver').on('click', function() {
      $('#iron_man').off('click', traitement);
    });
});
