function Player(pos) {
    this._pos = {x: pos.x, y: pos.y};
}
Pet.prototype.setX = function(x) { this._pos.x = x; };
Pet.prototype.getX = function() { return this._getPosCoord("x"); };
Pet.prototype._getPosCoord = function(coord) { return this._pos[coord]; };
