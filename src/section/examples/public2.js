function Player(pos) {
    this._pos = new Vector([pos.x, pos.y]);
}
Pet.prototype.setX = function(x) { this._pos.set(0, x); };
Pet.prototype.getX = function() { return this._pos.get(0); };
