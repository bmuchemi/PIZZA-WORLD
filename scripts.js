function Pizza(size, crust, toppings, quantity) {
    this.pSize = size;
    this.pCrust = crust;
    this.pToppings = toppings;
    this.pQuantity = quantity;
  }
  Pizza.prototype.new = function() {
      return "Your Order // Size:" + this.pizzaSize + ", Crust:" + this.pizzaCrust + ", Toppings:" + this.topping + ", Quantity:" + this.quantity 
    };

    
function placeOrder() {
  var pSize = document.getElementById("size").value;
 console.log(pSize);
  var pCrust = document.getElementById("crust").value;
  console.log(pCrust);
  var pToppings = document.getElementById("toppings").value;
  console.log(pToppings);
  var pQuantity = document.getElementById("quantity").value;
  console.log(pQuantity);

  var placeNewOrder = new Pizza(pSize, pCrust, pToppings, pQuantity);

  if($("select#size").val()==="Large"){
    var sizePrice = 1200;
  }else if($("select#size").val()==="Medium"){
    var sizePrice = 800;
  }else if($("select#size").val()==="Small"){
    var sizePrice = 500;
  } else{
      alert('Please Enter The Required Size')
  }

  if($("select#crust").val()==="Hawaiian"){
    var crustSize = 200;
  }else if($("select#crust").val()==="Buffalo"){
    var crustSize = 300;
  }else if($("select#crust").val()==="Meat"){
    var crustSize = 300;
  } else if($("select#crust").val()==="Veggie"){
    var crustSize = 100;
  }else if($("select#crust").val()==="Cheese"){
    var crustSize = 200;
  }else if($("select#crust").val()==="Pepperoni"){
    var crustSize = 200;
  } else {
      alert('Please Enter Required Crust')
  }

  if($("select#toppings").val()==="Extra-cheese"){
    var topppingsPrice = 50;
  }else if($("select#toppings").val()==="Fresh-garlic"){
    var topppingsPrice = 50;
  }else if($("select#toppings").val()==="Bacon"){
    var topppingsPrice = 40;
  } else if($("select#toppings").val()==="Sausage"){
    var topppingsPrice = 50;
  } else if($("select#toppings").val()==="Mushroom"){
      var topppingsPrice = 30;
  } else {
      alert('Please Enter Topping')

      var de = 5;
  var price = parseInt(sizePrice) + (parseInt(crustSize) + parseInt(topppingsPrice));
  console.log(price);
  var total = parseInt(price) + de ;
  if (placeNewOrder.pSize != undefined) {
    $("div#btn").append("<p>" + placeNewOrder.new() + "</p>");
    $("div#btn").append("<p>" + " The Price is " + price + "$" + "</p>");
  } else {
    alert('No order added');
  }
  $("#delivery").click(function() {
   $("div#btn").append("<p>" + " The Total Amount is " + total + "$" + "</p>");
  });
}
}
document.getElementById('btn').addEventListener('click', placeOrder);
  $(document).ready(function(){
  $("#delivery").click(function() {
    var loc = prompt("Enter your Location:");
    alert("We will deliver your order in 30-45 min at" + " " + loc + " " + "Thank you for You Consideration");
    alert("Delivery Fees is 5$");
  });

  });