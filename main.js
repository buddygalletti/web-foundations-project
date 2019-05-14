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
      <div class='prize-card'>
        <div class='blue'>
          ${prize}
        </div>
        <div class='circle-container'>
          <div class='circle'>
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
      <p><button data-action='dec'>-</button>
      ${prize} ${data.customers[user][prize]}
      <button data-action='inc'>+</button></p><br>
    </div>
    `
  });
  return mapped.join('');
}

const userTemplate = function(data, user) {
  const users = Object.keys(data.customers);
  if(users.includes(user)){
    return `
      <div class='user-card'>
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
  flexBox1.innerHTML = prizeTemplate(data, 'Foo') + prizeTemplate(data, 'Bar') + prizeTemplate(data, 'Bazz');

}
function renderUsers() {
  flexBox2.innerHTML = userTemplate(data, 'Moe') + userTemplate(data, 'Larry') + userTemplate(data, 'Curly');

}



// do everything with the event listeners







renderPrizes();
renderUsers();

