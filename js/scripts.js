var repository = [
  ['Bulbasaur',
  0.7,
  ['Grass', 'Poison']],

  ['Pidgey',
  0.3,
  ['Flying', 'Normal']],

  ['Zubat',
  0.8,
  ['Poison', 'Flying']],

  ['Jigglypuff',
  0.5,
  ['Fairy', 'Normal']],
  ];

  for (var i = 0; i < repository.length; i++){
    document.write('<p>' + repository[i][0]  +  ' (height: ' + repository[i][1] + ')' + '<p>');
  }
