module.exports = function Cart(cart) {
    this.items = cart.items || {};
    this.totalItems = cart.totalItems || 0;
    this.totalPrice = cart.totalPrice || 0;

    this.add = function(item, item_id) {
        var cartItem = this.items[item_id];
        if (!cartItem) {
            cartItem = this.items[item_id] = {item: item, quantity: 0, price: 0};
        }
        cartItem.quantity++;
        cartItem.price = cartItem.item.price * cartItem.quantity;
        this.totalItems++;
        this.totalPrice += cartItem.item.price;
    };

    this.remove = function(item_id) {
        this.totalItems -= this.items[item_id].quantity;
        this.totalPrice -= this.items[item_id].price;
        delete this.items[item_id];
    };
    
    this.getItems = function() {
        var arr = [];
        for (var item_id in this.items) {
            arr.push(this.items[item_id]);
        }
        return arr;
    };
};
