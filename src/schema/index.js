import { SchemaComposer } from 'graphql-compose';

import db from '../utils/db'; // eslint-disable-line no-unused-vars

const schemaComposer = new SchemaComposer();

import { MessageQuery, MessageMutation } from './message';

schemaComposer.Query.addFields({
    ...MessageQuery,
});

schemaComposer.Mutation.addFields({
    ...MessageMutation,
});

export default schemaComposer.buildSchema();