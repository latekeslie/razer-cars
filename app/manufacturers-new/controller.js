import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    save() {
      const newBrand = this.store.createRecord('brand', this.formValues);

      newBrand.save().then(() => {
        this.transitionToRoute('manufacturers')
      });
    }
  }
});
