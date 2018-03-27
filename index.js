'use strict';
const Serializer = require('./serializer');

module.exports = () => ({
  serializers: { json: new Serializer() }
});
