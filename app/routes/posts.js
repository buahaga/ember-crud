import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    if (!this.session.get('isAuthenticated')) {
      this.replaceWith('application');
    }
  },
  model() {
    return this.store.findAll('post')
  }
});
