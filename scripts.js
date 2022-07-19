/* Apertura y cierre de menú responsive design */

jQuery('document').ready(function($){

    var menuBtn = $('.menuicon'),
        menu = $('.navigation ul');

    menuBtn.click(function() {

        if(menu.hasClass('show')) {
            menu.removeClass('show');
        } else {
            menu.addClass('show');
        }

    });
});