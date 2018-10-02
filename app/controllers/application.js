import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  session: inject(),
  router: inject(),
  actions: {
    signIn: function(email, pass) {
      this.session.open('firebase', {
        provider: 'password',
        email: email,
        password: pass
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
