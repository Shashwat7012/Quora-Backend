const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class MissionParams extends BaseError {
    constructor(params) {
        const parameters = params.join(",");
        super(
            "RequestedParametersMissionError",
            StatusCodes.BAD_REQUEST,
            `Missing requested parameters : ${parameters} `,
            {}
        )
    }
}

module.exports = MissionParams;