
// Variable de suppression d'ancien contenu

var refresh = function(){ 
    $(':input[name="label"]').remove();
    $(':button[name="ok"]').remove();
    $('label[name="titre"]').remove();
    $('#droite hr').remove();
};

//Rajout du menu label

$('button:first').click(function(){
    //netoyage
    refresh();
    
    $('#droite').append('<hr>'+'<label name="titre">Texte du label</label>'+'<input type="text" name= "label">'+'<button name="ok" id="bouton1">OK</button>');
    
});

//transfert du résultat et suppression du contenu mère

$('#droite').on('click', '#bouton1',function(){
    
    //variable stockant le texte du input
    var valeur_texte = $(':input[name="label"]').val();
    
    $('#gauche').append('<span>' + valeur_texte + '</span>');
    //netoyage
    refresh();

});

// Rajout de la zone de texte

$('button:eq(1)').click(function(){
    //netoyage
    refresh();
    
    $('#droite').append('<hr>'+'<label name="titre">id de la zone de texte</label>'+'<input type="text" name= "label">'+'<button name="ok" id="bouton2">OK</button>');
    
});

//transfert du résultat et suppression du contenu mère

$('#droite').on('click', '#bouton2',function(){
    
    //variable stockant le texte de l'id
    var valeur_id = $(':input[name="label"]').val();
    
    $('#gauche').append('<input id=' +'"'+ valeur_id + '"' + 'type="text">' + '<br>');
    //netoyage
    refresh();

});

// Rajout de la zone bouton

$('button:eq(2)').click(function(){
    //netoyage
    refresh();
    
    $('#droite').append('<hr>'+'<label name="titre">Texte du bouton</label>'+'<input type="text" name= "label">'+'<button name="ok" id="bouton3">OK</button>');
    
});

$('#droite').on('click', '#bouton3',function(){
    
    //variable stockant le texte de l'id
    var valeur_bouton = $(':input[name="label"]').val();
    
    $('#gauche').append('<button>' + valeur_bouton + '</button>');
    //netoyage
    refresh();

});
