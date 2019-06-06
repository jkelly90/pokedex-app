var repository = [
  ['Bulbasaur',
  0.7,
  ['grass', ' poison']],

  ['Pidgey',
  0.3,
  ['flying', ' normal']],

  ['Zubat',
  0.8,
  ['poison', ' flying']],

  ['Jigglypuff',
  0.5,
  ['fairy', ' normal']],
  ];

  for (var i = 0; i < repository.length; i++){
    document.write('<p>' + repository[i][0] + '<br>' + repository[i][2] + '<br>' +  'height: ' + repository[i][1] + '<p>');
   if (repository[i][1] >= 0.8) {
        document.write('Wow, that\'s big!');
    }
  }
