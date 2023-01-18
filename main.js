async function pokemonEncyclopedia(pokemonNum) {
    let pokeAPIresponse;
    let pokeData;

    for (let i = 1; i < pokemonNum; i++) {
        pokeAPIresponse = await fetch('https://pokeapi.co/api/v2/pokemon/' + i);
        pokeData = await pokeAPIresponse.json();

        console.log(`\nName: ${pokeData.name}\nHeight: ${pokeData.height}\nWeight: ${pokeData.weight}`);

        for (let typeData of pokeData.types) {
            console.log(`Type: ${typeData.type.name}`);
        }
    }
}

pokemonEncyclopedia(10);
