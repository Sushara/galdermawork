
(function($){
  $(document).ready(function(){

      if($(window).width() <= 425){
      $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
      event.preventDefault(); 
      event.stopPropagation(); 
      $(this).parent().siblings().removeClass('open');
      $(this).parent().toggleClass('open');
      });
    }

    $('.exit').on('click',function(event) {
    $('.navbar-collapse').hide();
    });
     $('.navbar-toggle').on('click',function(event) {
    $('.navbar-collapse').show();
    });

  });
})(jQuery);
