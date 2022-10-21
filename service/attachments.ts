import { AttachmentsServiceClient } from "../grpc/AttachmentsServiceClientPb";
import { AttachmentsRequest } from "../grpc/attachments_pb";
const client = new AttachmentsServiceClient("http://localhost:8080");
const request = new AttachmentsRequest();
export const findAll = (id: number) => {
	request.setId(id);
    const jwtToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjYxOTY0NTksImV4cCI6MTY2NjI4Mjg1OSwiaXNzIjoiZGVtbzMifQ.YeJWh2c3q5BSUUNx57EtrWX5vmP5hJ3gx2hAuyGCyjc';
	client.findAll(request, {}, (err, response) => {
		// console.log(request.getName());
		console.log("Error:");
		console.log(err);
		console.log(`id: ${request.getId()}`);
		console.log("Response:");
		console.log(response.toObject());
	});
};
