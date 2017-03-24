import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    save() {
      const newCar = this.store.createRecord('car', this.formValues);
      newCar.set('brand', this.model);

      newCar.save().then(() => {
        this.transitionToRoute('manufacturer.index')
      });
    }
  }
});
