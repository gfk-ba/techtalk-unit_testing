var currentPos = {x: 100, y: 200};

var getCurrentPos = function() { return {x: currentPos.x, y: currentPos.y}; };
var setCurrentPos = function(x, y) { currentPos.x = x; currentPos.y = y; };

var updatePosition = function(velocity, timeDelta) {
    var pos = getCurrentPos();
    pos = computeNewPosition(pos, velocity, timeDelta);
    setCurrentPos(pos.x, pos.y);
};

var computeNewPosition = function(originalPos, velocity, timeDelta) {
    var pos = {x: originalPos.x, y: originalPos.y};
    pos.x += velocity.x * timeDelta;
    pos.y += velocity.y * timeDelta;
    return pos;
};
