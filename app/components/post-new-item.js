import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  tagName: 'span',
  store: inject(),
  actions: {
    publishPost: function() {
      if (this.get('title')) {
        const newPost = this.store.createRecord('post', {
          title: this.get('title'),
          body: this.get('body'),
          timestamp: new Date().getTime()
        });
        newPost.save();
        this.hide();
      } else alert('Please enter post title!');
    },
    closeForm: function() {
      this.hide();
    }
  }
});
