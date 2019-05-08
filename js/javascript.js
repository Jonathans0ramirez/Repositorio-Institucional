$(document).ready(function(){
	
	/*---Intercalado dinamico de colores en Mega Menu---*/
	$(".menu_home2 li .vinculo:odd").addClass("alt");
	$(".menu_home2 li .vinculo.alt").next("ul").addClass("alt");
	
	/*---Abre submenus del Megamenu (dropdown)---*/
	$(".menu_home2 li div.vinculo").click(function(){
		$(".menu_home2 li div.vinculo").not(this).removeClass("activo");
		$(".menu_home2 li div.vinculo").not(this).next("ul").hide("fast");
		$(this).toggleClass("activo");
		$(this).next("ul").toggle("fast");
		$(this).parent().toggleClass("activo");
	});	
	
	/*---Boton hamburguesa menu movil---*/
	$("#icono_menu_rspnsv").on('click',function(){
		$(".adicion2017 ul.menu_home2").toggle("fast");
		$(this).toggleClass("activo");
	});
	
	/*---Intercalado dinamico de colores en dropdowns menÃº responsive---*/
	var width = $(window).width();
	if (width <= 940){
		$(function () {
			$(".adicion2017 ul.menu_home2 li ul li:odd").addClass("alt");
	});
	}
	
	/*--------------Recarga al girar dispositivo (mostrar de nuevo elementos ocultos por CSS)*/
	window.onorientationchange = function(){
		window.location.reload();
	}
	
});