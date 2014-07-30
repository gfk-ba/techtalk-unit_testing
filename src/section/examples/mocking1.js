var fs = require("fs");

function Person(name) {
    this.name = name;
}

Person.prototype.load = function() {
    var filePath = this.name + ".json";
    var jsonData = fs.readFile(filePath);
    var data = JSON.parse(jsonData);
    this.name = data.name;
};

Person.prototype.save = function() {
    var filePath = this.name + ".json";
    var jsonData = JSON.stringify({name: this.name});
    fs.writeFile(filePath, jsonData);
};
