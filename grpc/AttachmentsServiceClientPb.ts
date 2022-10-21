/**
 * @fileoverview gRPC-Web generated client stub for attachments
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.1
// source: attachments.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as attachments_pb from './attachments_pb';


export class AttachmentsServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorFindAll = new grpcWeb.MethodDescriptor(
    '/attachments.AttachmentsService/FindAll',
    grpcWeb.MethodType.UNARY,
    attachments_pb.AttachmentsRequest,
    attachments_pb.AttachmentsResponse,
    (request: attachments_pb.AttachmentsRequest) => {
      return request.serializeBinary();
    },
    attachments_pb.AttachmentsResponse.deserializeBinary
  );

  findAll(
    request: attachments_pb.AttachmentsRequest,
    metadata: grpcWeb.Metadata | null): Promise<attachments_pb.AttachmentsResponse>;

  findAll(
    request: attachments_pb.AttachmentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: attachments_pb.AttachmentsResponse) => void): grpcWeb.ClientReadableStream<attachments_pb.AttachmentsResponse>;

  findAll(
    request: attachments_pb.AttachmentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: attachments_pb.AttachmentsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/attachments.AttachmentsService/FindAll',
        request,
        metadata || {},
        this.methodDescriptorFindAll,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/attachments.AttachmentsService/FindAll',
    request,
    metadata || {},
    this.methodDescriptorFindAll);
  }

}

