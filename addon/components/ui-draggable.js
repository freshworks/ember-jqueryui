import Ember from 'ember';
import layout from '../templates/components/ui-draggable';
import JqueryUIMethods from '../mixins/jqueryui-methods';

const {
  on
} = Ember;

export default Ember.Component.extend(JqueryUIMethods, {
  attributeBindings: ['data-value'],
  'data-value': null,
  layout: layout,

  initializeDroppable: on('didInsertElement', function() {
    const _OPTIONS = ['addClasses', 'appendTo', 'axis', 'cancel', 'connectToSortable',
                      'containment', 'cursor', 'cursorAt', 'delay', 'disabled',
                      'distance', 'grid', 'handle', 'helper', 'opacity',
                      'refreshPositions', 'revert', 'revertDuration', 'scope', 'scroll',
                      'scrollSensitivity', 'scrollSpeed', 'snap', 'snapMode', 'snapTolerance',
                      'stack', 'zIndex'];

    let draggableOptions = this._optionCompiler(this, _OPTIONS, this._actionBinders());

    this.$().draggable(draggableOptions).disableSelection();
  }),

  destroyDroppable: on('willDestroyElement', function() {
    this.$().draggable('destroy');
  }),

  _actionBinders () {
    let _self = this;

    return {
      start: function(event, ui) {
        _self.sendAction(`onStart`, event, ui, _self);
      },
      stop: function (event, ui) {
        _self.sendAction(`onStop`, event, ui, _self);
      }
    };
  }
});
