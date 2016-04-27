(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
* Formula fron: http://www.easyrgb.com/index.php?X=MATH&H=21#text21
*/

'use strict';
function hsv2rgb(h, s, v){
  var r, g, b, _h, _i, _1, _2, _3;
  if(s === 0){
    r = g = b = 255;
  } else {
    _h = h * 6;
    if(_h === 6){
      _h = 0;
    }
    _i = Math.floor(_h);
    _1 = v * ( 1 - s );
    _2 = v * ( 1 - s * ( _h - _i ) );
    _3 = v * ( 1 - s * ( 1 - ( _h - _i ) ) );

    if( _i === 0 ){
      r = v; g = _3; b = _1;
    } else if( _i === 1 ){
      r = _2; g = v; b = _1;
    } else if( _i === 2 ){
      r = _1; g = v; b = _3;
    } else if( _i === 3 ){
      r = _1; g = _2; b = v;
    } else if( _i === 4 ){
      r = _3; g = _1; b = v;
    } else{
      r = v; g = _1; b = _2;
    }
  }
  r = Math.ceil(r * 255);
  g = Math.ceil(g * 255);
  b = Math.ceil(b * 255);
  return {r: r, g: g, b: b};
}

module.exports = hsv2rgb;

},{}],2:[function(require,module,exports){
/**
* Formula from: http://www.easyrgb.com/index.php?X=MATH&H=20#text20
*/

'use strict';
function rgb2hsv(r, g, b){
  var h, s, v, min, max, del, delR, delG, delB;
  min = Math.min(r, g, b);
  max = Math.max(r, g, b);
  del = max - min;

  v = max / 255;
  if(del === 0){
    h = 0;
    s = 0;
  } else {
    s = del / max;
    delR = (((max - r) / 6 ) + (del / 2)) / del;
    delG = (((max - g) / 6 ) + (del / 2)) / del;
    delB = (((max - b) / 6 ) + (del / 2)) / del;

    if(r === max){
      h = delB - delG;
    } else if(g === max){
      h = (1 / 3) + delR - delB;
    } else if(b === max){
      h = (2 / 3) + delG - delR;
    }
    if(h < 0){
      h += 1;
    }

    if(h > 1){
      h -= 1;
    }
  }
  return {h: h, s: s, v: v};
}

module.exports = rgb2hsv;

},{}],3:[function(require,module,exports){
'use strict';
let colorPresets = {
  'black':	'000000',
  'silver': 'c0c0c0',
  'gray': '808080',
  'white': 'ffffff',
  'maroon': '800000',
  'red': 'ff0000',
  'purple': '800080',
  'fuchsia': 'ff00ff',
  'green': '008000',
  'lime': '00ff00',
  'olive': '808000',
  'yellow': 'ffff00',
  'navy': '000080',
  'blue': '0000ff',
  'teal': '008080',
  'aqua': '00ffff',
  'orange': 'ffa500',
  'aliceblue': 'f0f8ff',
  'antiquewhite': 'faebd7',
  'aquamarine': '7fffd4',
  'azure': 'f0ffff',
  'beige': 'f5f5dc',
  'bisque': 'ffe4c4',
  'blanchedalmond': 'ffe4c4',
  'blueviolet': '8a2be2',
  'brown': 'a52a2a',
  'burlywood': 'deb887',
  'cadetblue': '5f9ea0',
  'chartreuse': '7fff00',
  'chocolate': 'd2691e',
  'coral': 'ff7f50',
  'cornflowerblue': '6495ed',
  'cornsilk': 'fff8dc',
  'crimson': 'dc143c',
  'darkblue': '00008b',
  'darkcyan': '008b8b',
  'darkgoldenrod': 'b8860b',
  'darkgray': 'a9a9a9',
  'darkgreen': '006400',
  'darkgrey': 'a9a9a9',
  'darkkhaki': 'bdb76b',
  'darkmagenta': '8b008b',
  'darkolivegreen': '556b2f',
  'darkorange': 'ff8c00',
  'darkorchid': '9932cc',
  'darkred': '8b0000',
  'darksalmon': 'e9967a',
  'darkseagreen': '8fbc8f',
  'darkslateblue': '483d8b',
  'darkslategray': '2f4f4f',
  'darkslategrey': '2f4f4f',
  'darkturquoise': '00ced1',
  'darkviolet': '9400d3',
  'deeppink': 'ff1493',
  'deepskyblue': '00bfff',
  'dimgray': '696969',
  'dimgrey': '696969',
  'dodgerblue': '1e90ff',
  'firebrick': 'b22222',
  'floralwhite': 'fffaf0',
  'forestgreen': '228b22',
  'gainsboro': 'dcdcdc',
  'ghostwhite': 'f8f8ff',
  'gold': 'ffd700',
  'goldenrod': 'daa520',
  'greenyellow': 'adff2f',
  'grey': '808080',
  'honeydew': 'f0fff0',
  'hotpink': 'ff69b4',
  'indianred': 'cd5c5c',
  'indigo': '4b0082',
  'ivory': 'fffff0',
  'khaki': 'f0e68c',
  'lavender': 'e6e6fa',
  'lavenderblush': 'fff0f5',
  'lawngreen': '7cfc00',
  'lemonchiffon': 'fffacd',
  'lightblue': 'add8e6',
  'lightcoral': 'f08080',
  'lightcyan': 'e0ffff',
  'lightgoldenrodyellow': 'fafad2',
  'lightgray': 'd3d3d3',
  'lightgreen': '90ee90',
  'lightgrey': 'd3d3d3',
  'lightpink': 'ffb6c1',
  'lightsalmon': 'ffa07a',
  'lightseagreen': '20b2aa',
  'lightskyblue': '87cefa',
  'lightslategray': '778899',
  'lightslategrey': '778899',
  'lightsteelblue': 'b0c4de',
  'lightyellow': 'ffffe0',
  'limegreen': '32cd32',
  'linen': 'faf0e6',
  'mediumaquamarine': '66cdaa',
  'mediumblue': '0000cd',
  'mediumorchid': 'ba55d3',
  'mediumpurple': '9370db',
  'mediumseagreen': '3cb371',
  'mediumslateblue': '7b68ee',
  'mediumspringgreen': '00fa9a',
  'mediumturquoise': '48d1cc',
  'mediumvioletred': 'c71585',
  'midnightblue': '191970',
  'mintcream': 'f5fffa',
  'mistyrose': 'ffe4e1',
  'moccasin': 'ffe4b5',
  'navajowhite': 'ffdead',
  'oldlace': 'fdf5e6',
  'olivedrab': '6b8e23',
  'orangered': 'ff4500',
  'orchid': 'da70d6',
  'palegoldenrod': 'eee8aa',
  'palegreen': '98fb98',
  'paleturquoise': 'afeeee',
  'palevioletred': 'db7093',
  'papayawhip': 'ffefd5',
  'peachpuff': 'ffdab9',
  'peru': 'cd853f',
  'pink': 'ffc0cb',
  'plum': 'dda0dd',
  'powderblue': 'b0e0e6',
  'rosybrown': 'bc8f8f',
  'royalblue': '4169e1',
  'saddlebrown': '8b4513',
  'salmon': 'fa8072',
  'sandybrown': 'f4a460',
  'seagreen': '2e8b57',
  'seashell': 'fff5ee',
  'sienna': 'a0522d',
  'skyblue': '87ceeb',
  'slateblue': '6a5acd',
  'slategray': '708090',
  'slategrey': '708090',
  'snow': 'fffafa',
  'springgreen': '00ff7f',
  'steelblue': '4682b4',
  'tan': 'd2b48c',
  'thistle': 'd8bfd8',
  'tomato': 'ff6347',
  'turquoise': '40e0d0',
  'violet': 'ee82ee',
  'wheat': 'f5deb3',
  'whitesmoke': 'f5f5f5',
  'yellowgreen': '9acd32',
  'rebeccapurple': '663399'
};

module.exports = colorPresets;

},{}],4:[function(require,module,exports){

'use strict';
const rgb2hsv = require('./color-operations/rgb2hsv');
const hsv2rgb = require('./color-operations/hsv2rgb');
const distGenerator = require('./distribution-generator');
const colorPresets = require('./color-presets');

  function Color(obj){
    let defaults = {
      r : 255,
      g : 0,
      b : 0
    };
    obj = obj || {};

    this._name = obj.name;
    this.r = obj.r || defaults.r;
    this.g = obj.g || defaults.g;
    this.b = obj.b || defaults.b;
  }

  Color.prototype.HSV = function HSV(h, s, v){

    if(arguments.length === 0){ // set behavior
      return rgb2hsv(this.r, this.g, this.b);

    } // get behavior
      let hsv = rgb2hsv(this.r, this.g, this.b),
          rgb;

      h = h || hsv.h;
      s = s || hsv.s;
      v = v || hsv.v;
      rgb = hsv2rgb(h, s, v);
      this.r = rgb.r;
      this.g = rgb.g;
      this.b = rgb.b;

      return this;

  };


  Color.prototype.RGB = function RGB(r, g, b){
    if(arguments.length === 0){ // Get
      return {r: this.r, g: this.g, b: this.b};
    } // Set
    r = r || this.r;
    g = g || this.g;
    b = b || this.b;
    this.r = r;
    this.g = g;
    this.b = b;
    return this;
  };


  Color.prototype.hex = function hex(hexString){
    if(arguments.length === 0){
      let hr = this.r.toString(16),
          hg = this.g.toString(16),
          hb = this.b.toString(16);
          // Ussing two places to represent each number
          hr = hr.length < 2 ? '0' + hr : hr;
          hg = hg.length < 2 ? '0' + hg : hg;
          hb = hb.length < 2 ? '0' + hb : hb;

      return hr + hg + hb;
    }
    let r = parseInt(hexString.substr(0, 2), 16),
        g = parseInt(hexString.substr(2, 2), 16),
        b = parseInt(hexString.substr(4, 2), 16);

    this.RGB(r, g, b);
    return this;
  };


  Color.prototype.rotateHueWheel = function rotateHueWheel(angle){
    var hsv = this.HSV();
    hsv.h += angle;
    if(hsv.h > 1){
      hsv.h -= 1;
    }
    this.HSV(hsv.h);
    return this;
  };

  Color.prototype.hue = function hue(hue){
    if(arguments.length === 0)return this.HSV().h; // Get behavior
    return this.HSV(hue); // Set behavior
  };

  Color.prototype.saturation = function saturation(saturation){
    if(arguments.length === 0) return this.HSV().s; // Get behavior
    return this.HSV(null,saturation); // Set behavior
  };

  Color.prototype.value = function value(value){
    if (arguments.length === 0) return this.HSV().v; // Get behavior
    return this.HSV(null, null, value); // Set behavior
  };

  Color.prototype.getShades = function getShades(count, distType, options){
      let shades = [],
          config = {};

      config.count = count || 2;
      config.type = distType || 'equidistant';
      config.options = options || {};

      distGenerator(config)
        .forEach((point)=>{
          var shade = this.clone();
          return shades.push(shade.value(point));
        });

      //return new colors which are shades of original color
      return shades;
  };

  Color.prototype.getTints = function getTints(count, distType, options){
    let tints = [],
        config = {};

    config.count = count || 2;
    config.type = distType || 'equidistant';
    config.options = options || {};

    distGenerator(config)
      .forEach((point)=>{
        var tint = this.clone();
        return tints.push(tint.value(point));
      });

    //return new colors which are tints of original color
    return tints;
  };

  Color.prototype.getTones = function getTones(count, distType, options){
    let tones = [],
        config = {};

    config.count = count || 2;
    config.type = distType || 'equidistant';
    config.options = options || {};

    distGenerator(config)
      .forEach((point)=>{
        var tone = this.clone();
        tone.value(point);
        tone.value(point);
        return tones.push(tone);
      });

    //return new colors which are tones of original color
    return tones;
  };

  Color.prototype.createScheme = function createscheme(){
  };

  Color.prototype.name = function name(name){
    if(arguments.length === 0){ // Get behavior
      return this._name;
    } // Set behavior
    this._name = name;
    return this;
  };

  Color.prototype.cssName = function cssName(name){
    let hexString;
    if(arguments.length === 0){ // Get behavior
        hexString = this.hex();
        for(let key in colorPresets){
          if(colorPresets[key] === hexString){
            return key;
          }
        }
        // Not found, return undefined
        return void 0;
    } // Set behavior
    hexString = colorPresets[name];
    if(typeof hexString === 'string'){
      this._name = name;
      this.hex(hexString);
    } else{
      throw new Error(`color ${name} is not defined`);
    }
    return this;
  };

  Color.prototype.clone = function clone(){
    let obj = {
      name: this._name,
      r: this.r,
      g: this.g,
      b: this.b
    };
    return new Color(obj);
  };

  Color.prototype.toJSON = function toJSON(){
    return {
      name: this._name,
      r: this.r,
      g: this.g,
      b: this.b
    };
  };

module.exports = Color;

},{"./color-operations/hsv2rgb":1,"./color-operations/rgb2hsv":2,"./color-presets":3,"./distribution-generator":10}],5:[function(require,module,exports){
'use strict';
const geometricProgression = require('./geometric-progression');

function analogous(count, options){
count = count || 1;
options = options || {};
let pivot = 0,
distIncr = 0,
currDist = 0,
currPosDist = 0,
currNegDist = 0,
distances = [],
direction = true, // trule for positive, false for negative
defaults = {
  dist: {
    fn: geometricProgression,
    params: [count + 1, 0.3, true] // See geometric-progression.js
  },
  invert: false
};

options = Object.assign(defaults, options);

if(typeof options.dist === 'number'){
  distIncr = options.dist;
} else{
  distIncr = options.dist.fn.apply(this, options.dist.params);
}

if(typeof distIncr === 'number'){
  if(distIncr > 1 || distIncr < 0){
    throw new Error('Distance increment must be a value between 0 and 1');
  }
}
if(options.invert){
  direction = !direction;
}
for(let ii = 0; ii < count; ii++){
  distances.push(currDist);
  if(direction){
    currPosDist = pivot + currPosDist +distIncr;
    if(currPosDist > 1){
      currPosDist -= 1;
    }
    currDist = currPosDist;
  } else {
    currNegDist = pivot + currNegDist - distIncr;
    if(currNegDist < -1){
      currNegDist += 1;
    }
    currDist = currNegDist;
  }
  direction = !direction;
}
return distances;
}

module.exports = analogous;

},{"./geometric-progression":8}],6:[function(require,module,exports){
'use strict';
const analogous = require('./analogous');

function complement(count, options){
    count = count || 1;
    options = options || {};
    let pivot = 0.5,
        absDistance = 0,
        distances,
        complements = analogous(count, options),
        isPair = (count % 2) === 0;

        if(complements.length > 2){
          let firstPoint = Math.abs(complements[0]),
              secondPoint = Math.abs(complements[1]);

          if(firstPoint > secondPoint){
            absDistance = firstPoint - secondPoint;
          } else {
            absDistance = secondPoint - firstPoint;
          }

          if(isPair){
            pivot += absDistance;
          }
        }

        // Rotate points 180 deg plus center;
        complements = complements.map(function(point){
          let newPointLocation;
          newPointLocation = point + pivot;
          if(newPointLocation>1){
            newPointLocation -= 1;
          }
          return newPointLocation;
        });

        distances = [].concat(0, complements);
    return distances;
  }

  module.exports = complement;

},{"./analogous":5}],7:[function(require,module,exports){
'use strict';
function equidistant(count){
  count = count || 1;
  let distances = [],
      gap = 1 / count,
      currDist = 0;
  for(var ii = 0; ii < count; ii++){
    distances.push(currDist);
    currDist += gap;
  }
  return distances;
}

module.exports = equidistant;

},{}],8:[function(require,module,exports){
'use strict';
function geometricProgression(iterations, ratio, endValue){
  iterations = iterations || 1;
  ratio = ratio || 0.5;
  endValue = !!endValue;

  let sequence = [],
  currBlock = 1;

  if(endValue){ // Return only the last value
    return Math.pow(ratio, iterations -1);
  }
  for(var ii = 0; ii < iterations; ii++){
    sequence.push(currBlock);
    currBlock = (currBlock * ratio);
  }
  return sequence;
}

module.exports = geometricProgression;

},{}],9:[function(require,module,exports){
'use strict';

function rotate(count, options){
  count = count || 1;
  options  = options || {};
  const COMPANG = 0.5; // Complementary Angle
  let
  defaults = {
    length: 0.15,
    invert: false,
  },
  points = [],
  complementary = true,
  currAng = 0,
  nextAng;

  // Set default options if not defined;
  options = Object.assign(defaults, options);

  if(options.invert){
    options.length = -options.length;
  }

  for(let ii = 0; ii < count; ii++){
    points.push(currAng);
    nextAng = complementary ? COMPANG : options.length;
    complementary = !complementary;
    currAng += nextAng;
    if(currAng > 1){
      currAng -= 1;
    }
  }

  return points;
}

module.exports = rotate;

},{}],10:[function(require,module,exports){
'use strict';
const analogous = require('./distribution-functions/analogous');
const complement = require('./distribution-functions/complement');
const equidistant = require('./distribution-functions/equidistant');
const geometricProgression = require('./distribution-functions/geometric-progression');
const rotate = require('./distribution-functions/rotate');

function generateDistribution(config){
  let fn,
      defaults = {
        type: 'rotate',
        count: 1,
        options: {}
      };

  config = config || {};
  config = Object.assign(defaults, config);
  switch(config.type){
    case 'analogous': fn = analogous;
    break;
    case 'complement': fn = complement;
    break;
    case 'equidistant': fn = equidistant;
    break;
    case 'geometric-progression': fn = geometricProgression;
    break;
    case 'rotate': fn = rotate;
    break;
    default: fn = equidistant;
  }
  return fn(config.count, config.options);
}

module.exports = generateDistribution;

},{"./distribution-functions/analogous":5,"./distribution-functions/complement":6,"./distribution-functions/equidistant":7,"./distribution-functions/geometric-progression":8,"./distribution-functions/rotate":9}],11:[function(require,module,exports){
'use strict';

const Color = require('./color');
const Scheme = require('./scheme');

module.exports = {
  Color: Color,
  Scheme: Scheme
};

},{"./color":4,"./scheme":13}],12:[function(require,module,exports){
'use strict';
let schemePresets = {
  analogous: {
    count: 3,
    fn: 'analogous',
    options: {}
  },

  complementary: {
    count: 2,
    fn: 'complement',
    options: {}
  },

  splitComplementary: {
    count: 3,
    fn: 'complement',
    options: {}
  },

  triadic: {
    count: 3,
    fn: 'equidistant'
  },

  squere: {
    count: 4,
    fn: 'equidistant'
  },

  rectangle: {
    count: 4,
    fn: 'rotate',
    options: {}
  },
};

module.exports = schemePresets;

},{}],13:[function(require,module,exports){
'use strict';

const Color = require('./color');
const distributionGenerator = require('./distribution-generator');
const schemeDefinitions = require('./scheme-definitions');

function Scheme(options){
  options = options || {};
  this._name = options.name || undefined;
  this.colors = options.colors || [{base: new Color()}];
}

Scheme.prototype.toJSON = function toJSON(){

  return {
    name: this._name,
    colors: this.colors
  };
};

Scheme.prototype.name = function name(name){
  if(arguments.length === 0){ // Get behavior
    return this._name;
  } // Set behavior
  this._name = name;
  return this;
};

Scheme.prototype.rotate = function rotate(angle){
  function rotateColors(color){
    color.rotateHueWheel(angle);
  }
  this.traverse(rotateColors);
  return this;
};

Scheme.prototype.setSaturation = function setSaturation(saturation){
  saturation = saturation || this.colors[0].base.HSV().s;
  function saturateColors(color){
    color.HSV(null, saturation);
  }
  this.traverse(saturateColors);
  return this;
};

Scheme.prototype.flatten = function flatten(value){
  value = value || this.colors[0].base.HSV().v;
  function flattenColors(color){
    color.HSV(null, null, value);
  }

  this.traverse(flattenColors);
  return this;
};

Scheme.prototype.reset = function reset(){
  this._name = undefined;
  this.colors = [{base: new Color()}];
  return this;
};

Scheme.prototype.homogenize = function homogenize(saturation, value){
  this.setSaturation(saturation);
  this.flatten(value);
  return this;
};

Scheme.prototype.configure = function configure(options){
  if(!options){
    throw new Error('configure method was call without configuration options.');
  }
  if(typeof options === 'string'){
    options = schemeDefinitions[options];
    if(!options){
      throw new Error(`Type ${options} is not defined.`);
    }
  }

  this.config = options;
};

Scheme.prototype.generate = function generate(){
  let angles;

  angles = distributionGenerator(this.config);
  angles.forEach((angle, index)=>{
    if(index === 0){ // first iteration is the main color which is already in the array
      return;
    }
    // Fist color in the array is the main color to calculate other scheme colors
    var auxColor = this.colors[0].base.clone();
    this.colors.push({base: auxColor.rotateHueWheel(angle)});
  });
};

Scheme.prototype.generateShades = function generateShades(colorIndex, shadesCount){
  if(!colorIndex) return;
  if(!shadesCount){
    shadesCount = colorIndex;
    colorIndex = -1;
  }
  if(colorIndex < 0){ // Apply to all colors
    this.colors.forEach((color, index)=>{
      this.colors[index].shades = color.base.getShades(shadesCount);
    });
  } else {
    this.colors[colorIndex].shades = this.colors[colorIndex].base.getShades(shadesCount);
  }
  return this;
};

Scheme.prototype.generateTints = function generateTints(colorIndex, tintsCount){
  if(!colorIndex) return;
  if(!tintsCount){
    tintsCount = colorIndex;
    colorIndex = -1;
  }
  if(colorIndex < 0){ // Apply to all colors
    this.colors.forEach((color, index)=>{
      this.colors[index].tints = color.base.getTints(tintsCount);
    });
  } else {
    this.colors[colorIndex].tints = this.colors[colorIndex].base.getTints(tintsCount);
  }
  return this;
};

Scheme.prototype.generateTones = function generateTones(colorIndex, tonesCount){
  if(!colorIndex) return;
  if(!tonesCount){
    tonesCount = colorIndex;
    colorIndex = -1;
  }
  if(colorIndex < 0){ // Apply to all colors
    this.colors.forEach((color, index)=>{
      this.colors[index].tones = color.base.getShades(tonesCount);
    });
  } else {
    this.colors[colorIndex].tones = this.colors[colorIndex].base.getShades(tonesCount);
  }
  return this;
};

Scheme.prototype.traverse = function traverse(fn){
  this.colors.forEach((colorSet)=>{
    fn(colorSet.base);
    if(colorSet.shades && colorSet.shades.length > 0){
      colorSet.shades.forEach(fn);
    }

    if(colorSet.tints && colorSet.tints.length > 0){
      colorSet.tints.forEach(fn);
    }

    if(colorSet.tones && colorSet.tones.length > 0){
      colorSet.tones.forEach(fn);
    }
  });
};

Scheme.prototype.clone = function clone(){
  return new Scheme({
    name: this._name,
    colors: this.colors
  });
};

module.exports = Scheme;

},{"./color":4,"./distribution-generator":10,"./scheme-definitions":12}]},{},[11]);
