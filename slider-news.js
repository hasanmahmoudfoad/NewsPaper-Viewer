

var img_width = $('.img-cont img').attr('width');
var img_height = $('.img-cont img').attr('height');
var currimage = $('.swiper-slide-active .img-cont img'); 
var inputVal = $('#blur').val();
var pageIndex = $('.swiper-pagination-current').text();



$(document).ready(function(){
  
  var images=$("img");
   for (let index = 0; index < images.length; index++) {
     $(images[index]).attr("NumImage",index+1);
   }

$('.button-blur').on('click' , function() {

  let val= $("#blur").val();

  if( val  <= images.length){
    $("[NumImage="+val+"]").addClass("blur-class");
  
    $('.blured').show();
    $('.blured').fadeOut(1500);
  }else{
    $('.not-blured').show();
    $('.not-blured').fadeOut(1500);
  }

    //console.log( $(`[NumImage=${val}]`).attr('src'));
//   var slideIndex = $('.swiper-pagination-current').text();
//   var inputVal = $('#blur').val();
//   var imageRelated = $('.swiper-pagination-current');

//  console.log('image related : ' +imageRelated);
//  console.log('input val is : ' +inputVal);
//  console.log('slide index is : ' +slideIndex);


// if( inputVal  == slideIndex ){

//   console.log('we are good here');
//   console.log('image src is : ' + $('.swiper-slide .img-cont img').attr('src'));
// }else{console.log('wrong PAGE NUM')};

});
    

$('.button-blur').on('click' , function() {
  $("[NumImage="+val+"]").removeClass("blur-class");
  $('.Sharpen').show();
  $('.Sharpen').fadeOut(1500);
});






    $('.zoom-in').on('click', function(){
      $('.zoom-out').css({'opacity' : '1'});
      img_width = (img_width * 1.3) ;
      $('.img-cont img').width(img_width);
      $('.swiper-container').height(img_width*1.6);
      
    });



    $('.zoom-out').on('click', function(){

      if(img_width > 300){
      img_width = (img_width / 1.3) ;
      $('.img-cont img').width(img_width);
      $('.swiper-container').height(img_width*1.5);
    };
    if(img_width >= 300 && img_width<=350){
      $('.zoom-out').css({'opacity' : '0.3'});
    };
    });


    $('.defult-screen').on('click', function() {
        img_width = img_width*0+300;
        $('.img-cont img').width(img_width);
        $('.swiper-container').height(img_width*1.6);
        
if(img_width <= 300 || img_width>=350){
  $('.zoom-out').css({'opacity' : '0.3'});
};

    });

      
    $('#print-icon').on('click' , function(){
      var currimage = $('.swiper-slide-active .img-cont img')[0];
      console.log(currimage);

      var newWin=window.open('','Print-Window');
      newWin.document.open();
      newWin.document.write('<html><head><title>Print</title></head><body onload="window.print()"><img width="100%" src="'+currimage.src+'"></body></html>');
      newWin.document.close();
      setTimeout(function(){newWin.close();},1);
    });
    

  $('#download').on('click' , function(){
    
var activeimgsrc = $('.swiper-slide-active .img-cont img').attr('src');
 var activeimg = $('.swiper-slide-active .img-cont a img')[0];

 
  $('.swiper-slide-active img').click();
 var downloadWindow =window.open('','Print-Window');

  downloadWindow.document.write('<html><head><title>Download</title></head><body><img width="100%" src="'+activeimg.src+'"></body></html>');

 });
    


    $(document).on('keyup', function(event) {
      if (event.key == "Escape") {
        $('body').removeClass('body-fs');
        $('.large-cont').removeClass('large-cont-fs');
        $('.konafa').removeClass('konafa-fs');
        $('.swiper-container').removeClass('swiper-container-fs');
        $('.task-bar').removeClass('task-bar-fs');
        $('.swiper-button-prev').removeClass('swiper-button-prev-fs');
        $('.swiper-button-next').removeClass('swiper-button-next-fs');
        $('.swiper-pagination-fraction').removeClass(' swiper-pagination-fraction-fs');
        document.exitFullscreen();
        
      };
    });


function blur() {
  

};




  });
  
  function toggleFullscreen(elem) {
    elem = elem || document.documentElement;
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      if (elem.requestFullscreen) {
        $('body').addClass('body-fs');
        $('.konafa').addClass('konafa-fs');
        $('.large-cont').addClass('large-cont-fs');
        $('.swiper-container').addClass('swiper-container-fs');
        $('.task-bar').addClass('task-bar-fs');
        $('.swiper-button-prev').addClass('swiper-button-prev-fs');
        $('.swiper-button-next').addClass('swiper-button-next-fs');
        $('.swiper-pagination-fraction').addClass(' swiper-pagination-fraction-fs');

        elem.requestFullscreen();
    $(document).on('keyup', function(event) {
      if (event.key === "ArrowRight") {
  $('.swiper-button-next').click();};
      if (event.key === "ArrowLeft") {
        $('.swiper-button-prev').click();};
      });
  
if( $('.img-cont').height >= 950){
  $('.swiper-button-next:after').css({'margin-right' : '45px'});
};

      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        $('body').removeClass('body-fs');
        $('.large-cont').removeClass('large-cont-fs');
        $('.swiper-container').removeClass('swiper-container-fs');
        $('.task-bar').removeClass('task-bar-fs');
        $('.swiper-button-prev').removeClass('swiper-button-prev-fs');
        $('.swiper-button-next').removeClass('swiper-button-next-fs');
        $('.swiper-pagination-fraction').removeClass(' swiper-pagination-fraction-fs');
        document.exitFullscreen();
       
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
        
      }
    }
  }
  