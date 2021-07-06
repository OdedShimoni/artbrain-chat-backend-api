"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageTC = exports.Message = exports.MessageSchema = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseTimestamp = require("mongoose-timestamp");

var _mongooseTimestamp2 = _interopRequireDefault(_mongooseTimestamp);

var _graphqlComposeMongoose = require("graphql-compose-mongoose");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const ObjectId = require('mongodb').ObjectID;
const MessageSchema = exports.MessageSchema = new _mongoose.Schema({
  //_id: ObjectId,
  sent_by_support: Boolean,
  text: String,
  visitor_ip: String,
  visitor_name: String
}, {
  collection: 'messages'
});
MessageSchema.plugin(_mongooseTimestamp2.default);
MessageSchema.index({
  createdAt: 1,
  updatedAt: 1
});

const Message = exports.Message = _mongoose2.default.model('Message', MessageSchema);

const MessageTC = exports.MessageTC = (0, _graphqlComposeMongoose.composeWithMongoose)(Message);