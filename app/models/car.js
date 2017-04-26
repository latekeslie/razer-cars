import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  hp: DS.attr('number'),
  price: DS.attr('number'),
  year: DS.attr(),

  brand: DS.belongsTo('brand'),
});
