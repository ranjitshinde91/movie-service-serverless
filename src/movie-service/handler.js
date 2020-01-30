const MovieController = require("./src/controller/MovieController");
const FindMovieRequest = require("./src/model/FindMovieRequest");

exports.handle = async (event) => {
    return await new MovieController().handle(new FindMovieRequest(event));
};
