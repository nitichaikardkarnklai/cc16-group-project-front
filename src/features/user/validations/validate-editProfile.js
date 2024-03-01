import Joi from 'joi';
import validate from '../../../utils/validate';

const editProfileSchema = Joi.object({
  nickName: Joi.string().allow(null),
  phone: Joi.string()
    .allow(null)
    .regex(/^[0-9]{10}$/)
    .messages({ 'string.pattern.base': `Phone number must have 10 digits.` }),
  birthDate: Joi.string().allow(null),
  gender: Joi.string().allow(null),
});

const validateEditProfile = (input) => validate(editProfileSchema)(input);
export default validateEditProfile;
