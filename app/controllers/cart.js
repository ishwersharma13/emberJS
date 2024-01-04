// cart.js
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
  @service('shopping-cart') cart;

  get subtotal() {
    return this.cart.itemList.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
  }

  get tax() {
    return 0.05 * this.subtotal;
  }

  get total() {
    return this.subtotal + this.tax;
  }

  @action
  updateItemCount(item, event) {
    const count = parseInt(event.target.value, 10);

    if (!isNaN(count) && count >= 0) {
      item.count = count;
    } else {
      // Handle invalid input, reset count to 0 or any other logic
      item.count = 0;
    }

    // If count is less than 1, remove the item from the cart
    if (item.count < 1) {
      this.cart.removeItem(item);
    }
  }

  @action
  incrementItemCount(item) {
    item.count += 1;
  }

  @action
  decrementItemCount(item) {
    if (item.count > 1) {
      item.count -= 1;
    } else {
      // Remove the item from the cart
      this.cart.removeItem(item);
    }
  }
}
