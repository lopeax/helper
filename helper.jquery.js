// Resize SVGs to get rid of large white space
$.fn.resizeSVG = function(){
    var svgs = $(this);
    svgs.each(function(){
        var svg = $(this)[0];
        var bbox = svg.getBBox();
        var viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(' ');
        svg.setAttribute('viewBox', viewBox);
    });
}
