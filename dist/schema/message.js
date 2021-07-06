"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageMutation = exports.MessageQuery = undefined;

var _message = require("../models/message");

const MessageQuery = {
  messageById: _message.MessageTC.getResolver('findById'),
  messageByIds: _message.MessageTC.getResolver('findByIds'),
  messageOne: _message.MessageTC.getResolver('findOne'),
  messageMany: _message.MessageTC.getResolver('findMany'),
  messageCount: _message.MessageTC.getResolver('count'),
  messageConnection: _message.MessageTC.getResolver('connection'),
  messagePagination: _message.MessageTC.getResolver('pagination')
};
const MessageMutation = {
  messageCreateOne: _message.MessageTC.getResolver('createOne'),
  messageCreateMany: _message.MessageTC.getResolver('createMany'),
  messageUpdateById: _message.MessageTC.getResolver('updateById'),
  messageUpdateOne: _message.MessageTC.getResolver('updateOne'),
  messageUpdateMany: _message.MessageTC.getResolver('updateMany'),
  messageRemoveById: _message.MessageTC.getResolver('removeById'),
  messageRemoveOne: _message.MessageTC.getResolver('removeOne'),
  messageRemoveMany: _message.MessageTC.getResolver('removeMany')
};
exports.MessageQuery = MessageQuery;
exports.MessageMutation = MessageMutation;