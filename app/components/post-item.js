import Component from '@ember/component';
import { sort } from '@ember/object/computed';

export default Component.extend({
  tagName: 'span',
  editable: false,
  isList: false,
  editTitle: '',
  editBody: '',
  actions: {
    edit: function(post) {
      this.toggleProperty('editable');
      this.set('editTitle', post.title);
      this.set('editBody', post.body);
    },
    update: function(post) {
      this.toggleProperty('editable');
      this.update(post, this.editTitle, this.editBody);
    },
    remove: function(post) {
      this.remove(post);
    }
  }
});
