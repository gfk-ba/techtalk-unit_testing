function Person(name, fsImpl) {
    this._fsImpl = fsImpl;
    this.name = name;
}

Person.prototype.load = function() {
    var filePath = this.name + ".json";
    var jsonData = this._fsImpl.readFile(filePath);
    var data = JSON.parse(jsonData);
    this.name = data.name;
};

Person.prototype.save = function() {
    var filePath = this.name + ".json";
    var jsonData = JSON.stringify({name: this.name});
    this._fsImpl.writeFile(filePath, jsonData);
};
