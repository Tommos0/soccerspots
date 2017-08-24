traverseAndCallback = function(element, callback, iteration) {
    if (typeof iteration === "undefined") iteration = 1;
    if (iteration > 1) callback(element, iteration);
    for (var i=0; i<element.children.length; i++) {
        traverseAndCallback(element.children[i], callback, iteration+1);
    }
}

traverseAndCallback(document.body, function(element, iteration) {
    console.log(element);
    element.style.transform = "translate3D(0 0 5px)";
});

document.body.style.transform="rotateZ('25deg')";