requestAPI = (pokemon) => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText)

  let pokemon = new Pokemon(data["stats"][5]["base_stat"],data["stats"][4]["base_stat"],
  data["stats"][3]["base_stat"], data["abilities"][0]["ability"]["name"],
  data["abilities"][1]["ability"]["name"])

console.log(pokemon)

}
};
xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemon}/`, true);
xhttp.send();
}
//
requestAPI("greninja")


class Pokemon {
  constructor(hp, attack, defense, ability1, ability2) {
    this.hp = hp
    this.attack = attack
    this.defense = defense
    this.ability1 = ability1
    this.ability2 = ability2
  }
}

class Zonal {
  constructor() {
  this.all()
  this.get(name)
  pokemon = []
  }
}


//   const infernape = new Pokemon
//
//
//
// const infernape = new
//
      // console.log(data["stats"][5]["base_stat"])
      // console.log(data["stats"][4]["base_stat"])
      // console.log(data["stats"][3]["base_stat"])
      // console.log(data["abilities"][0]["ability"]["name"])
      // console.log(data["abilities"][1]["ability"]["name"])
//
//       let infernape = JSON.parse(this.responseText)
//       console.log(data["stats"][5]["base_stat"])
//       console.log(infer["stats"][4]["base_stat"])
//       console.log(infernape["stats"][3]["base_stat"])
//       console.log(infernape["abilities"][0]["ability"]["name"])
//       console.log(infernape["abilities"][1]["ability"]["name"])

//
//
//
//
//
// displayUser = () => {
//     let cont = document.createElement('div')
//     let h1 = document.createElement('h1')
//     let p1 = document.createElement('p')
//     let img = document.createElement('img')
//
//     h1.innerText = user['name']
//     p1.innerText = user['followers']
//     img.setAttribute('src', user['image'])
//     cont.appendChild(h1)
//     cont.appendChild(p1)
//     cont.appendChild(img)
//     document.body.appendChild(cont)
// }
//
//
//
//
//
//
//
//
//
// // Const ALL_CARS = []
// //   function loadDoc() {
// //     var xhttp = new XMLHttpRequest(); // create and XHR object -- request object
// //     xhttp.onreadystatechange = function() {
// //       if (this.readyState == 4 && this.status == 200) { // everything takes place between this block, every thing in curly braces is considered a block
// //         let data = JSON.parse(this.responseText)
// //         for (item in data) {
// //           let car = new Car(item,
// //                             data[item].make
// //                             data[item].model
// //                             data[item].model_year
// //                             data[item].color)
// //            if (car.make =
// //              cars_sorted[data[item].make] =
// //
// //         }
// //        ;
// //       }
// //     };
// //
// //     xhttp.open("GET", "https://fizal.me/pokeapi/api/v2/id/<id>.json", true); // http verb, url
// //     xhttp.send(); //invoke XHR request (putting parentheses)
// //
// // class Car {
// //   constructor(vin, make, model, year, color) {
// //   this.vin = vin
// //   this.make = make
// //   this.make = model
// //   this.make = year
// //   this.make = color
// //
// // }
// // }
