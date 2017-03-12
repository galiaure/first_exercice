// Jeu au clic

$(function() {
    $('img').css('width','50px');
    // Dimensions de la fenêtre
    var largeur = ($(window).width()) - 50;
    var hauteur = ($(window).height()) - 50;

    // Affichage de la première image en (100, 100)
    var p = $('#target').offset();
    p.top=250;
    p.left=100;
    $('#target').offset(p);

    // Gestion du clic et déplacement de l'image
    $("#target").click(function() {
      x = Math.floor(Math.random()*largeur);
      y = Math.floor(Math.random()*hauteur);
      var p = $('#target').offset();
      p.top = y;
      p.left = x;
      $('#target').offset(p);

    });

  });

// Scroll

 $(function() {
    $('p').scroll(function() {
      $('p').css('color','red');
    });
    $(window).scroll(function() {
       $('p').css('color','green');
    });
  });

// Insertion des infos de clic souris

$(function() {
    $('#target').mousedown(function(e){
      $('#rapport').html('Événement : ' + e.type + '. Bouton pressé : ' +  e.which );
    });
  });

// Action sur clavier

 $(function() {
    $('#target1').keydown(function(){
      $('#lumiere').css('background-color', 'green');
    });
    $('#target1').keyup(function(){
        $('#lumiere').css('background-color', 'white');
    });
  });

// Insertion des infos de clic clavier

  $(function() {
    $('#saisie').keypress(function(e) {
        var c = String.fromCharCode(e.which);
        $('#unelettre').text(c);
    });
  });

// Utilisation des focus et blur

 $(function() {
    $('.f').focus(function() {
      $('#resultat').text($(this).attr('id'));
    });
    $('.f').blur(function() {
      $('#resultat2').text($(this).attr('id'));
    });

  });

 $(function() {
    $('fieldset').focusin(function() {
      $('#resultat').text($(this).attr('id'));
    });
    $('fieldset').focusout(function() {
      $('#resultat2').text($(this).attr('id'));
    });
  });

// Utilisation du resize

  $(function() {
    $(window).resize(function() {
      var taille = 'Taille de la fenêtre : ' + $(window).width() + 'px x ' + $(window).height() + 'px';
      $('#resultat3').text(taille);
    });
  });

// Utilisation du change

  $(function() {
    $('select').change(function() {
        $('#resultat4').text('Vous venez de sélectionner "' + $(this).val() +'".');
    });
  });

//  Vérification du chargement et d'actualisation de la page

  $(function() {
    $(window).load(function() {
        $('#resultat5').text('La page est chargée');
    });
    $(window).unload(function() {
        alert('Vous avez demandé à changer de page');
    });
  });

