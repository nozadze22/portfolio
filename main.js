
const mode = document.querySelectorAll(".mode");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const body = document.querySelector("#body");
const names = document.querySelector(".names");
const navbar = document.querySelector(".navbar");
const main = document.querySelector(".main");
const see = document.querySelectorAll(".see");



main.classList.add("active");


sun.addEventListener("click", function()  { 
sun.style.display = "none";
moon.style.display = "block";
body.style.color = 'black';
body.style.backgroundColor = "white";
body.inenerText = 'black';
body.style.transition = '1s'

see.forEach(see => {
	see.style.color = "black"
})

})

moon.addEventListener("click", () => {
    sun.style.display = "block";
    moon.style.display = "none"
    body.style.color = 'white'
    body.style.backgroundColor = "black"
    body.inenerText = 'white';
    body.style.transition = '1s'

	see.forEach(see => {
		see.style.color = "white"
	})
})

names.classList.add("active");

navbar.classList.add("active");



//name kode 

consoleText(['Hello World.', 'I`am GIORGI', 'Front-end Developer.'], 'text',['MediumBlue','OrangeRed','DarkSlateBlue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}




//skills code

window.kontext = function( container ) {

	// Dispatched when the current layer changes
	var changed = new kontext.Signal();

	// All layers in this instance of kontext
	var layers = Array.prototype.slice.call( container.querySelectorAll( '.layer' ) );

	// Flag if the browser is capable of handling our fancy transition
	var capable =	'WebkitPerspective' in document.body.style ||
					'MozPerspective' in document.body.style ||
					'msPerspective' in document.body.style ||
					'OPerspective' in document.body.style ||
					'perspective' in document.body.style;

	if( capable ) {
		container.classList.add( 'capable' );
	}

	// Create dimmer elements to fade out preceding slides
	layers.forEach( function( el, i ) {
		if( !el.querySelector( '.dimmer' ) ) el.innerHTML += '<div class="dimmer"></div>';
	} );

	/**
	 * Transitions to and shows the target layer.
	 *
	 * @param target index of layer or layer DOM element
	 */
	function show( target, direction ) {

		// Make sure our listing of available layers is up to date
		layers = Array.prototype.slice.call( container.querySelectorAll( '.layer' ) );

		// Flag to CSS that we're ready to animate transitions
		container.classList.add( 'animate' );

		// Flag which direction
		direction = direction || ( target > getIndex() ? 'right' : 'left' );

		// Accept multiple types of targets
		if( typeof target === 'string' ) target = parseInt( target );
		if( typeof target !== 'number' ) target = getIndex( target );

		// Enforce index bounds
		target = Math.max( Math.min( target, layers.length ), 0 );

		// Only navigate if were able to locate the target
		if( layers[ target ] && !layers[ target ].classList.contains( 'show' ) ) {

			layers.forEach( function( el, i ) {
				el.classList.remove( 'left', 'right' );
				el.classList.add( direction );
				if( el.classList.contains( 'show' ) ) {
					el.classList.remove( 'show' );
					el.classList.add( 'hide' );
				}
				else {
					el.classList.remove( 'hide' );
				}
			} );

			layers[ target ].classList.add( 'show' );

			changed.dispatch( layers[target], target );

		}

	}

	/**
	 * Shows the previous layer.
	 */
	function prev() {

		var index = getIndex() - 1;
		show( index >= 0 ? index : layers.length + index, 'left' );

	}

	/**
	 * Shows the next layer.
	 */
	function next() {

		show( ( getIndex() + 1 ) % layers.length, 'right' );

	}

	/**
	 * Retrieves the index of the current slide.
	 *
	 * @param of [optional] layer DOM element which index is
	 * to be returned
	 */
	function getIndex( of ) {

		var index = 0;

		layers.forEach( function( layer, i ) {
			if( ( of && of == layer ) || ( !of && layer.classList.contains( 'show' ) ) ) {
				index = i;
				return;
			}
		} );

		return index;

	}

	/**
	 * Retrieves the total number of layers.
	 */
	function getTotal() {

		return layers.length;

	}

	// API
	return {

		show: show,
		prev: prev,
		next: next,

		getIndex: getIndex,
		getTotal: getTotal,

		changed: changed

	};

};

/**
 * Minimal utility for dispatching signals (events).
 */
kontext.Signal = function() {
	this.listeners = [];
}

kontext.Signal.prototype.add = function( callback ) {
	this.listeners.push( callback );
}

kontext.Signal.prototype.remove = function( callback ) {
	var i = this.listeners.indexOf( callback );

	if( i >= 0 ) this.listeners.splice( i, 1 );
}

kontext.Signal.prototype.dispatch = function() {
	var args = Array.prototype.slice.call( arguments );
	this.listeners.forEach( function( f, i ) {
		f.apply( null, args );
	} );
}

  

  
  

// Create a new instance of kontext
var k = kontext( document.querySelector( '.kontext' ) );


// Demo page JS

var bulletsContainer = document.body.querySelector( '.bullets' );

// Create one bullet per layer
for( var i = 0, len = k.getTotal(); i < len; i++ ) {
	var bullet = document.createElement( 'li' );
	bullet.className = i === 0 ? 'active' : '';
	bullet.setAttribute( 'index', i );
	bullet.onclick = function( event ) { k.show( event.target.getAttribute( 'index' ) ) };
	bullet.ontouchstart = function( event ) { k.show( event.target.getAttribute( 'index' ) ) };
	bulletsContainer.appendChild( bullet );
}

// Update the bullets when the layer changes
k.changed.add( function( layer, index ) {
	var bullets = document.body.querySelectorAll( '.bullets li' );
	for( var i = 0, len = bullets.length; i < len; i++ ) {
		bullets[i].className = i === index ? 'active' : '';
	}
} );

document.addEventListener( 'keyup', function( event ) {
	if( event.keyCode === 37 ) k.prev();
	if( event.keyCode === 39 ) k.next();
}, false );



















