function poke(nombre,vida,ataque,defensa,tipo,foto,descripcion) {
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
//Pokemones
	var venusaur = new poke("Venusaur","14","111","103","Planta","lml","Prueba");

function pokemonMostrar(pokemon)
{
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


	pokeNombre.textContent        = pokemon.nombre;
	pokeVida.innerHTML          = "<span style='background:rgb(53, 231, 19); width:"+pokemon.vida+"%; float:left; border-radius:2em'>Vida</span>";
	pokeAtaque.innerHTML        = "<span style='background:rgb(53, 231, 19); width:"+pokemon.ataque+"%; float:left; border-radius:2em'>Ataque</span>";
	pokeDefensa.innerHTML       = "<span style='background:rgb(53, 231, 19); width:"+pokemon.defensa+"%; float:left; border-radius:2em'>Defensa</span>";
	pokePic.innerHTML           = "<img src="    +pokemon.foto+"><div id='efectoImg'></div>";
	pokeTipo.innerHTML          = "<span id='difuminacion'style='margin: 0.5em 0em 0em 12em;width: 7em;background:"+fondoImg+";box-shadow: 1px -70px 69px "+fondoImg+"'>Tipo "+pokemon.tipo+"</span>";      
	//pokeDescripcion.textContent = pokemon.descripcion;
}
/*function inicio()
{
	var rattata = new Pokemon("Rattata", 40, 2);
	rattata.vida = rattata.vida - 13;

	nombrePokemon.textContent = rattata.nombre;
	datosPokemon.textContent = document.write( "Vida: "   + rattata.vida ,
	 										   "<br />" , 
											   "Ataque: " + rattata.ataque );
}*/