import Joi from "joi";
import validate from "../../../utils/validate"

const productGroupSchema = Joi.object({
    group: Joi.string().required().messages({
        "string.empty": "group is required",
        "any.required": "group is required"
    }),
    categories: Joi.string().required().messages({
        "string.empty": "categories is required",
        "any.required": "categories is required"
    }),
});

const productGroupEditSchema = Joi.object({
    categories: Joi.string().required().messages({
        "string.empty": "categories is required",
        "any.required": "categories is required"
    }),
});

const validateGroup = input => {
    const { value, error } = productGroupSchema.validate(input);
    if (error) {
        throw error
    }
    return value
}

export const validateEditGroup = input => {
    const { value, error } = productGroupEditSchema.validate(input);
    if (error) {
        throw error
    }
    return value
}

export default validateGroup;