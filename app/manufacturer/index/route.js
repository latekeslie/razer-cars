import Ember from 'ember';

const apiUrl = 'https://razerapi.herokuapp.com/kate/basic/brands';

export default Ember.Route.extend({
  //load data for the current page
  //whatevers returned from model function is loaded into template
  model() {
    return fetch(apiUrl)
      .then(r => r.json());
      // .then((data) => {
      //   //do something with data???
      // });
  }
});
