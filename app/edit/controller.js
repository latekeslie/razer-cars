import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    edit() {
      const brand = this.model;
      brand.save.then(() => {
        this.set('formValues', {});
        this.transitionToRoute('manufacturer.car.index', this.model);
      });
    },
  },
});
