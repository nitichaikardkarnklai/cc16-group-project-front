import Joi from "joi";
import validate from "../../../utils/validate"

const productSchema = Joi.object({
    group: Joi.string().required().messages({
        "string.empty": "group is required",
        "any.required": "group is required"
    }),
    categories: Joi.string().required().messages({
        "string.empty": "categories is required",
        "any.required": "categories is required"
    }),
});

const validateProduct = input => {
    const { value, error } = productGroupSchema.validate(input);
    if (error) {
        throw error
    }
    return value
}

export default validateProduct;