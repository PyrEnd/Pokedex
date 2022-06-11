buscar.addEventListener('click', (e)=>{
    
    // Variables
    let nombre = document.getElementById('h1');
    let img = document.getElementById('img');
    let pdv = document.getElementById('pdv');
    let attack = document.getElementById('attack');
    let defense = document.getElementById('defense');
    let specialAttack = document.getElementById('sp-attack');
    let specialDefense = document.getElementById('sp-defense');
    let speed = document.getElementById('speed');
    let weight = document.getElementById('weight');
    let type = document.getElementById('type');
    let numero = document.getElementById('numero');
    let buscar = document.getElementById('buscar');
    //

    // Obtiene el valor del input "Número"
    numero.value;
    //

    // Se contiene entre 1 y 898, ya que no existen valores fuera de ese rango.
    if (numero.value > 898 || numero.value < 1) {
        alert('Ingresa un número entre 1 y 898.');
    }

    // Se previene que la función actualice la página
    e.preventDefault()

    //
    const getPokemon = async() => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numero.value}`);
            const data = await response.json();
            console.log(data);
            nombre.textContent = data.name;

            pdv.innerHTML = `Puntos de Vida: ${data.stats[0].base_stat}`;

            attack.innerHTML = `Ataque: ${data.stats[1].base_stat}`;
            defense.innerHTML = `Defensa: ${data.stats[2].base_stat}`;

            specialAttack.innerHTML = `Ataque Especial: ${data.stats[3].base_stat}`;
            specialDefense.innerHTML = `Defensa Especial: ${data.stats[4].base_stat}`;

            speed.innerHTML = `Velocidad: ${data.stats[5].base_stat}`;
            type.innerHTML = `Tipo: ${data.types[0].type.name}`;
            
            weight.innerHTML = `Peso: ${data.weight} kg`;


            // En la API, hasta el Pokemon #650 hay Sprites en alta definición.
            // Al consultar el #651, no existen Sprites en HD, por lo que se usarán los antiguos.

            if(numero.value < 650){
                img.setAttribute("src", data.sprites.other.dream_world.front_default);
            }else{
                img.setAttribute("src", data.sprites.front_default);
            }

    
        } catch (error) {
            console.log(error);
        }
    }
    
    console.log(getPokemon());
});