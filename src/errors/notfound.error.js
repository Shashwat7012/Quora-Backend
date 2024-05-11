const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class NotFoundError extends BaseError {
    constructor(resourceName,resourceValue) {
        super(
            "NotFoundError",
            StatusCodes.NOT_FOUND,
            `${resourceName} with ${resourceValue} is not found!`,
            {}
        )
    }
}

module.exports = NotFoundError;