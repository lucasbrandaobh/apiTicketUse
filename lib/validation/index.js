const tv4 = require('tv4');
const errorHandler = require('errorhandler');
const userSchema = require('./schemas/user-schema');
const Validator = {};
const self = Validator;

tv4.addSchema(userSchema);

Validator.getErrorMessages = (result) => {
  const errors = [];
  result.errors.forEach((error) => {
    errors.push(error.message);
  });
  return errors;
};

Validator.formatErrorMessage = (result) => {
  const errors = self.getErrorMessages(result);
  return `${errors.join('.\n')}.`;
};

Validator.validate = (json, schemaId) => tv4.validateMultiple(json, schemaId);

module.exports = Validator;
