import DS from 'ember-data';

export default DS.Model.extend({
  country: DS.attr(),
  name: DS.attr()
});
