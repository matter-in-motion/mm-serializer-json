'use strict';
const Serializer = function() {}

Serializer.prototype.__initRequired = true;

Serializer.prototype.__init = function(units) {
  const settings = Object.assign({
    mime: 'application/json'
  }, units.require('core.settings').serializers.json)

  this.mime = settings.mime;
}

Serializer.prototype.encode = function(msg) {
  return JSON.stringify(msg);
}

Serializer.prototype.decode = function(string) {
  return JSON.parse(string);
};


module.exports = Serializer;
