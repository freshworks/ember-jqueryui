import Ember from 'ember';

const {
  copy,
  merge
} = Ember;

export function optionCompiler (component, options, events) {
  let $elem = component.$();
  let jquery_component_opts = _propertyHasher(options, component);

  return _mergeHashes(jquery_component_opts, events);
}

function _propertyHasher (_OPTIONS, _self) {
  let _temp = {};

  _OPTIONS.forEach(function(_option) {
    if (_self.get(_option)) {
      _temp[_option] = _self.get(_option);
    }
  });

  return _temp;
}

function _mergeHashes (plugin_opts, event_opts) {
  return merge(plugin_opts, event_opts);
}
