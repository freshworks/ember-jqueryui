# Ember jQuery UI

This addon provides wrapper for jquery UI's draggable, droppable and sortable.
We currently using jquery-ui v1.11.4 custom build with the following plugins:
   * core.min.js
   * widget.min.js
   * mouse.min.js
   * draggable.min.js
   * droppable.min.js
   * sortable.min.js

## Installation

```
Add this git repo to your package.json to make it work. As this addon is still under development, this will be published to npm once stable.
```

##Supports
- Draggable
- Droppable
- Sortable

## Usage

###Draggable:
```
{{#ui-draggable <jquery-draggable-options>=<value> <jquery-droppable-events>=<actions-mapped-in-controller>}}
    Hello world
{{/ui-draggable}}
```
####Draggable options: Refer this (http://api.jqueryui.com/draggable/)
- addClasses
- appendTo
- axis
- cancel
- connectToSortable
- containment
- cursor
- cursorAt
- delay
- disabled
- distance
- grid
- handle
- helper
- iframeFix
- opacity
- refreshPositions
- revert
- revertDuration
- scope
- scroll
- scrollSensitivity
- scrollSpeed
- snap
- snapMode
- snapTolerance
- stack
- zIndex

####Draggable events:
- onCreate
- onDrag
- onStart
- onStop

###Droppable:
```
{{#ui-droppable <jquery-droppable-options>=<value> <jquery-droppable-events>=<actions-mapped-in-controller>}}
    Hello world
{{/ui-droppable}}
```
####Droppable options: Refer this (http://api.jqueryui.com/droppable/)
- accept
- activeClass
- addClasses
- disabled
- greedy
- hoverClass
- scope
- tolerance

####Droppable events:
- onActivate
- onCreate
- onDeactivate
- onDrop
- onOut
- onOver

###Sortable:
```
{{#ui-sortable <jquery-sortable-options>=<value> <jquery-droppable-events>=<actions-mapped-in-controller>}}
    Hello world
{{/ui-sortable}}
```
####Sortable options: Refer this (http://api.jqueryui.com/sortable/)
- appendTo
- axis
- cancel
- connectWith
- containment
- cursor
- cursorAt
- delay
- disabled
- distance
- dropOnEmpty
- forceHelperSize
- forcePlaceholderSize
- grid
- handle
- helper
- items
- opacity
- placeholder
- revert
- scroll
- scrollSensitivity
- scrollSpeed
- tolerance
- zIndex

####Sortable events:
- onActivate
- onBeforeStop
- onChange
- onCreate
- onDeactivate
- onOut
- onOver
- onReceive
- onRemove
- onSort
- onStart
- onStop
- onUpdate


## Passing data along with dragged/dropped/sortable DOM

Usage:
```
template:
   {{#ui-draggable onStart="onDragStart" data-value=model.id}}
      Hello world
   {{/ui-draggable}}

controller/route/component:
   actions: {
      onDragStart (event, ui, component) {
        console.log(event.target.getAttribute('data-value'));
      }
   }
```


## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
