import { HelloRequest, HelloResponse } from "./hello_pb.js"
import { HelloServiceClient } from "./hello_grpc_web_pb.js"

var client = new HelloServiceClient("http://localhost:8080")

var request = new HelloRequest()
request.setMessage("Dishar")

var stream = client.hello(request, {})
console.log("stream:", stream)
stream.on('data', function(response) {
    console.log("Response message:",response.getMessage());
  });
stream.on('status', function(status) {
    console.log("Status code:",status.code);
    console.log("Status details:",status.details);
    console.log("Status metadata:",status.metadata);
  });
stream.on('end', function(end) {
    // stream end signal
    console.log("Stream ended!")
    // // to close the stream
    stream.cancel()
    console.log("Stream closed!")
});
