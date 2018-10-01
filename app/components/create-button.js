import Component from '@ember/component';

export default Component.extend({
  tagName: 'span',
  click() {
    this.show();
  }
});
