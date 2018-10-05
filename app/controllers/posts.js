import Controller from '@ember/controller';
import {inject} from '@ember/service';
import {computed} from '@ember/object';
import {queries} from '../enums/queries';

export default Controller.extend({
  session: inject(),
  showPostForm: false,
  isList: false,
  queryParams: ['sortQuery', 'filterQuery'],
  sortQuery: null,
  filterQuery: null,
  sortBy: computed('sortQuery', function() {
    return  this.sortQuery ? [this.sortQuery] : [''];
  }),
  sorted: computed.sort('model', 'sortBy'),
  posts: computed('sorted', 'filterQuery', function() {
    const filtred = this.filterQuery ? this.sorted.filter((item) => {
      const interval = (this.filterQuery === queries.day) ? (new Date().getTime() - 86400000) : (new Date().getTime() - 3600000);
      return item.get('timestamp') >= interval;
    }) : this.sorted;
    return filtred;
  }),
  actions: {
    toggleForm: function() {
      this.toggleProperty('showPostForm');
    },
    toggleView: function() {
      this.toggleProperty('isList');
    },
    publishPost: function(title, body) {
      if (title) {
        const newPost = this.store.createRecord('post', {
          title: title,
          body: body,
          timestamp: new Date().getTime()
        });
        newPost.save();
      } else
        alert('Please enter post title!');
      }
    ,
    updatePost: function(post, title, body) {
      this.store.find('post', post.id).then((rec) => {
        rec.set('title', title);
        rec.set('body', body);
        rec.save();
      });
    },
    removePost: function(post) {
      if (confirm('Are you sure to delete this post?')) {
        this.store.find('post', post.id).then(function(rec) {
          rec.destroyRecord();
        });
      }
    }
  }
});
