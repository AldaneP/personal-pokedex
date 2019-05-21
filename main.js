z_pokemon = []

class Pokemon {
  constructor(hp, attack, defense, abilities) {
  this.hp = hp
  this.attack = attack
  this.abilities = []
}

}







// requestAPI = () => {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             let data = JSON.parse(this.responseText)
//             user = {
//                 name: data['name'],
//                 username: data['login'],
//                 image: data['avatar_url'],
//                 repo_count: data['public_repos'],
//                 followers: data['followers']
//             }
//         }
//     };
//     xhttp.open("GET", " https://api.github.com/users/defunkt", true);
//     xhttp.send();
// }
//
// requestAPI()
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









// Const ALL_CARS = []
//   function loadDoc() {
//     var xhttp = new XMLHttpRequest(); // create and XHR object -- request object
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) { // everything takes place between this block, every thing in curly braces is considered a block
//         let data = JSON.parse(this.responseText)
//         for (item in data) {
//           let car = new Car(item,
//                             data[item].make
//                             data[item].model
//                             data[item].model_year
//                             data[item].color)
//            if (car.make =
//              cars_sorted[data[item].make] =
//
//         }
//        ;
//       }
//     };
//
//     xhttp.open("GET", "https://fizal.me/pokeapi/api/v2/id/<id>.json", true); // http verb, url
//     xhttp.send(); //invoke XHR request (putting parentheses)
//
// class Car {
//   constructor(vin, make, model, year, color) {
//   this.vin = vin
//   this.make = make
//   this.make = model
//   this.make = year
//   this.make = color
//
// }
// }
