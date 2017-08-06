$(document).ready(function() {
		var ans = Cookies.get('xerion-cookies');
		if(ans !== undefined){
        	var target = $('.toggle').attr('href');
        	$(target).toggleClass('hidden show');			
		};
});

$(function () {
    $('.toggle').click(function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $(target).toggleClass('hidden show');
		Cookies.set('xerion-cookies', 'accepted', { expires: 28 })		
    });
});



