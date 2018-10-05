import Component from '@ember/component';
import {computed} from '@ember/object';
import {queries} from '../enums/queries';
const {title, time, day, hour} = queries;

export default Component.extend({
  isList: true,
  sortByTitle: computed('sort', function() {
    return this.sort === title;
  }),
  sortByTime: computed('sort', function() {
    return this.sort === time;
  }),
  filterDay: computed('filter', function() {
    return this.filter === day;
  }),
  filterHour: computed('filter', function() {
    return this.filter === hour;
  }),
  actions: {
    toggle: function() {
      this.toggle();
    }
  }
});
