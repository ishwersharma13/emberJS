import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
class Item {
  @tracked count;
  name;
  color;
  image;
  price;
  constructor(item) {
    this.count = item.count;
    this.image = item.image;
    this.color = item.color;
    this.price = item.price;
    this.name = item.name;
  }
}
export default class ShoppingCartService extends Service {
  @tracked itemList = [];

  addItem(item) {
    const exsistingItem = this.itemList.find(({ name, color }) => {
      return name === item.name && color === item.color;
    });

    if (exsistingItem) {
      exsistingItem.count += 1;
    } else {
      this.itemList = [
        ...this.itemList,
        new Item({
          ...item,
          count: 1,
        }),
      ];
    }
  }
}
