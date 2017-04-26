import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    edit() {
      const brand = this.model;
      brand.save().then(() => {
        this.transitionToRoute('manufacturer.car.index', this.model);
      });
    },
  },
});
