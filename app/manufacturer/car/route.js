import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    const id = params.id;
    return this.store.findRecord('brand', id);
  }
//   model() {
//   const id = this.paramsFor('manufacturer.car').id;
//   return this.store.findRecord('brand', id);
// }
});
