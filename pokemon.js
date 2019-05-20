let container = document.getElementById('container')
let pokemon = ['656','657','658','390','391','392','133','196','197']

for (p in pokemon) {
  let div = document.createElement('div')
  // div.style.backgroundImage = `url('https://www.smashbros.com/assets_v2/img/fighter/${fighters[f]}/main.png')`
  div.style.backgroundImage = `url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon[p]}.png')`
  div.style.backgroundSize = 'contain'
  div.style.backgroundRepeat = 'no-repeat'
  div.style.border = '1px solid black'
  container.appendChild(div)

}

container.style.display = 'grid'
container.style.gridTemplate = 'repeat(3, 300px) / repeat(3, 25%)'
container.style.gridGap = '1%'
