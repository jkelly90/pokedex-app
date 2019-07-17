var pokemonRepository = (function () {

var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

var repository = [];

  function addListItem(pokemon) {
    var listItem = document.createElement('li');
    var button = document.createElement('button')
    button.innerText = pokemon.name;
    button.classList.add('button');
    listItem.appendChild(button);
    $pokemonList.appendChild(listItem);
    listItem.addEventListener('click', function () {
    showDetails(pokemon);
    });
  }

function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function () {
    console.log(item);   });
}

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

function loadList() {
  return fetch(apiUrl, { method: 'GET' })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      json.results.forEach(function(item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    })
    .catch(function(e) {
      console.error(e);
    });
}

function loadDetails(item) {
  var url = item.detailsUrl;
  return fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    })
    .catch(function(e) {
      console.error(e);
    });
}

return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails
};
})();

var $pokemonList = document.querySelector('.pokemon-list');

 pokemonRepository.loadList().then(function() {

 	pokemonRepository.getAll().forEach(function(pokemon) {
 		pokemonRepository.addListItem(pokemon);
 	});
 });
