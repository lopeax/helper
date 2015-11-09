Array.prototype.allEqual = function(){
    var i = this.length;
    while (i--) {
        if (this[i] !== this[this.length - 1]) {
            return false;
        }
    }
    return true;
}

Array.prototype.removeItem = function(item){
    this.splice(item,1);
    return this;
}

Array.prototype.shuffle = function(){
    //Fisher-Yates Shuffle
    var m = this.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = this[m];
        this[m] = this[i];
        this[i] = t;
    }
    return this;
}

var helper = {
    arrayOfObjects: {
        editAllProperty: function(arr,property,value){
            var i = arr.length;
            while (i--) {
                arr[i][property] = value;
            }
            return arr;
        },
    },
    browser: {
        info: function(){
            var ua= navigator.userAgent, tem,
            M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if(/trident/i.test(M[1])){
                tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
                return 'IE '+(tem[1] || '');
            }
            if(M[1]=== 'Chrome'){
                tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
                if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
            }
            M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
            if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
            return M.join(' ');
        },
        name: function(){
            var browser = this.info();
            return browser.substr(0,browser.indexOf(' '));
        },
        version: function(){
            var browser = this.info();
            return browser.substr(browser.indexOf(' ')+1)
        },
        matchInfo: function(m){
            var browser = this.info();
            if(browser.match(m)){
                return true;
            } else {
                return false;
            }
        },
        matchName: function(m){
            var browser = this.name();
            if(browser.match(m)){
                return true;
            } else {
                return false;
            }
        },
        matchVersion: function(m){
            var browser = this.version();
            if(browser.match(m)){
                return true;
            } else {
                return false;
            }
        }
    },
    colour: {
        hexToRGB: function(color){
            function cutHex(h){return (h.charAt(0)=="#") ? h.substring(1,7):h}
            var r = parseInt((cutHex(color)).substring(0,2),16);
            var g = parseInt((cutHex(color)).substring(2,4),16);
            var b = parseInt((cutHex(color)).substring(4,6),16);
            return 'rgb('+r.toString()+','+g.toString()+','+b.toString()+')';
        },
        hexToRGBA: function(color,a){
            function cutHex(h){return (h.charAt(0)=="#") ? h.substring(1,7):h}
            var r = parseInt((cutHex(color)).substring(0,2),16);
            var g = parseInt((cutHex(color)).substring(2,4),16);
            var b = parseInt((cutHex(color)).substring(4,6),16);
            return 'rgba('+r.toString()+','+g.toString()+','+b.toString()+','+a.toString()+')';
        },
        rgbToHex: function(r,g,b){
            function toHex(n) {
             n = parseInt(n,10);
             if (isNaN(n)) return "00";
             n = Math.max(0,Math.min(n,255));
             return "0123456789ABCDEF".charAt((n-n%16)/16)
                    + "0123456789ABCDEF".charAt(n%16);
            }
            return '#' + toHex(r)+toHex(g)+toHex(b);
        }
    },
    events: {
        click: (navigator.userAgent.match(/iPad/i)) ? 'touchstart' : 'click',
        linkScrolling: function(){
            document.addEventListener("DOMContentLoaded", function() {
                "use strict"

                var links = document.querySelectorAll("a.scroll") //Important to put 'scroll' class on links that want to scroll
                var i = links.length
                var root = /firefox|trident/i.test(navigator.userAgent) ? document.documentElement : document.body
                var easeInOutCubic = function(t, b, c, d) {
                    if ((t/=d/2) < 1) return c/2*t*t*t + b
                    return c/2*((t-=2)*t*t + 2) + b
                }

                while (i--) 
                    links.item(i).addEventListener("click", function(e) {
                        var startTime
                        var startPos = root.scrollTop
                        var endPos = document.getElementById(/[^#]+$/.exec(this.href)[0]).getBoundingClientRect().top //- fixed nav height if applicable
                        var maxScroll = root.scrollHeight - window.innerHeight
                        var scrollEndValue = startPos + endPos < maxScroll ? endPos : maxScroll - startPos
                        var duration = 900
                        var scroll = function(timestamp) {
                            startTime = startTime || timestamp
                            var elapsed = timestamp - startTime
                            var progress = easeInOutCubic(elapsed, startPos, scrollEndValue, duration)
                            root.scrollTop = progress
                            elapsed < duration && requestAnimationFrame(scroll)
                        }   
                        requestAnimationFrame(scroll)
                        e.preventDefault()
                    }) 
            })
        }
    },
    math: {
        random: function(min, max){return Math.floor((Math.random() * (max - min))) + min;}
    },
    objects: {
        parsePoint: function(x,y,s,c,vx,vy){
            return {
                color: c,
                position: {
                    x: x,
                    y: y
                },
                shape: {
                    height: s,
                    size: s * s,
                    width: s
                },
                velocity: {
                    x: vx,
                    y: vy
                }
            };
        },
        parseRect: function(x,y,h,w,c,vx,vy){
            return {
                color: c,
                position: {
                    x: x,
                    y: y
                },
                shape: {
                    height: h,
                    size: h * w,
                    width: w
                },
                velocity: {
                    x: vx,
                    y: vy
                }
            };
        }
    },
};
