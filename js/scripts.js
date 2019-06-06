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

  for (var i = 0; i < repository.length; i++){
    document.write('<p>' + repository[i].name + '<br>' + repository[i].types + '<br>' +  'height: ' + repository[i].height + '<p>');
   if (repository[i].height >= 0.8) {
        document.write('Wow, that\'s big!');
    }
  }
