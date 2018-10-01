import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  tagName: 'span',
  store: inject(),
  actions: {
    publishPost: function() {
      const newPost = this.store.createRecord('post', {
        title: this.get('title'),
        body: this.get('body'),
        timestamp: new Date().getTime()
      });
      newPost.save();
      this.hide();
    },
    closeForm: function() {
      this.hide();
    }
  }
});
