function Order(size, crust, toppings, quantity) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.quantity = quantity;
  }
  Order.prototype.new = function() {
      return "Your Order // Size:" + this.pizzaSize + ", Crust:" + this.pizzaCrust + ", Toppings:" + this.topping + ", Quantity:" + this.quantity 
    };