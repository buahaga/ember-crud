import Controller from '@ember/controller';

export default Controller.extend({
  showPostForm: false,
  actions: {
    toggleForm: function() {
      this.set('showPostForm', !this.get('showPostForm'));
    }
  }
});
