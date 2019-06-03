$(document).ready(function(){
$("#verProductos").click(function(){
	obtenerProductos();
});
$('#limpiar').click(function(){
	limpiarPantalla();
});
function obtenerProductos(){
	$.ajax({
		url:'https://mini-shop-rg.herokuapp.com/products?per_page=12',
		type:'get',
		dataType:'json',
		success:function(respuesta){
			var divListaUsuarios=$("#listaProducto");
			console.log(respuesta);
			var collectionUsers= respuesta;
			var nuevoElemento= "";
			for(var i=0; i<collectionUsers.length; i++){
				var user=collectionUsers[i];
				nuevoElemento+=
				"<div class='card-signin mx-auto col-7' align='center'>"+
					"<image class='image' src='"+user.image+"' width='200px' heigth='200px'>"+
					"<p><b>Nombre: </b>"+user.name+"</p>"+
					"<p><b>Precio: </b>"+user.price+"</p>"+
					"<p><b>Descripción: </b>"+user.description+"</p>"+
				"</div>";
			}
			divListaUsuarios.html(nuevoElemento);
		},
		error: function(error){
			alert('Ha ocurrido un error');
		}
	});
}
function limpiarPantalla(){
	$("#listaProducto").empty();
}
});