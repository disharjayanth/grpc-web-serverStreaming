package main

import (
	"fmt"
	"grpcWebServerStreaming/hellopb"
	"log"
	"net"
	"strconv"
	"time"

	"google.golang.org/grpc"
)

type server struct {
	hellopb.UnimplementedHelloServiceServer
}

func (s *server) Hello(req *hellopb.HelloRequest, stream hellopb.HelloService_HelloServer) error {
	fmt.Println("Request:", req)
	message := req.GetMessage()

	for i := 1; i <= 10; i++ {
		res := &hellopb.HelloResponse{
			Message: "Response from server " + message + " " + strconv.Itoa(i),
		}

		if err := stream.Send(res); err != nil {
			log.Fatalf("Error sending response stream to client: %v", err)
		}

		time.Sleep(1 * time.Second)
	}
	return nil
}

func main() {
	lis, err := net.Listen("tcp", "localhost:9090")
	if err != nil {
		log.Fatalf("Error creating tcp listener:", err)
	}

	s := grpc.NewServer()

	hellopb.RegisterHelloServiceServer(s, &server{})

	log.Println("Server listening at port 9090")
	if err = s.Serve(lis); err != nil {
		log.Fatalf("Error listening to server @port:9090", err)
	}
}
