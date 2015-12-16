import Ember from 'ember';
import layout from '../templates/components/ui-droppable';
import JqueryUIUtil from '../utils/ember-jqueryui';

const {
  on
} = Ember;

export default Ember.Component.extend({
  attributeBindings: ['data-value'],
  'data-value': null,
  layout: layout,

  initializeDroppable: function() {
    const _OPTIONS = ['accept', 'activeClass', 'addClasses', 'disabled', 'greedy',
                      'hoverClass', 'scope', 'tolerance'];

    let droppableOptions = JqueryUIUtil.optionCompiler(this, _OPTIONS, this._actionBinders());

    this.$().droppable(droppableOptions);
  }.on('didInsertElement'),

  destroyDroppable: on('willDestroyElement', function() {
    this.$().droppable('destroy');
  }),

  _actionBinders () {
    let _self = this;

    return {
      activate: function(event, ui) {
        _self.sendAction(`onActivate`, event, ui, _self);
      },
      deactivate: function (event, ui) {
        _self.sendAction(`onDeactivate`, event, ui, _self);
      },
      drop: function (event, ui) {
        _self.sendAction(`onDrop`, event, ui, _self);
      },
      out: function (event, ui) {
        _self.sendAction(`onOut`, event, ui, _self);
      },
      over: function (event, ui) {
        _self.sendAction(`onOver`, event, ui, _self);
      }
    };
  }
});
