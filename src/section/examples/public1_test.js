function testSuite_Player() {
    function testCase_construct() {
        var p = new Player({x: 10, y: 20});
        assert.equal(p._getPosCoord("x"), 10, "X pos. should be set by ctor.");
    }
    function testCase_setX() {
        var p = new Player({x: 0, y: 0});
        p.setX(30);
        assert.equal(p._pos.x, 30, "X pos. should be set by setter.");
    }
    function testCase_getX() {
        var p = new Player({x: 0, y: 0});
        p._pos = {x: 50, y: 10};
        assert.equal(p.getX(), 50, "X pos. should be retrieved by getter.");
    }
}
