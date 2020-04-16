const data = [
  {
    id: 0,
    category: 'sw',
    src: "trojan.jpg",
    title: "Dying Achilles Trojan War Hero (Stone)",
    price: 65,
  },
  {
    id: 1,
    category: 'sw',
    src: "moody.jpg",
    title: "Moody sculpture (Stone)",
    price: 35,
  },
  {
    id: 2,
    category: 'sw',
    src: "lion.jpg",
    title: "Abstract Lion sculpture (Stone)",
    price: 100,
  },
  {
    id: 3,
    category: 'sw',
    src: "women.jpg",
    title: "yjinking women (Wooden)",
    price: 25,
  },
  {
    id: 4,
    category: 'sw',
    src: "wolf.jpg",
    title: "Wolf Pack (Wooden)",
    price: 190,
  },
  {
    id: 5,
    category: 'sw',
    src: "china.jpg",
    title: "Guan Gong Wood Statue Figure (Wooden)",
    price: 100,
  },
  {
    id: 6,
    category: 'sw',
    src: "elephant.jpg",
    title: "Elephant (Wooden)",
    price: 260,
  },
  {
    id: 7,
    category: 'mm',
    src: "lady.jpg",
    title: "White Bungalow Lady statue big (Marble)",
    price: 50,
  },
  {
    id: 8,
    category: 'mm',
    src: "ares.jpg",
    title: "ARES MARS Greek Roman God of War (Marble)",
    price: 125,
  },
  {
    id: 9,
    category: 'mm',
    src: "deer.jpg",
    title: "Copper Sika Deer Statue (Marble)",
    price: 789,
  },
  {
    id: 10,
    category: 'mm',
    src: "panther.jpg",
    title: "Gold Coated Panther (Metal)",
    price: 1300,
  },
  {
    id: 11,
    category: 'mm',
    src: "love.jpg",
    title: "Infinite Love (Marble)",
    price: 150,
  },
]

function callback () { // this is the first function when the website is loaded.
  let wrapper = document.getElementById('wrapper') //wrapper container
  category(1) //side menu mode 
  selectAll();
}

function category (mode) { // number 1 2 3 is going to be mode parameter
  let btnContainer = document.getElementById('myBtnContainer')
  btnContainer.innerHTML = '';  //reset
  if(mode === 1){  //if it is 1, show the every menu.
    let button1 = document.createElement('h3')
    button1.innerHTML = 'Show all'
    button1.onclick = () => selectAll();
    let button2 = document.createElement('h3')
    button2.innerHTML = 'Stone & Wooden'
    button2.onclick = () => selectSW();
    let button3 = document.createElement('h3')
    button3.innerHTML = 'Marble & Metal'
    button3.onclick = () => selectMM();
    btnContainer.appendChild(button1)
    btnContainer.appendChild(button2)
    btnContainer.appendChild(button3)
  } else if(mode === 2){ // if it is 2, show the title stone wood and return key
    let button1 = document.createElement('h3')
    button1.innerHTML = 'Stone & Wooden'
    let button2 = document.createElement('div')
    button2.innerHTML = 'Return'
    button2.onclick = () => selectAll();
    btnContainer.appendChild(button1)
    btnContainer.appendChild(button2)
  } else if(mode === 3){ // if it is 2, show the Marble metal wood and return key
    let button1 = document.createElement('h3')
    button1.innerHTML = 'Marble & Metal'
    let button2 = document.createElement('div')
    button2.innerHTML = 'Return'
    button2.onclick = () => selectAll();
    btnContainer.appendChild(button1)
    btnContainer.appendChild(button2)
  }
}

function shuffle(array) { // this is a shuffle function for the data array. you can delete this but arrangement of data array is boring.
  let i = array.length;
  while (i--) {
    const ri = Math.floor(Math.random() * (i + 1));
    [array[i], array[ri]] = [array[ri], array[i]];
  }
  return array;
}

function selectAll () {
  row.innerHTML = ''
  category(1); //side menu setting
  shuffle(data).map( (v) => { // v is a short 'my own keyword' every each element of data array.

  let clm = document.createElement('div')
  clm.className = "column"

    let card = document.createElement('div')
   card.className = "card"

    let img = document.createElement('img')
    img.src = "images/" + v.src
    img.style = "width: 100%"
  
    let title = document.createElement('h4');
    title.innerHTML = v.title
  
    let price = document.createElement('p')
    price.innerHTML = '$' + v.price + '.00'
  
    let button = document.createElement('button')
    button.innerHTML = "Add to Cart"
  
    card.appendChild(img)
    card.appendChild(title)
    card.appendChild(price)
    card.appendChild(button)
    
    clm.appendChild(card)
    row.appendChild(clm)
  })
}

function selectSW () {
  row.innerHTML = ''
  category(2); //side menu setting
  shuffle(data).filter(v => v.category === 'sw').map( (v) => { // shuffle the data and pick some data only category is matched with 'sw', and then rendering every elements

    let clm = document.createElement('div')
   clm.className = "column"

    let card = document.createElement('div')
    card.className = "card"

    let img = document.createElement('img')
    img.src = "images/" + v.src
    img.style = "width: 100%"
  
    let title = document.createElement('h4');
    title.innerHTML = v.title
  
    let price = document.createElement('p')
    price.innerHTML = '$' + v.price + '.00'
  
    let button = document.createElement('button')
    button.innerHTML = "Add to Cart"
  
    card.appendChild(img)
    card.appendChild(title)
    card.appendChild(price)
    clm.appendChild(card)
    card.appendChild(button)
  
    row.appendChild(clm)
  })
}

function selectMM () {
  row.innerHTML = ''
  category(3);
  shuffle(data).filter(v => v.category === 'mm').map( (v) => { // shuffle the data and pick some data only category is matched with 'mm', and then rendering every elements
  let clm = document.createElement('div')
  clm.className = "column"
    let card = document.createElement('div')
  card.className = "card"
    let img = document.createElement('img')
    img.src = "images/" + v.src
    img.style = "width: 100%"
  
    let title = document.createElement('h4');
    title.innerHTML = v.title
  
    let price = document.createElement('p')
    price.innerHTML = '$' + v.price + '.00'
  
    let button = document.createElement('button')
    button.innerHTML = "Add to Cart"
  
    card.appendChild(img)
    card.appendChild(title)
    card.appendChild(price)
    card.appendChild(button)
    
    clm.appendChild(card)
    row.appendChild(clm)
  })
}

window.onload = callback; // if website is loaded, call the function 'callback'