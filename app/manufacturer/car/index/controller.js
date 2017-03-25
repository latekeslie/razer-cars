import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteManufacturer(manufacturer) {
      manufacturer.destroyRecord().then(() => {
        this.transitionToRoute('manufacturer.index')
      })
    },
    deleteCar(car) {
      car.destroyRecord().then(() => {
        this.transitionToRoute('manufacturer.car')
      })
    }
  }
});
