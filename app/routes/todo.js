import Route from '@ember/routing/route';

export default class TodoRoute extends Route {
  model() {
    return ['Revise JS', 'Learn Ember', 'Build Project','Todo App','E-Commerce App'];
  }
}
