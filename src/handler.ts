import {APIGatewayEvent, APIGatewayProxyResult} from "aws-lambda";

export const handle = async (event: Partial<APIGatewayEvent>)=>{
    return{
        statusCode: 200,
        body:""
    }
}
