import Joi from "joi";
import validate from "../../../utils/validate"

const productSeriesSchema = Joi.object({
    series: Joi.string().required().messages({
        "string.empty": "series is required",
        "any.required": "series is required"
    })
});

const validateSeries = input => {
    const { value, error } = productSeriesSchema.validate(input);
    if (error) {
        throw error
    }
    return value
}
export default validateSeries;