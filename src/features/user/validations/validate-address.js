import Joi from 'joi';
import validate from '../../../utils/validate';

const userAddressSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    'string.empty': 'firstName is required',
    'any.required': 'firstName is required',
  }),
  lastName: Joi.string().trim().required().messages({
    'string.empty': 'lastName is required',
    'any.required': 'lastName is required',
  }),
  phone: Joi.string()
    .trim()
    .required()
    .pattern(/^[0-9]{10,10}$/)
    .messages({
      'string.empty': 'phone is required',
      'any.required': 'phone is required',
    }),
  apartmentSuite: Joi.string(),
  cityVillage: Joi.string(),
  zipCode: Joi.string().pattern(/^[0-9]{5,10}$/),
  province: Joi.string().trim().required().messages({
    'string.empty': 'province is required',
    'any.required': 'province is required',
  }),
});

const validateUserAddress = (input) => validate(userAddressSchema)(input);
export default validateUserAddress;
