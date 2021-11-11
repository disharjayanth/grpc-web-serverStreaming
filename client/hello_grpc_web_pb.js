/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./hello_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.HelloServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.HelloServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.HelloRequest,
 *   !proto.HelloResponse>}
 */
const methodDescriptor_HelloService_Hello = new grpc.web.MethodDescriptor(
  '/HelloService/Hello',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.HelloRequest,
  proto.HelloResponse,
  /**
   * @param {!proto.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.HelloResponse.deserializeBinary
);


/**
 * @param {!proto.HelloRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.HelloResponse>}
 *     The XHR Node Readable Stream
 */
proto.HelloServiceClient.prototype.hello =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/HelloService/Hello',
      request,
      metadata || {},
      methodDescriptor_HelloService_Hello);
};


/**
 * @param {!proto.HelloRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.HelloResponse>}
 *     The XHR Node Readable Stream
 */
proto.HelloServicePromiseClient.prototype.hello =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/HelloService/Hello',
      request,
      metadata || {},
      methodDescriptor_HelloService_Hello);
};


module.exports = proto;

