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
  console.log(totalcart)
  
  
  // ITERATION 3
  //... your code goes here
  let total = document.querySelector('#total-value span')
  total.innerHTML = totalcart
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let button = document.querySelectorAll('btn-remove');
  button.addEventListener("click");

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
