import Component from '@ember/component';

export default Component.extend({
  tagName: 'span',
  userName: '',
  actions: {
    logIn() {
      this.logIn(this.get('email'), this.get('password'));
    },
    logOut() {
      this.logOut();
    }
  }
});
