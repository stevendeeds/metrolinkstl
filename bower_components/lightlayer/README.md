# lightLayer

A simple responsive lightbox & dialog script.

## Description

lightLayer is a responsive lightbox & dialog script that fits well with any project on any screen. It provides great experience for users and it’s really quite simple to use. LightLayer gives control over many settings. Things like background color, background opacity, box position, open/close transitions and different abilities for closing are part of the options that users can manipulate by themselves. And no matter the content LightLayer will always have a proper behavior. It works fine with external websites, video players, maps. And if there is a long content LightLayer will use the native scrollbar without scrolling the page behind.

## Demo

[http://lightLayer.martinmetodiev.com][plugin-link]

[plugin-link]: http://lightLayer.martinmetodiev.com

## Getting Started

You can separately download the [production version][min] and the [development version][max], or you can [grab all of them][zip].

[min]: https://raw.github.com/martinmethod/lightLayer/master/dist/jquery.lightLayer.min.js
[max]: https://raw.github.com/martinmethod/lightLayer/master/dist/jquery.lightLayer.js
[zip]: https://raw.github.com/martinmethod/lightLayer/master/demo/download/lightLayer.zip

## Installation

Include the script after the jQuery library (unless you package scripts otherwise):

```
<script src="/path/to/lightLayer.min.js"></script>
```

Also include the stylesheet for the plugin:

```
<link type="text/css" rel="stylesheet" href="/path/to/lightLayer.css">
```

## Usage

### I. Initialization

```javascript
$.lightLayer();
```

This is the most basic way to use lightLayer. By doing so the plugin will look for $('#popup') object, so if you're going to keep it simple, make sure you have that one in the DOM. If no such object, nothing will happen.

Of course, you can overwrite the default target by providing a custom one, so that you can use the lightLayer for more than one popup.

```javascript
$.lightLayer({
	object: $('#custom_popup')
});
```

Another way of calling lightLayer is right from a selector, as follows:

```javascript
$('.popup').lightLayer();
```
*Note: If the selector returns more than one object, the first one will be used. Also, if the object doesn't have an ID, a system one will be given.*

### II. Options

```javascript
$.lightLayer({
	backgroundColor: '#000000',
	opacity: 0.3,
	transition: 0.1,
	position: 'middle',
	escape: true,
	cache: true
});
```

There are several properties for setting some features when initializing the lightLayer. Here's a list of them:

#### backgroundColor

Determines the background color of the layer behind the opened popup.

*Type:* **string**  
*Default value:* **'#000000'**  
*Acceptable values:* **only HEX colors, no matter with or without the # prefix**

#### opacity

Determines the opacity of the layer behind the opened popup.

*Type:* **number**  
*Default value:* **0.3**  
*Acceptable values:* **any number between 0 & 1 (incl.)**

#### transition

Determines the fade in/out transition speed (in seconds) of opening/closing the lightLayer. If set to 0, it will show & hide instantly.

*Type:* **number**  
*Default value:* **0.1**  

#### position

Determines the vertical position of the popup. 'Third' option will keep the popup in ⅓ from the top.

*Note: The popups are always horizontally centered.*

*Type:* **string**  
*Default value:* **'middle'**  
*Acceptable values:* **'top', 'third', 'middle'**

#### escape

Determines if the popup should have the ability to be closed in a regular way or just in a specific one.

*Note: If set to true, the user will be able to close the popup by clicking/tapping the X-button in the upper right corner and also outside of the popup, or by pressing Escape button from the keyboard (if on desktop).*

*Type:* **boolean**  
*Default value:* **true**  

#### cache

Determines if the selected popup should be cached for further calls of the same target or not.

*Type:* **boolean**  
*Default value:* **true**  

### III. Methods

When you have an opened lightLayer, there are several methods that allows manipulation of its environment.

So let's suggest there is an invoked lightLayer.

```javascript
$.lightLayer({
	object: $('#custom_popup'),
	opacity: 0.5,
	transition: 0,
	position: 'third'
});
```

After that initialization you are able to call the following methods:

#### backgroundColor()

Changes the background color of the layer behind the opened popup. For example:

```javascript
$.lightLayer().backgroundColor('FFFFFF');
```

#### opacity()

Changes the opacity of the layer behind the opened popup. For example:

```javascript
$.lightLayer().opacity(1);
```

#### position()

Changes the vertical position of the popup. For example:

```javascript
$.lightLayer().position('top');
```

#### escape()

Turns on/off the ability of a popup to be closed in a regular way or just in a specific one. For example:

```javascript
$.lightLayer().escape(false);
```

#### change()

Changes more than one option by passing an object with parameters. For example:

```javascript
$.lightLayer().change({
	backgroundColor: '#FFFFFF',
	opacity: 1,
	position: 'top',
	escape: false
});
```

#### exit()

Exits from lightLayer. For example:

```javascript
$.lightLayer().exit();
```

### IV. Callbacks

Besides the object and all options, there аre few callback functions that can be also passed to the lightLayer. Here's a list of them:

#### onOpen( e, popup )

Triggers right before showing a popup.

```javascript
$.lightLayer({
	onOpen: function( e, popup ) {
		// do something
	}
});
```

#### onClose( e, popup )

Triggers right after hiding a popup.

```javascript
$.lightLayer({
	onClose: function( e, popup ) {
		// do something
	}
});
```

#### onChangeBackgroundColor( e, data )

Triggers when changing the background color of the layer behind the opened popup.

```javascript
$.lightLayer({
	onChangeBackgroundColor: function( e, data ) {
		// do something
	}
});
```

#### onChangeOpacity( e, data )

Triggers when changing the opacity of the layer behind the opened popup.

```javascript
$.lightLayer({
	onChangeOpacity: function( e, data ) {
		// do something
	}
});
```

#### onChangePosition( e, data )

Triggers when changing the vertical position of the popup.

```javascript
$.lightLayer({
	onChangePosition: function( e, data ) {
		// do something
	}
});
```

#### onChangeEscape( e, data )

Triggers when changing the escape ability.

```javascript
$.lightLayer({
	onChangeEscape: function( e, data ) {
		// do something
	}
});
```

#### onChangeSettings( e, data )

Triggers when changing multiple settings.

```javascript
$.lightLayer({
	onChangeSettings: function( e, data ) {
		// do something
	}
});
```

## Browsers compatibility

- Apple Safari
- Google Chrome
- Microsoft Internet Explorer 9+
- Mozilla Firefox
- Opera

## Dependencies

- [jQuery][jq]

[jq]: https://github.com/jquery/jquery.git#2.1.1

## License

Copyright (c) 2014 Martin Metodiev. Licensed under the MIT license. [See here for more details.][licence]

[licence]: https://raw.github.com/martinmethod/lightLayer/master/LICENSE-MIT