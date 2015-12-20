import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    dragDrop1 (event, ui) {
      console.log(event, ui);
      window.alert("You dropped a draggable into here :)");
    }
  }
});
