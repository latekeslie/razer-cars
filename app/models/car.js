import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  hp: DS.attr(),
  brand: DS.belongsTo('brand'),
  price: DS.attr(),
  year: DS.attr()
});
