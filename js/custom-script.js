/*home slider*/
$("#owl-home").owlCarousel({
          navigation : false, // Show next and prev buttons
			autoPlay: true,
			stopOnHover: true,
			singleItem:true,
			items : 1, 			
});

/*header fixed css*/
$(window).scroll(function() {
    if ($("header").offset().top > 50) {
        $("header").addClass("header-fixed");
    } else {
        $("header").removeClass("header-fixed");
    }
});


/*responsive toggle*/

$(window).resize(function(){
    var screen_width = $( window ).width();
	if(screen_width > 767) {
 	  $("nav").show();
	}
});

$(document).ready(function() {
 $(".navbar-toggle").click(function(){
	$(".navbar-toggle").toggleClass("navbar-close");
   $("nav").slideToggle(200);
   });
   
    $(".search-toggle").click(function(){
	$(".search-toggle").toggleClass("search-close");
   $(".rgt-search form").slideToggle(200);
   });
			
});


/*custome select box*/
$(document).ready(function(){
	$(".custom-select-box").append('<span></span>');
	$(".custom-select-box").each(function()
	{
		$(this).find('span').text($(this).find("select option:selected").text());
	});
	$(document).on('change','.custom-select-box select',function(){
		$selected_val=($(this).val());
		$(this).closest('.custom-select-box').find('span').text($(this).closest('.custom-select-box').find("select option:selected").text());
	});
	
	$(".custom-select-box select").change(function(){
	$(this).parent().addClass("test");
	});

});


/*checkbox and radio button*/
$(document).ready(function(){
	$('.scroll-home').click(function() {
	var pos = $('.solu-home-sec').offset().top;
    $('html, body').animate({ scrollTop: pos });
	});
	
	$('.to-top').click(function() {
		$('html, body').animate({ scrollTop: 0},500);
	});
	
	
	$cust_lbl='label';$cust_chk='checked';$cust_opt_wrp='.custom-opt';$cust_chk_wrp='.custom-chk';	$cust_input_chk="input[type='checkbox']";
	$cust_input_opt="input[type='radio']";
	$($cust_chk_wrp + ' ' + $cust_lbl + ', ' + $cust_opt_wrp + ' ' + $cust_lbl).each(function(){		
		$(this).find('input:checked').parent(this).addClass($cust_chk);		
	});
	$(document).on('change',$cust_input_chk, function (event) {
		$(this).parents('label').toggleClass($cust_chk);
		event.stopImmediatePropagation();
	});
	$(document).on('change',$cust_input_opt, function (event) {				
		$($cust_opt_wrp).find(("input:not(:checked)")).parents($cust_lbl).removeClass($cust_chk);
		$(this).parents($cust_lbl).addClass($cust_chk);
		event.stopImmediatePropagation();
	});

});


