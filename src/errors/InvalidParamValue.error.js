const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class InvalidParamValue extends BaseError {
    constructor(parameter) {
        super(
            "InvalidParamValueError",
            StatusCodes.BAD_REQUEST,
            `Invalid values for the parameter ${parameter}`,
            {}
        )
    }
}

module.exports = InvalidParamValue;