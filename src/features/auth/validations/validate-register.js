import Joi from "joi";
import validate from "../../../utils/validate";

const registerSchema = Joi.object({
    firstName: Joi.string().required().trim().messages({
        'string.empty': "first name is required"
    }),
    lastName: Joi.string().required().trim().messages({
        'string.empty': "last name is required"
    }),
    email: Joi.string().email({ tlds: false }).required().messages({
        'alternatives.match': "invalid email address or mobile number",
        'string.empty': "email is required",
        "any.only": "email is required",
    }),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{6,}$/).required().messages({
        'string.empty': "password is required",
        "string.pattern.base": "password must be at least 6 characters and contain only alphabet and number"
    }),
    confirmPassword: Joi.string().valid(Joi.ref("password")).messages({
        'string.empty': "confirm password is required",
        "any.only": "password and confirm password did not match"
    }),
    phone: Joi.string().required().regex(/^[0-9]{10}$/).trim().messages({
        'string.empty': "phone number is required",
        "any.only": "phone number is required",
        'string.pattern.base': `Phone number must have 10 digits of number.`
    }),
})

const validateRegister = input => validate(registerSchema)(input);

export default validateRegister;