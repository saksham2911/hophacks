var UI = require('ui');
  var topics = [
  {
    title: "Date Night",
    subtitle: "Green and crispy!"
   // subtitle: "romance"
  },
  {
    title: "Orange",
    subtitle: "Peel first!"
  },
  {
    title: "Melon",
    subtitle: "Only three left!"
  }
];
var fruitMenu = new UI.Menu({
  sections: [{
    title: 'Fruit List',
    items: topics
  }]
});
fruitMenu.show();
// Add a click listener for select button click
fruitMenu.on('select', function(event) {

  // Show a card with clicked item details
  var detailCard = new UI.Card({
    title: fruits[event.itemIndex].title,
    body: fruits[event.itemIndex].subtitle
  });

  // Show the new Card
  detailCard.show();
});
