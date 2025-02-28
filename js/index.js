// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  //... your code goes here

  const allProducts = document.getElementsByClassName('product');

  let total = 0;
  for (let singleProduct of allProducts) {
    total += updateSubtotal(singleProduct);
  }

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

//doesnt pass the tests but works?

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const allRemoveButtons = document.getElementsByClassName('action');
  for (let button of allRemoveButtons) {
    button.addEventListener('click', removeProduct);
  }
});
