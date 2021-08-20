import Route from '@ember/routing/route';
import '../templates/css/styles.css'

export default Route.extend({

});

module.exports = {

  included: function(app) {
    app.import('./templates/css/style.css');
  }

}
