




    const quantityText = document.getElementById("quantity-text");
  // const showQuantity = document.getElementById("show-quantity");
  const showTotal = document.getElementById("show-total");
function inc()
{
 
  let quantity = parseInt(quantityText.innerText);
  if(quantity < 5)
  {
    quantityText.innerText = ++quantity;
  }
  else
  {
    alert("you cant add more than 5 items")
  }
  // showQuantity.innerText = `${quantity} x 50`;
  showTotal.innerText = `${quantity * 30}`
}
function dec()
{
  let quantity = parseInt(quantityText.innerText);
  if(quantity > 1)
  {
    quantityText.innerText = --quantity;
  }
  else
  {
    alert("you cant add less than 1 items")
  }
  // showQuantity.innerText = `${quantity} x 50`
  showTotal.innerHTML = `${quantity * 30}`
}




const quantityText_1 = document.getElementById("quantity-text_1");
  // const showQuantity_1 = document.getElementById("show-quantity_1");
  const showTotal_1 = document.getElementById("show-total_1");
function increment()
{
 
  let quantity = parseInt(quantityText_1.innerText);
  if(quantity < 5)
  {
    quantityText_1.innerText = ++quantity;
  }
  else
  {
    alert("you cant add more than 5 items")
  }
  // showQuantity_1.innerText = `${quantity} x 65`;
  showTotal_1.innerText = `${quantity * 30}`
}

function decrement()
{
  let quantity = parseInt(quantityText_1.innerText);
  if(quantity > 1)
  {
    quantityText_1.innerText = --quantity;
  }
  else
  {
    alert("you cant add less than 1 items")
  }
  // showQuantity_1.innerText = `${quantity} x 50`
  showTotal_1.innerHTML = `${quantity * 30}`
}




const quantityText_2 = document.getElementById("quantity-text_2");
  // const showQuantity_2 = document.getElementById("show-quantity_2");
  const showTotal_2 = document.getElementById("show-total_2");
function incr()
{
 
  let quantity = parseInt(quantityText_2.innerText);
  if(quantity < 5)
  {
    quantityText_2.innerText = ++quantity;
  }
  else
  {
    alert("you cant add more than 5 items")
  }
  // showQuantity_2.innerText = `${quantity} x 60`;
  showTotal_2.innerText = `${quantity * 30}`
}

function decr()
{
  let quantity = parseInt(quantityText_2.innerText);
  if(quantity > 1)
  {
    quantityText_2.innerText = --quantity;
  }
  else
  {
    alert("you cant add less than 1 items")
  }
  // showQuantity_2.innerText = `${quantity} x 60`
  showTotal_2.innerHTML = `${quantity * 30}`
}




function changeColor() {
    var image = document.getElementById("myImage");
    image.style.filter = "grayscale(0%)"; // Change grayscale value to 0 to remove grayscale effect
}








