import Component from '@ember/component';

export default Component.extend({
  tagName: 'span',
  actions: {
    publish: function() {
      this.publish(this.get('title'), this.get('body'))
      this.close();
    },
    close: function() {
      this.close()
    }
  }
});
