// todo-list.js
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';

export default class TodoListComponent extends Component {
  @tracked
  text = "";

  @action
  submit(model, e) {
    e.preventDefault();
    const newTodo = this.text;

    // Convert the plain JavaScript array to an Ember Array
    const emberArrayModel = A(model);

    // Use pushObject on the Ember Array
    emberArrayModel.pushObject(newTodo);

    // Update the original model with the Ember Array
    model.setObjects(emberArrayModel);

    this.text = '';
  }

  @action
  onChange(e) {
    this.text = e.target.value;
  }

  @action
  delete(model, todo) {
    // Ensure that model is an Ember Array
    const emberArrayModel = A(model);

    // Use removeObject on the Ember Array
    emberArrayModel.removeObject(todo);

    // Update the original model with the Ember Array
    model.setObjects(emberArrayModel);
  }
}
