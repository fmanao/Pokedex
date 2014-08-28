
function poke (nombre,vida,ataque,defensa,tipo,foto,descripcion) {
	this.nombre      = nombre;
	this.vida        = vida;
	this.ataque      = ataque;
	this.defensa     = defensa;
	this.tipo        = tipo;
	this.foto        = foto;
	this.descripcion = descripcion;

};

var porcentaje;
var fondoImg;
var Torchic = new poke("Torchic","100","60","40","Fuego","http://img1.wikia.nocookie.net/__cb20140612153748/es.pokemon/images/4/4f/Torchic.png","Este Pokémon está basado en un pequeño pollito. Torchic está cubierto por una suave capa de plumas con tonos anaranjados, sus alas son inútiles para volar debido a su pequeño tamaño. Antes que sus patas se desarrollen completamente, este Pokémon se mantiene cerca de su entrenador, siguiéndole a todos lados mientras aprende a caminar.")
var Treecko = new poke("Treecko","100","45","35","Planta","http://img4.wikia.nocookie.net/__cb20140612151325/es.pokemon/images/b/b8/Treecko.png","Treecko está basado en un Geco cola de hoja. Tiene unos ganchos pequeños en las plantas de los pies con los que puede escalar superficies verticales, se dice que incluso pueden caminar sobre vidrio. Es carismático, tranquilo y con gran capacidad de autocontrol. Si algún rival se le queda mirando, también él le devolverá la misma mirada sin concederle a su rival ningún centímetro de espacio. Si el rival entra en su territorio le atacará con destructor.")
var Mudkip  = new poke("Mudkip" ,"90" ,"70","50","Agua","http://img3.wikia.nocookie.net/__cb20140612152830/es.pokemon/images/a/ae/Mudkip.png","La cresta en la cabeza de Mudkip actúa como un radar altamente sensible. Esto le permite sentir los movimientos del agua y el aire, con lo que puede determinar qué es lo que ocurre a su alrededor sin usar sus ojos. Cuando está en el agua, respira utilizando las puntas de sus mejillas, ya que realmente son branquias.")
var Ralts   = new poke("Ralts"  ,"95" ,"25","25","psíquico","http://img2.wikia.nocookie.net/__cb20080910100118/es.pokemon/images/e/e8/Ralts.png","Ralts es un Pokémon que anda arrastrando su cuerpo. Respecto al cuerpo, no se sabe si está cubierto por un vestido blanco o si realmente el vestido blanco es su cuerpo. Su cabeza es blanca y tiene el cabello verde y corto el cual cubre sus ojos pequeños y rojos. Cuando se cae o se desmaya, deja al descubierto sus ojos melancólicos durante unos segundos.")

function mostrar (pokemon) {
	if (pokemon.tipo == "Fuego"){
		fondoImg = "red";
	}
	else if (pokemon.tipo == "Planta"){
		fondoImg = "rgb(97, 255, 58);";
	}
	else if (pokemon.tipo == "Agua"){
		fondoImg = "rgb(58, 129, 255)";
	}
	else if (pokemon.tipo == "psíquico"){
		fondoImg = "rgb(231, 19, 231)";
	}




	pokeName.textContent        = pokemon.nombre;
	pokeVida.innerHTML        = "<span style='background:rgb(53, 231, 19); width:"+pokemon.vida+"%; float:left; border-radius:2em'>Vida</span>";
	pokeAtaque.innerHTML      = "<span style='background:rgb(53, 231, 19); width:"+pokemon.ataque+"%; float:left; border-radius:2em'>Ataque</span>";
	pokeDefensa.innerHTML     = "<span style='background:rgb(53, 231, 19); width:"+pokemon.defensa+"%; float:left; border-radius:2em'>Defensa</span>";
	pokePic.innerHTML           = "<img src="    +pokemon.foto+"><div id='efectoImg'></div>";
	pokeTipo.innerHTML          = "<span id='difuminacion'style='margin: 0.5em 0em 0em 12em;width: 7em;background:"+fondoImg+";box-shadow: 1px -70px 69px "+fondoImg+"'>Tipo "+pokemon.tipo+"</span>";      
	pokeDescripcion.textContent = pokemon.descripcion;
};