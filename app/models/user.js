'use strict';
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
	name: { type : String, required : true },
	email: { type : String, required : true, index: { unique : true }},
	cardId:{ type : String, required : true },
	password:{ type : String, required : true }		
}, 
{
	versionKey : false
});

userSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) 
      return next();
  bcrypt.genSalt(5, function(err, salt) {
    if (err) 
        return next(err);

  bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) 
          return next(err);

      user.password = hash;
      next();
    });
  });
});	

userSchema.methods.verifyPassword = function(password, next) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) 
        return next(err);

    next(isMatch);
  });
};

module.exports = mongoose.model('users', userSchema);
