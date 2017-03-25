import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('manufacturers');
  // this.route('manufacturers-new');

  this.route('manufacturer', function() {
    this.route('new');
    this.route('car', { path: '/:id/cars'}, function() {
      this.route('new');
    });
  });
  this.route('edit');
});

export default Router;
