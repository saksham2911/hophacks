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
