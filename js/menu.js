$(document).ready(function(){
	// Agregando y Eliminando Clase nav-responsive
	var wd = $(window).width();
	// Menu Responsive
	$(".boton-menu span").click(function(e){

	document.getElementById("col_menu").setAttribute("class", "col-lg-12");
		e.preventDefault();
		if($(".boton-menu span").attr('class') == 'icon-menu'){
			$(".boton-menu span").removeClass('icon-menu').addClass('icon-cancel-circle');
			if(wd> 528){
				$(".navegacion nav").animate({left:'-19%'})
			}
			else{
				$(".navegacion nav").animate({left:'-24%'})
			}
		} else {
			$(".boton-menu span").removeClass('icon-cancel-circle').addClass('icon-menu');
			$(".navegacion nav").animate({left:'-150%'})
		}
	});

	
	// console.log(wd);
	if(wd <= 700 ){
		$(".navegacion nav").addClass('nav-responsive')
	}else{
		$(".navegacion nav").removeClass('nav-responsive')
	}
			
	$(window).resize(function(){
		var wdi = $(window).width();
		// console.log(wdi)

		if(wdi <= 700 ){
			$(".navegacion nav").addClass('nav-responsive')
		}else{
			$(".navegacion nav").removeClass('nav-responsive')
			$(".navegacion nav").css({'position':''})
		}
	});

	// Menu Fixed
	var navTop = $('.navegacion').offset().top;
	var navHeight = $('.navegacion').height();

	$(window).scroll(function(){
		// console.log($(window).scrollTop());
		if($(window).scrollTop() > navTop){
			$('.navegacion').css({'position':'fixed','top':'0'})
			$('body').css({'padding-top':navHeight})
			$('.nav-responsive').css({'position':'fixed'})
		} else{
			$('.navegacion').css({'position':'','top':''})
			$('body').css({'padding-top':'0'})
			$('.nav-responsive').css({'position':'absolute'})
		}
	});
});