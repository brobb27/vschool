// This is the pokemon list!

const xhr = new XMLHttpRequest()

xhr.open(`GET`, `https://api.vschool.io/pokemon`, true)
xhr.send()


xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        const pokemonJSON = xhr.responseText
        const pokemonParse = JSON.parse(pokemonJSON)
        const pokemonArray = pokemonParse.objects[0].pokemon
        console.log(pokemonArray)
        displayName(pokemonArray)
    }
}

function displayName(arr) {
    arr.forEach(function(pokemon) {
        const h2 = document.createElement(`h2`)
        h2.textContent = pokemon.name
        document.body.appendChild(h2)
    })
}