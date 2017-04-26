import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    save() {
      const newCar = this.store.createRecord('car', this.formValues);
      newCar.set('brand', this.model);


      return newCar.save().then(() => {
        this.set('formValues', {});
        this.transitionToRoute('manufacturer.index')
      });
    }
  }
});
