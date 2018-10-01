import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  tagName: 'span',
  store: inject(),
  editable: false,
  editTitle: '',
  editBody: '',
  actions: {
    editPost: function(post) {
      this.set('editable', !this.get('editable'));
      this.set('editTitle', post.title);
      this.set('editBody', post.body);
    },
    updatePost: function(post) {
      this.set('editable', !this.get('editable'));
      this.store.find('post', post.id).then((rec) => {
        rec.set('title', this.editTitle);
        rec.set('body', this.editBody);
        rec.save();
      });
    },
    removePost: function(post) {
      if(confirm('Are you sure to delete this post?')) {
        this.store.find('post', post.id).then(function(rec) {
          rec.destroyRecord();
        });
      }
    }
  }
});
