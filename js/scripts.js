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
    button.innerText = pokemon;
    button.classList.add('button');
    listItem.appendChild(button);
    $pokemonList.appendChild(listItem);
    $pokemonList.addEventListener('click', function (showDetails) {
      console.log(showDetails);
    });
  }

  function showDetails(pokemon) {
    console.log(pokemon);
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
  pokemonRepository.addListItem(pokemon.name);
});
