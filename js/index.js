// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  console.log(product);
  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  console.log(price.innerText);
  console.log(quantity.value);
  subtotal.innerText = +price.innerText * +quantity.value;
  return +price.innerText * +quantity.value;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const product = document.getElementsByClassName('product');
  let totalcart = 0;   
  for (let i = 0; i < product.length; i++){
    totalcart += updateSubtotal(product[i]);
  }
    
  
  // ITERATION 3
  //... your code goes here
  let total = document.querySelector('#total-value span')
  total.innerHTML = totalcart
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  const targetParent = target.parentNode;
  targetParent.removeChild(target);
  console.log('The target in remove is:', target);
  //... your code goes here
  
}

// ITERATION 5

function createProduct() {

  //... your code goes here
  const newProductName = document.querySelectorAll('.create-product td input')[0].value;
  const newProductPrice = document.querySelectorAll('.create-product td input')[1].value;
  let parent = document.querySelector('.product');
  let newProduct = parent.cloneNode(true);
  let priceToChange = newProduct.querySelector('.price span');
  let nameToChange = newProduct.querySelector('.name span');
  priceToChange.innerText = newProductPrice;
  nameToChange.innerText = newProductName;
  const rmvButton = newProduct.querySelector ('.btn-remove');
  rmvButton.addEventListener('click', removeProduct);
  newTable = document.querySelector('tbody');
  newTable.appendChild(newProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  //... your code goes here
  const rmvButton = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < rmvButton.length; i++){
    rmvButton[i].addEventListener('click', removeProduct);
  }
  const createButton = document.querySelector ('#create');
  createButton.addEventListener('click', createProduct);
});
