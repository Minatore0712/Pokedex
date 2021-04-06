let pokemonRepository = (function () {


    let pokemonList = [
        {
            name: "Bulbasaur",
            height: 0.7,
            type: ['grass', 'poison']
        },
        {
            name: "Snorlax",
            height: 2.1,
            type: ["normal"]
        },
        {
            name: "Psyduck",
            height: 0.8,
            type: ["water"]
        },
        {
            name: "Tynamo",
            height: 0.2,
            type: ["electric"]
        }
    ];

    function add(pokemon) {
        if (typeof pokemon !== "object") {
            console.log("not a pokemon, please try again");
            return;
        }
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }


    return {
        add: add,
        getAll: getAll
    };

})();

let pokemonList = pokemonRepository.getAll();

pokemonList.forEach(function (pokemon) {
    let output = pokemon.name + ` is ` + pokemon.height + ` meters high.`;
    if (pokemon.height > 1.0) {
        output = output + " - Wow! Thats huge.";
    }
    if (pokemon.height < 0.3) {
        output = output + " - So tiny!";
    }
    document.write(output + "<br>");
});