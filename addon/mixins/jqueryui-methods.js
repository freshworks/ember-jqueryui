import Ember from 'ember';

const {
  merge
} = Ember;

export default Ember.Mixin.create({
  _optionCompiler (component, options, events) {
    let jquery_component_opts = this._propertyHasher(options, component);

    return this._mergeHashes(jquery_component_opts, events);
  },

  _propertyHasher (_OPTIONS, _self) {
    let _temp = {};

    _OPTIONS.forEach(function(_option) {
      if (_self.get(_option)) {
        _temp[_option] = _self.get(_option);
      }
    });

    return _temp;
  },

  _mergeHashes (plugin_opts, event_opts) {
    return merge(plugin_opts, event_opts);
  }
});
