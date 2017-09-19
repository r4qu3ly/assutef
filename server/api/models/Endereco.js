/**
 * Endereco.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	schema: true,
	connection: 'mongo',
	attributes: {
		city: {
			model: 'cidade'
		},
		address: 'string',
		number: 'string',
		postal_code: 'string',
		proficional: {
			model: 'proficional'
		}
	}
};
