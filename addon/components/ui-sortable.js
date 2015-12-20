import Ember from 'ember';
import layout from '../templates/components/ui-sortable';
import JqueryUIMethods from '../mixins/jqueryui-methods';

const {
  on
} = Ember;

export default Ember.Component.extend(JqueryUIMethods, {
  attributeBindings: ['data-value'],
  'data-value': null,
  layout: layout,

  initializeDroppable: on('didInsertElement', function() {
    const _OPTIONS = ['appendTo', 'axis', 'cancel', 'connectWith', 'containment',
                      'cursor', 'cursorAt', 'delay', 'disabled', 'distance',
                      'dropOnEmpty', 'forceHelperSize', 'forcePlaceholderSize', 'grid', 'handle',
                      'helper', 'items', 'opacity', 'placeholder', 'revert',
                      'scroll', 'scrollSensitivity', 'scrollSpeed', 'tolerance', 'zIndex'];

    let sortableOptions = this._optionCompiler(this, _OPTIONS, this._actionBinders());

    this.$().sortable(sortableOptions);
  }),

  tearDown: on('willDestroyElement', function() {
    this.$().sortable('destroy');
  }),

  _actionBinders () {
    let _self = this;

    return {
      activate: function(event, ui) {
        _self.sendAction(`onActivate`, event, ui, _self);
      },
      beforeStop: function(event, ui) {
        _self.sendAction(`onBeforeStop`, event, ui, _self);
      },
      change: function(event, ui) {
        _self.sendAction(`onChange`, event, ui, _self);
      },
      create: function(event, ui) {
        _self.sendAction(`onCreate`, event, ui, _self);
      },
      deactivate: function (event, ui) {
        _self.sendAction(`onDeactivate`, event, ui, _self);
      },
      out: function (event, ui) {
        _self.sendAction(`onOut`, event, ui, _self);
      },
      over: function (event, ui) {
        _self.sendAction(`onOver`, event, ui, _self);
      },
      receive: function (event, ui) {
        _self.sendAction(`onReceive`, event, ui, _self);
      },
      remove: function (event, ui) {
        _self.sendAction(`onRemove`, event, ui, _self);
      },
      sort: function (event, ui) {
        _self.sendAction(`onSort`, event, ui, _self);
      },
      start: function (event, ui) {
        _self.sendAction(`onStart`, event, ui, _self);
      },
      stop: function (event, ui) {
        _self.sendAction(`onStop`, event, ui, _self);
      },
      update: function (event, ui) {
        _self.sendAction(`onUpdate`, event, ui, _self);
      }
    };
  }
});
