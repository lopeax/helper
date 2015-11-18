# Helper
A list of helpers that I use pretty regularly

## Vanilla Javascript [js](helper.js)

### String Helpers

| Variable                   | Usage                                         | Result                                   |
|----------------------------|-----------------------------------------------|------------------------------------------|
| string '#FFFFFF'           | string.hexToRGB();                            | String 'rgb(255,255,255)'                |
| string '#FFFFFF'           | string.hexToRGBA(1); //Feed alpha value       | String 'rgb(255,255,255)'                |
| string 'rgb(255,255,255)'  | string.rgbToHex();                            | String '#FFFFFF'                         |

### Array Helpers

| Variable                   | Usage                                         | Result                                   |
|----------------------------|-----------------------------------------------|------------------------------------------|
| Array [1,1,1,1,1,1,1,1]    | array.same();                                 | Boolean true                             |
| Array [1,3,5,7,9]          | array.removeItem(2); //Feed index to remove   | Array [1,5,7,9]                          |
| Array [1,3,5,7,9]          | array.shuffle();                              | Array [7,1,9,5,3]                        |
| Array [{a:2},{a:2},{a:2}]  | array.editAllProperty('a',4); //Feed new value| Array [{a:4},{a:4},{a:4}]                |
| Array [1,2,3,1,2,3,1,2,3]  | array.toMatrix(3); //Feed depth               | Array [[1,2,3],[1,2,3],[1,2,3]]          |

### Math Helpers

| Usage                                         | Result                                         |
|-----------------------------------------------|------------------------------------------------|
| Math.randomInt(10,100);                       | Integer 59 //Random integer between 10 and 100 |

### Browser Helpers

| Usage                                         | Result                                         |
|-----------------------------------------------|------------------------------------------------|
| browser.info();                               | String 'Chrome 46'                             |
| browser.name();                               | String 'Chrome'                                |
| browser.version();                            | String '46'                                    |
| browser.matchInfo('Chrome 46');               | Boolean true //Case Sensitive Regex            |
| browser.matchName('Chrome');                  | Boolean true //Case Sensitive Regex            |
| browser.matchVersion('46');                   | Boolean true //Case Sensitive Regex            |

### Canvas Helpers

A very useful wrapper for animation that handles requestAnimationFrame.
```javascript
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.render(function(){
  //Do something
});
```

Same as above except it also throttles the framerate at a certain fps.
```javascript
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.renderAndThrottleFpsAt(60, function(){
  //Do something
});
```

### Event Helpers

Useful click event that handles ios touch as well
```javascript
document.addEventListener(clicked,function(e){
  //Do something
});
```

Animates scrolling when a hashtag link is clicked on
```javascript
//Use this if the navigation isn't fixed
animations.scrollLinks(0);

//If the navigation is fixed, get the height of the nav element to pass into the function
animations.scrollLinks(document.getElementById('nav').offsetHeight);
```
