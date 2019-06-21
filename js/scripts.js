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





 repository.forEach(function(pokemon){
  document.write('<p>' + pokemon.name + '<br>' + pokemon.types + '<br>' + pokemon.height + '<br>' + '</p>');
  if (pokemon.height >= 0.8) {
       document.write('Wow, that\'s big!');
     }
});
