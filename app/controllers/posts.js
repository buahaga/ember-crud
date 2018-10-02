import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  session: inject(),
  showPostForm: false,
  actions: {
    toggleForm: function() {
      this.toggleProperty('showPostForm');
    },
    publishPost: function(title, body) {
      if (title) {
        const newPost = this.store.createRecord('post', {
          title: title,
          body: body,
          timestamp: new Date().getTime()
        });
        newPost.save();
      } else alert('Please enter post title!');
    },
    updatePost: function(post, title, body) {
      this.store.find('post', post.id).then((rec) => {
        rec.set('title', title);
        rec.set('body', body);
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
