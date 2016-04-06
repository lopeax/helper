String.prototype.hexToRGB = function(){
    function cutHex(h){return (h.charAt(0)=="#") ? h.substring(1,7):h}
    var r = parseInt((cutHex(this)).substring(0,2),16);
    var g = parseInt((cutHex(this)).substring(2,4),16);
    var b = parseInt((cutHex(this)).substring(4,6),16);
    return 'rgb('+r.toString()+','+g.toString()+','+b.toString()+')';
}

String.prototype.hexToRGBA = function(a){
    function cutHex(h){return (h.charAt(0)=="#") ? h.substring(1,7):h}
    var r = parseInt((cutHex(this)).substring(0,2),16);
    var g = parseInt((cutHex(this)).substring(2,4),16);
    var b = parseInt((cutHex(this)).substring(4,6),16);
    return 'rgba('+r.toString()+','+g.toString()+','+b.toString()+','+a.toString()+')';
}

String.prototype.rgbToHex = function(){
    var start_pos = this.indexOf('(') + 1;
    if(this.substring(0,start_pos - 1) === 'rgb'){
        var end_pos = this.indexOf(')',start_pos);
        var rgb = this.substring(start_pos,end_pos).split(',');
        function toHex(n) {
            n = parseInt(n,10);
            if (isNaN(n)) return '00';
            n = Math.max(0,Math.min(n,255));
            return '0123456789ABCDEF'.charAt((n-n%16)/16)
                 + '0123456789ABCDEF'.charAt(n%16);
        }
        return '#' + toHex(rgb[0])+toHex(rgb[1])+toHex(rgb[2]);
    } else {
        return 'Sorry, this isn\'t an rgb colour';
    }
}

Array.prototype.same = function(){
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

//Fisher-Yates Shuffle
Array.prototype.shuffle = function(){
    var m = this.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = this[m];
        this[m] = this[i];
        this[i] = t;
    }
    return this;
}

Array.prototype.editAllProperty = function(property,value){
    var i = this.length;
    while (i--) {
        this[i][property] = value;
    }
    return this;
}

Object.prototype.toMatrix = function(cols) {
    var matrix = [],
        i = 0,
        len = this.length,
        k = -1;
    while (i < len) {
        if (i % cols === 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(this[i]);
        i++;
    }
    return matrix;
}

CanvasRenderingContext2D.prototype.render = function(render) {
    (function animate() {
        requestAnimationFrame(animate);
        render();
    })();
}

CanvasRenderingContext2D.prototype.renderAndThrottleFpsAt = function (fps, render) {
    var fpsInterval, startTime, now, then, elapsed;

    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;

    (function animate() {
        requestAnimationFrame(animate);
        now = Date.now();
        elapsed = now - then;
        if (elapsed > fpsInterval) {
            then = now - (elapsed % fpsInterval);
            render();
        }
    })();
}

Math.randomInt = function(min, max){
    return Math.round((Math.random() * (max - min))) + min
}

var clicked = (navigator.userAgent.match(/iPad/i)) ? 'touchstart' : 'click';

var browser =  {
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
};

var animations = {
    onload: function(callback) {
        document.readyState === 'interactive' || document.readyState === 'complete' ? callback : document.addEventListener('DOMContentLoaded', callback);
    },
    renderize: function(fps, render) {
        var fpsInterval, startTime, now, then, elapsed;

        fpsInterval = 1000 / fps;
        then = Date.now();
        startTime = then;

        (function animate() {
            var anim = requestAnimationFrame(animate);
            now = Date.now();
            elapsed = now - then;
            if (elapsed > fpsInterval) {
                then = now - (elapsed % fpsInterval);
                render();
            }
        })();
    },
    easeInOutCubic: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    bringIntoView: function(e, duration) {
        var self = this;
        if(typeof e === 'string'){
            if(document.getElementById(e)){
                e = document.getElementById(e);
            } else if(document.querySelector('.' + e)){
                e = document.querySelector('.' + e);
            } else {
                e = document.querySelector(e);
            }
        }
        var bodyel = /firefox|trident/i.test(navigator.userAgent) ? document.documentElement : document.body;
        var startTime;
        var startPos = bodyel.scrollTop;
        var endPos = e.getBoundingClientRect().top;
        var maxScroll = bodyel.scrollHeight - window.innerHeight;
        var scrollEndValue = startPos + endPos < maxScroll ? endPos : maxScroll - startPos;

        self.renderize(60, function() {
            startTime = startTime || Date.now();
            var elapsed = Date.now() - startTime;
            if (elapsed < duration) {
                bodyel.scrollTop = self.easeInOutCubic(elapsed, startPos, scrollEndValue, duration);
            }
        });
    },
    scrollAnchorLinks: function(duration){
        var self = this;
        self.onload(function(){
            var links = document.querySelectorAll('a');
            var i = links.length;
            while(i--) {
                var href = links.item(i).href;
                if(href.indexOf('/#') > 1){
                    var target = href.substr(href.indexOf('/#') + 2);
                    if(document.getElementById(target)){
                        links.item(i).addEventListener(clicked,function(e){
                            self.bringIntoView(document.getElementById(target), duration);
                            setTimeout(function(){
                                window.location.hash = target;
                            },duration + 10);
                            e.preventDefault();
                            return false;
                        });
                    }
                }
            }
        });
    },
    scrollAnchorOnLoad: function(duration){
        var hash = window.location.hash.substr(1);
        window.location.hash = '';
        this.onload(function(){
            if(hash) {
                animations.bringIntoView(hash, duration);
                setTimeout(function(){
                    window.location.hash = hash;
                }, duration + 10)
            }
        });
    }
};
