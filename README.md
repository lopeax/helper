# helper
A list of helpers that I use pretty regularly

Usage:

String hexToRGB

```javascript
var str = '#FFFFFF';
str.hexToRGB();
console.log(str);
```

Returns string 'rgb(255,255,255)'



String hexToRGBA

```javascript
var str = '#FFFFFF';
str.hexToRGBA(1); //String or int
console.log(str);
```

Returns string 'rgba(255,255,255,1)'



String rgbToHex

```javascript
var str = 'rgb(255,255,255)';
str.rgbToHex();
console.log(str);
```

Returns string '#FFFFFF'



Array same

```javascript
var arr = [1,1,1,1,1,1,1,1,1];
console.log(hex.arr());
```

Returns boolean 'true'



Array removeItem

```javascript
var arr = [1,3,5,7,9];
arr.removeItem(2); // The array index to remove
console.log(arr);
```

Returns array [1,5,7,9]



Array shuffle

```javascript
var arr = [1,3,5,7,9];
arr.shuffle();
console.log(arr);
```

Returns array [7,5,9,1] //Changes everytime



Array editAllProperty 

```javascript
var arr = [1,3,5,7,9];
arr.shuffle();
console.log(arr);
```

Returns array [7,5,9,1] //Changes everytime
