function testSuite_Player() {
    function testCase_get_and_set() {
        var p = new Player({x: 10, y: 20});
        assert.equal(p.getX(), 10, "X pos. should be set by ctor.");
        assert.equal(p.getY(), 20, "Y pos. should be set by ctor.");
        p.setX(30);
        assert.equal(p.getX(), 30, "X pos. from get should be set by setter.");
    }
}
