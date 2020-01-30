const Properties = require("../../../src/movie-service/src/Properties");

const dynamoDbClient = Properties.dynamoDbClient();
const movieTableName = Properties.movieTableName();

class MovieFixture {

    static async deleteAll() {
        const movies = await this.findAll();
        for (let movie of movies) {
            await this._delete(movie)
        }
    }

    static async findAll() {
        const response = await dynamoDbClient.scan(
            {
                TableName: movieTableName
            }).promise();

        return response.Items
    }

    static async _delete(movie) {
        return await dynamoDbClient.delete({
            TableName: movieTableName,
            Key: {
                "movieId": movie.movieId
            },
        }).promise()
    }

    static async save(movie) {
        return dynamoDbClient.put({
            TableName: movieTableName,
            Item: {
                movieId: movie.movieId,
                name: movie.name,
            }
        }).promise();
    }
}

module.exports = MovieFixture;
