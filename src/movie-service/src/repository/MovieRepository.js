const Properties = require('../Properties');
const Movie = require("../model/Movie");
const dynamoDbClient = Properties.dynamoDbClient();
const movieTableName = Properties.movieTableName();

class MovieRepository {

    async findBy(movieId) {
        const getItemRequest = {
            TableName: movieTableName,
            Key: {
                movieId: movieId
            },
        };
        console.log(`Finding movies associated with movieId: ${movieId}`);
        const response = await dynamoDbClient.get(getItemRequest).promise();

        if (response.Item) {
            return Movie.from(response.Item)
        }
        return null;
    }
}

module.exports = MovieRepository;
