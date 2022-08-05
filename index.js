/**
 * A Node.js client for QuestDB.
 * <p>
 * A Node.js client for QuestDB.
 * </p>
 *
 * @example
 * const sender = new Sender(16384);
 * sender.connect(...);
 * sender.rows(...);
 * sender.flush();
 * sender.close();
 *
 * @module @questdb/nodejs-client
 */

const { Sender } = require('./src/sender');
const { Micros, Nanos } = require('./src/timestamp');

module.exports = { Sender, Micros, Nanos };
