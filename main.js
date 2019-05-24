requestAPI = (pokemon) => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText)

  let pokemon = new Pokemon(data["stats"][5]["base_stat"],data["stats"][4]["base_stat"],
  data["stats"][3]["base_stat"], data["abilities"][0]["ability"]["name"],
  data["abilities"][1]["ability"]["name"])

  zonal.pokedex.push(pokemon);
console.log(pokemon)

}
};
xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemon}/`, true);
xhttp.send();
}



class Pokemon {
  constructor(hp, attack, defense, ability1, ability2) {
    this.hp = hp
    this.attack = attack
    this.defense = defense
    this.ability1 = ability1
    this.ability2 = ability2
  }
}
requestAPI("greninja")
requestAPI("infernape")
requestAPI("eevee")

class Zonal {
  constructor() {
  this.pokedex = []
}

  all() {
  console.log(pokedex)
}

get(name) {
  return pokedex
}
}

zonal = new Zonal




// zonal.push("infernape");
// zonal.push("eevee");



displayUser = () => {
    let cont = document.createElement('div')
    let h1 = document.createElement('h1')
    let p1 = document.createElement('p')
    let img = document.createElement('img')

    h1.innerText = user['name']
    p1.innerText = user['followers']
    img.setAttribute('src', user['image'])
    cont.appendChild(h1)
    cont.appendChild(p1)
    cont.appendChild(img)
    document.body.appendChild(cont)
}
