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
          detailsUrl: item.url,
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
      item.type = Object.keys(details.types);
    })
    .catch(function(e) {
      console.error(e);
    });

}

function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function () {
    showModal(item);
  });
}

function showModal(item) {
var $modalContainer = document.querySelector('#modal-container');

// clear all existing modal content
$modalContainer.innerHTML = '';

// create div element in DOM
var modal = document.createElement('div');
//add class
modal.classList.add('modal');

//add closing button
var closeButtonElement = document.createElement('button');
closeButtonElement.classList.add('modal-close');
closeButtonElement.innerText = 'Close';
closeButtonElement.addEventListener('click', e => hideModal());

// modal name element
var nameElement = document.createElement('h1');
nameElement.innerText = item.name;

// modal image
var imageElement = document.createElement('img');
imageElement.classList.add('modal-img');
imageElement.setAttribute('src', item.imageUrl);

// modal height element
var heightElement = document.createElement('p');
heightElement.innerText = 'height: ' + item.height;

var typeElement = document.createElement('p');
typeElement.innerText = 'type: ' + item.type;

// appending modal content
modal.appendChild(closeButtonElement);
modal.appendChild(nameElement);
modal.appendChild(imageElement);
modal.appendChild(heightElement);
modal.appendChild(typeElement);
$modalContainer.appendChild(modal);

$modalContainer.classList.add('is-visible');
}

//hide modal with close button
function hideModal() {
  var $modalContainer = document.querySelector('#modal-container');
  var child = $modalContainer.lastElementChild;
  while (child) {
    $modalContainer.removeChild(child);
    child = $modalContainer.lastElementChild;
  }
  $modalContainer.classList.remove('is-visible');
}

// hide modal with ESC
window.addEventListener('keydown', e => {
  var $modalContainer = document.querySelector('#modal-container');
  if (
    e.key === 'Escape' && $modalContainer.classList.contains('is-visible')
  ) {
    hideModal();
  }
});

// hide modal by clicking outside
var $modalContainer = document.querySelector('#modal-container');
$modalContainer.addEventListener('click', e => {
  var target = e.target;
  if (target === $modalContainer) {
    hideModal();
  }
});


return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  showDetails: showDetails,
  loadList: loadList,
  loadDetails: loadDetails,
  showModal: showModal,
  hideModal: hideModal,
};
})();

var $pokemonList = document.querySelector('.pokemon-list');

 pokemonRepository.loadList().then(function() {

 	pokemonRepository.getAll().forEach(function(pokemon) {
 		pokemonRepository.addListItem(pokemon);
 	});
 });
