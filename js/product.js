

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
  showTotal.innerText = `${quantity * 10}`
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
  showTotal.innerHTML = `${quantity * 50}`
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
  // showQuantity_1.innerText = `${quantity} x 60`;
  showTotal_1.innerText = `${quantity * 35}`
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
  // showQuantity_1.innerText = `${quantity} x 60`
  showTotal_1.innerHTML = `${quantity * 35}`
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
  // showQuantity_2.innerText = `${quantity} x 55`;
  showTotal_2.innerText = `${quantity * 20}`
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
  // showQuantity_2.innerText = `${quantity} x 55`
  showTotal_2.innerHTML = `Total:${quantity * 20}`
}





const quantityText_3 = document.getElementById("quantity-text_3");
  const showQuantity_3 = document.getElementById("show-quantity_3");
  const showTotal_3 = document.getElementById("show-total_3");
function incre()
{
 
  let quantity = parseInt(quantityText_3.innerText);
  if(quantity < 5)
  {
    quantityText_3.innerText = ++quantity;
  }
  else
  {
    alert("you cant add more than 5 items")
  }
  showQuantity_3.innerText = `${quantity} x 65`;
  showTotal_3.innerText = `Total:${quantity * 65}`
}

function decre()
{
  let quantity = parseInt(quantityText_3.innerText);
  if(quantity > 1)
  {
    quantityText_3.innerText = --quantity;
  }
  else
  {
    alert("you cant add less than 1 items")
  }
  showQuantity_3.innerText = `${quantity} x 65`
  showTotal_3.innerHTML = `Total:${quantity * 65}`
}



const quantityText_4 = document.getElementById("quantity-text_4");
  const showQuantity_4 = document.getElementById("show-quantity_4");
  
  const showTotal_4 = document.getElementById("show-total_4");
function incA()
{
 
  let quantity = parseInt(quantityText_4.innerText);
  if(quantity < 5)
  {
    quantityText_4.innerText = ++quantity;
  }
  else
  {
    alert("you cant add more than 5 items")
  }
  showQuantity_4.innerText = `${quantity} x 50`;
  showTotal_4.innerText = `Total:${quantity * 50}`
}
function decA()
{
  let quantity = parseInt(quantityText_4.innerText);
  if(quantity > 1)
  {
    quantityText_4.innerText = --quantity;
  }
  else
  {
    alert("you cant add less than 1 items")
  }
  showQuantity_4.innerText = `${quantity} x 50`
  showTotal_4.innerHTML = `Total:${quantity * 50}`
}


const quantityText_5 = document.getElementById("quantity-text_5");
  const showQuantity_5 = document.getElementById("show-quantity_5");
  
  const showTotal_5 = document.getElementById("show-total_5");
function incB()
{
 
  let quantity = parseInt(quantityText_5.innerText);
  if(quantity < 5)
  {
    quantityText_5.innerText = ++quantity;
  }
  else
  {
    alert("you cant add more than 5 items")
  }
  showQuantity_5.innerText = `${quantity} x 60`;
  showTotal_5.innerText = `Total:${quantity * 60}`
}
function decB()
{
  let quantity = parseInt(quantityText_5.innerText);
  if(quantity > 1)
  {
    quantityText_5.innerText = --quantity;
  }
  else
  {
    alert("you cant add less than 1 items")
  }
  showQuantity_5.innerText = `${quantity} x 60`
  showTotal_5.innerHTML = `Total:${quantity * 60}`
}


const quantityText_6 = document.getElementById("quantity-text_6");
  const showQuantity_6 = document.getElementById("show-quantity_6");
  
  const showTotal_6 = document.getElementById("show-total_6");
function incC()
{
 
  let quantity = parseInt(quantityText_6.innerText);
  if(quantity < 5)
  {
    quantityText_6.innerText = ++quantity;
  }
  else
  {
    alert("you cant add more than 5 items")
  }
  showQuantity_6.innerText = `${quantity} x 50`;
  showTotal_6.innerText = `Total:${quantity * 50}`
}
function decC()
{
  let quantity = parseInt(quantityText_6.innerText);
  if(quantity > 1)
  {
    quantityText_6.innerText = --quantity;
  }
  else
  {
    alert("you cant add less than 1 items")
  }
  showQuantity_6.innerText = `${quantity} x 50`
  showTotal_6.innerHTML = `Total:${quantity * 50}`
}


const quantityText_7 = document.getElementById("quantity-text_7");
  const showQuantity_7 = document.getElementById("show-quantity_7");
  
  const showTotal_7 = document.getElementById("show-total_7");
function incD()
{
 
  let quantity = parseInt(quantityText_7.innerText);
  if(quantity < 5)
  {
    quantityText_7.innerText = ++quantity;
  }
  else
  {
    alert("you cant add more than 5 items")
  }
  showQuantity_7.innerText = `${quantity} x 65`;
  showTotal_7.innerText = `Total:${quantity * 65}`
}
function decD()
{
  let quantity = parseInt(quantityText_7.innerText);
  if(quantity > 1)
  {
    quantityText_7.innerText = --quantity;
  }
  else
  {
    alert("you cant add less than 1 items")
  }
  showQuantity_7.innerText = `${quantity} x 65`
  showTotal_7.innerHTML = `Total:${quantity * 65}`
}



const quantityText_8 = document.getElementById("quantity-text_8");
  const showQuantity_8 = document.getElementById("show-quantity_8");
  
  const showTotal_8 = document.getElementById("show-total_8");
function incE()
{
 
  let quantity = parseInt(quantityText_8.innerText);
  if(quantity < 5)
  {
    quantityText_8.innerText = ++quantity;
  }
  else
  {
    alert("you cant add more than 5 items")
  }

  showQuantity_8.innerText = `${quantity} x 60`;
  showTotal_8.innerText = `Total:${quantity * 60}`
}
function decE()
{
  let quantity = parseInt(quantityText_8.innerText);
  if(quantity > 1)
  {
    quantityText_8.innerText = --quantity;
  }
  else
  {
    alert("you cant add less than 1 items")
  }
  showQuantity_8.innerText = `${quantity} x 60`
  showTotal_8.innerHTML = `Total:${quantity * 60}`
}



















 