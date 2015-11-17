# Helper
A list of helpers that I use pretty regularly

## Vanilla Javascript

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
| browser.match('Chrome 46');                   | Boolean true //Case Sensitive                  |
| browser.matchName('Chrome');                  | Boolean true //Case Sensitive                  |
| browser.matchVersion('46');                   | Boolean true                                   |

### Canvas Helpers

A very useful wrapper for animation so that it throttles the framerate at a certain fps.
It handles requestAnimationFrame for you as well.
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
document.addEventListener(clicked,function(){
  //Do something
});
```

Animates scrolling when a hashtag link is clicked on
```javascript
animations.scrollLinks(document.getElementById('nav'));
```
