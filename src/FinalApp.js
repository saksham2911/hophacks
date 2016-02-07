var UI = require('ui');

var dateTopics = ['Spirit animal?', 'What is your story?', 'What does your name mean to you?', 'Where would you teleport to?', 'Strangest thing about where you grew up?', 'Favorite cuisine?', 'Least favorite novel?', 'Favorite movie?', 'Ideal job?'];
var parentTopics = ['Places you have travelled', 'Interesting books', 'Hobbies you have', 'Sports teams', 'Favorite historical figures', 'Family vacations', 'Family origins', 'Favorite plays', 'Favorite foods'];
var partyTopics = ['New restaurants', 'Hobbies', 'Politics', 'TV Shows', 'Music', 'Movies','Social media', 'Celebrities','Favorite foods']; 
var randomNum = Math.floor(Math.random() * 8);


  var settings = [
  {
    title: "Date Night",
    subtitle: "Things are getting awkward...",
    body: dateTopics[randomNum]
  },
    
  {
    title: "Meeting the Parents",
    subtitle: "Oh my god do they like me",
    body: parentTopics[randomNum]
    
  },
  {
    title: "Party Time",
    subtitle: "DDR anyone?",
    body: partyTopics[randomNum]
  }
];


//menu choosing stuff
var settingsMenu = new UI.Menu({
  sections: [{
    title: 'Settings List',
    items: settings
  }]
});

settingsMenu.show();


// Add a click listener for select button click
settingsMenu.on('select', function(event) {
  // Show a card with clicked item details
 var detailCard = new UI.Card({
   // title: settings[event.itemIndex].title,
   // subtitle: settings[event.itemIndex].subtitle,
    body: settings[event.itemIndex].body
  });

  // Show the new Card
  detailCard.show();
});

