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
    },
    Buddy: {
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

// selecting the body and creating all of the containers
const body = document.querySelector('body');
const header = document.createElement('div');
const sectionHeader1 = document.createElement('div');
const sectionHeader2 = document.createElement('div');
const flexBox1 = document.createElement('div');
const flexBox2 = document.createElement('div');

// adding header html to containers that need them
header.innerHTML = '<h1>Acme Prizes</h1>';
sectionHeader1.innerHTML = '<h2>Prize Inventory</h2>'
sectionHeader2.innerHTML = '<h2>Customers</h2>'

// add id's to the flex-containers
flexBox1.setAttribute('id', 'prizes');
flexBox2.setAttribute('id', 'users');

// appending containers to body in the correct order and adding attributes
body.appendChild(header).setAttribute('id', 'header');
body.appendChild(sectionHeader1).classList.add('section-header');
body.appendChild(flexBox1).classList.add('flex-container');
body.appendChild(sectionHeader2).classList.add('section-header');
body.appendChild(flexBox2).classList.add('flex-container');


// using temp lit to create prize cards
const prizeTemplate = function(data, prize) {
  const prizes = Object.keys(data.prizes);
  if(prizes.includes(prize)){
    return `
      <div class='prize-card ${prize}'>
        <div class='blue'>
          ${prize}
        </div>
        <div class='circle-container'>
          <div class=${data.prizes[prize] === 0 ? 'circle-red':'circle-blue'}>
            ${data.prizes[prize]}
          </div>
        </div>
      </div>
    `
  }
}

const buttonTemplate = function(data, user) {
  const prizeCounters = Object.keys(data.customers[user]);
  const mapped = prizeCounters.map(function(prize){
    return `
    <div class='button-row'>
      <button class='${user} ${prize}' data-action='dec' ${data.customers[user][prize] === 0 ? 'disabled':''}>-</button>
      <p>${prize} ${data.customers[user][prize]}</p>
      <button class='${user} ${prize}' data-action='inc' ${data.prizes[prize] === 0 ? 'disabled':''}>+</button>
    </div>
    `
  });
  return mapped.join('');
}

const userTemplate = function(data, user) {
  const users = Object.keys(data.customers);
  if(users.includes(user)){
    return `
      <div id=${user} class='user-card'>
        <div class='blue-text'>
          ${user}
        </div>
        <div class='counter-container'>
          ${buttonTemplate(data, user)}
        </div>
      </div>
    `
  }
}


// whenever the data set is modified, you should call these so everything gets updated
function renderPrizes() {
  const prizes = Object.keys(data.prizes);
  const mappedHTML = prizes.map(function(prize){
    return prizeTemplate(data, prize);
  });
  flexBox1.innerHTML = mappedHTML.join('');
}
function renderUsers() {
  const customers = Object.keys(data.customers);
  const mappedHTML = customers.map(function(customer){
    return userTemplate(data, customer);
  });
  flexBox2.innerHTML = mappedHTML.join('');
}
// condensed into one func
function render() {
  renderPrizes();
  renderUsers();
}

// do everything with the event listeners
const prizesDiv = document.querySelector('#prizes');
const usersDiv = document.querySelector('#users');

usersDiv.addEventListener('click', function(ev){
  const action = ev.target.getAttribute('data-action');
  const classes = [ ev.target.classList ];
  const customer = classes[0][0];
  const prize = classes[0][1];
  if (action === 'inc') {
    data.customers[customer][prize]++;
    data.prizes[prize]--;
  }
  if (action === 'dec') {
    data.customers[customer][prize]--;
    data.prizes[prize]++;
  }
  render();
});


render();
