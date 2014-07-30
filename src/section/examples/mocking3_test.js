function testSuite_Person() {
    function FileWriterMock(storage) {
        this._storage = storage;
    }
    FileWriterMock.prototype.writeFile = function(filePath, data) {
        this._storage[filePath] = data;
    };

    function FileReaderMock(storage) {
        this._storage = storage;
    }
    FileReaderMock.prototype.readFile = function(filePath) {
        return this._storage[filePath];
    };

    function testCase_saving_and_loading() {
        var storage = {};

        var person = new Person("Dave");
        var fileWriter = new FileWriterMock(storage);
        person.save(fileWriter);

        var fileReader = new FileReaderMock(storage);
        var samePerson = new Person();
        samePerson.load(fileReader);

        assert.equal(samePerson.name, person.name, "Names should be equal!");
    }
}
