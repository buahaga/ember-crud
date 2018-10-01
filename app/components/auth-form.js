import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  tagName: 'span',
  session: inject(),
  router: inject(),
  actions: {
    signIn: function() {
      this.session.open('firebase', {
           provider: 'password',
           email: this.get('email'),
           password: this.get('password')
      }).then(function() {
        this.router.transitionTo('posts');
      }.bind(this)).catch(alert);
    },
    signOut: function() {
      this.get('session').close();
      this.router.transitionTo('application');
    }
  }
});
