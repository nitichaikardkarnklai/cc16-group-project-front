import Joi from "joi";
import validate from "../../../utils/validate"

const addProductSchema = Joi.object({
    serieId: Joi.number().required().messages({
        "string.empty": "series is required",
        "any.required": "series is required",
        "number.base": "series is required"
    }),
    groupId: Joi.number().required().messages({
        "string.empty": "group is required",
        "any.required": "group is required",
        "number.base": "group is required"
    }),
    productName: Joi.string().trim().required().messages({
        "string.empty": "name is required",
        "any.required": "name is required"
    }),
    launchDate: Joi.date().required().messages({
        'string.empty': "launch date is required",
        "any.required": "launch date is required",
        "date.base": "launch date is required"
    }),
    price: Joi.number().required().messages({
        "string.empty": "price is required",
        "any.required": "price is required"
    }),
    stockQuantity: Joi.number().required().messages({
        "string.empty": "quantity is required",
        "any.required": "quantity is required"
    }),
    brand: Joi.string().trim().required().messages({
        "string.empty": "brand is required",
        "any.required": "brand is required"
    }),
    size: Joi.string().trim().required().messages({
        "string.empty": "size is required",
        "any.required": "size is required"
    }),
    material: Joi.string().trim().required().messages({
        "string.empty": "material is required",
        "any.required": "material is required"
    }),
    customDetail: Joi.string().trim().allow("")
});

export const validateAddProduct = input => {
    const { value, error } = addProductSchema.validate(input);
    if (error) {
        throw error
    }
    return value
}