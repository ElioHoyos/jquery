var x;
x=$(document);
x.ready(inicializar);

function inicializar()
{

	var x;
	x=$("#hola");
	x.click(clickHecho);

}

function clickHecho()
{

	var x;
	x=$("#hola");
	x.css("color","red");
	x.css("background-color","yellow");
	x.css("font-size","24px");
	x.css("border","1px solid black");

}