$('.reponse').hide();
$('#reponse-global').hover(
    
  function(){
    // Les instructions à exécuter au survol du lien
    $('.reponse').show('slow');
        /*  instruction question 1    */
    if($('#r1').is(':checked')){
        $('#reponse1').css('color','green');
        $('#img1').attr('src','images/bon.png');
      }else{
          $('#reponse1').css('color','red');
          $('#img1').attr('src','images/mauvais.png');
            
        }
        /*  instruction question 2    */
      if($('#r4').is(':checked')){
                $('#reponse2').css('color','green');
                $('#img2').attr('src','images/bon.png');
            }else{
                $('#reponse2').css('color','red');
                $('#img2').attr('src','images/mauvais.png');
            }
        /*  instruction question 3    */
      if($('#r8').is(':checked')){
                    $('#reponse3').css('color','green');
                    $('#img3').attr('src','images/bon.png');
                } else{
                    $('#reponse3').css('color','red');   $('#img3').attr('src','images/mauvais.png');
                }
  },
  function() {
    // Les instructions à exécuter lorsque le lien n'est plus survolé
    $('.reponse').hide('slow');
    $('.question img').attr('src','images/question.png');  
  }
);

// MODIFICATION DU CSS

$('.question').css({"background-color":"#F5F0F6","padding":"10px","margin-top":"20px","border":"solid 1px"});
$('.question img').css();