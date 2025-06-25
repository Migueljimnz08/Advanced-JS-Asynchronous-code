//RESUELVE TUS EJERCICIOS AQUI
//Ej 1
function getAllBreeds() {
  return fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(breed => Object.keys(breed.message))
 
        .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
     

//getAllBreeds().then(breed => console.log(breed));

//Ej 2
function getRandomDog() {
    return fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(img=> img.message)
        .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

//getRandomDog().then(url=> console.log(url));

//Ej 3
function getAllImagesByBreed (){
    return fetch('https://dog.ceo/api/breed/komondor/images')
        .then(res=> res.json())
        .then(komo=> komo.message)
        .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
//getAllImagesByBreed().then(url=> console.log(url));

//Ej 4
function getAllImagesByBreed2(breed) {
    return fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then(res=> res.json())
        .then(breeds=> breeds.message)
        .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
//getAllImagesByBreed2(`pug`).then(url=> console.log(url));

//Ej 5
function getGitHubUserProfile (username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then(res=> res.json())
        .then(user=> user)
        .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
//getGitHubUserProfile('Migueljimnz08').then(user=> console.log(user));

//Ej 6
function printGithubUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then(res=> res.json())
        .then((data)=> {
         const user= {
            img: data.avatar_url,
            name: data.name || 'Miguel'
          } 
          let pintar = '<article>';
          pintar += `<img src=${user.img}> <p>${user.name}<p>` 
          pintar += '</article>';
          document.body.innerHTML += pintar
           
          return user;
        })

 }
//printGithubUserProfile('Migueljimnz08').then(user=> console.log(user));

//Ej 7
function getAndPrintGitHubUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
     .then(res=> res.json())
     .then(user => {
         let container = `<section>
                     <img src="${user.avatar_url}" alt="${user.name}">
                     <h1>${user.name || `${username}`}</h1>
                     <p>Public repos: ${user.public_repos}</p>
                     </section>`;
         document.body.innerHTML += container;
         return container
      });
 }
//getAndPrintGitHubUserProfile('Migueljimnz08').then(user=> console.log(user));

//Ej 8 (Funciona BIEN!)
//const buscador ='<section>'+
                // '<form id="buscador">'+
                // '<label for="usuario">Usuario</label>'+
                // '<input type="text" id ="usuario" name="usuario" required>'+
                // '<button type="submit">Buscar</button>'+
                // '</form>'+
                // '</section>';

//document.body.innerHTML += buscador;

//document.getElementById('buscador').addEventListener('submit', (event) => {
//  event.preventDefault();

//   const usuario = event.target.elements.usuario.value.trim();

//   let msj= '';

//   if (usuario.length < 1 || usuario.length > 50) {
//     console.log('Usuario fuera de rango: 1-50');
//     msj += 'Usuario fuera de rango: 1-50\n';
// }

// if (msj.length !=0) {
//     alert(msj);
//     let p = document.createElement('pre');
//     let message = document.createTextNode(msj);
//     p.style.color = '#DD1C1A';
//     p.style.fontSize = '16px';
//     p.appendChild(message);

//      document.getElementById('buscador').appendChild(p)
// } else{
//   getAndPrintGitHubUserProfile(usuario).then((user)=> console.log(user));
//   event.target.reset();
// }
//})

//Ej 9
let userNames2= ['NazaretMelquiades', 'Migueljimnz08']
function fetchGithubUsers(userNames) {
  return Promise.all(userNames.map(users => {
    return fetch(`https://api.github.com/users/${users}`).then(res => res.json())
    })
  ).then(userData => userData) 
          //   const userUrl= userData.repos_ur;
          //   const userName= UserData.name;
} 
fetchGithubUsers(userNames2).then(userData => {
  for(let users of userData) {
    console.log(users.repos_url);
    console.log(users.name)
  }
});
