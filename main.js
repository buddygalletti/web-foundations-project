const data = {
  customers: {
    Moe: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    },
    Larry: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    },
    Curly: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    }
  },
  prizes: {
    Foo: 1,
    Bar: 3,
    Bazz: 5
  }
};


const body = document.querySelector('body');
const header = document.createElement('div');
const sectionHeader1 = document.createElement('div');
const sectionHeader2 = document.createElement('div');
const flexBox1 = document.createElement('div');
const flexBox2 = document.createElement('div');

header.innerHTML = '<h1>Acme Prizes</h1>';
sectionHeader1.innerHTML = '<h2>Prize Inventory</h2>'
sectionHeader2.innerHTML = '<h2>Customers</h2>'

body.appendChild(header).setAttribute('id', 'header');
body.appendChild(sectionHeader1).classList.add('section-header');
body.appendChild(flexBox1).classList.add('flex-container');
body.appendChild(sectionHeader2).classList.add('section-header');
body.appendChild(flexBox2).classList.add('flex-container');



