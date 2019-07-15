var pokemonRepository = (function () {
var repository = [
  {name: 'Bulbasaur',
  height: 0.7,
  types: ['grass', ' poison']},

  {name: 'Pidgey',
  height: 0.3,
  types: ['flying', ' normal']},

  {name: 'Zubat',
  height: 0.8,
  types: ['poison', ' flying']},

  {name: 'Jigglypuff',
  height: 0.5,
  types: ['fairy', ' normal']},
  ];

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

  function showDetails(pokemon) {
    console.log(pokemon.name);
  }

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
}());




var $pokemonList = document.querySelector('.pokemon-list');

 pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});
