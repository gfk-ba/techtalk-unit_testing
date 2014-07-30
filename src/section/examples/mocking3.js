function Person(name) {
    this.name = name;
}

Person.prototype.load = function(fileReaderImpl) {
    var filePath = this.name + ".json";
    var jsonData = fileReaderImpl.readFile(filePath);
    var data = JSON.parse(jsonData);
    this.name = data.name;
};

Person.prototype.save = function(fileWriterImpl) {
    var filePath = this.name + ".json";
    var jsonData = JSON.stringify({name: this.name});
    fileWriterImpl.writeFile(filePath, jsonData);
};

