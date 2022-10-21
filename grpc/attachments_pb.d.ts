import * as jspb from 'google-protobuf'



export class AttachmentsRequest extends jspb.Message {
  getId(): number;
  setId(value: number): AttachmentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachmentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AttachmentsRequest): AttachmentsRequest.AsObject;
  static serializeBinaryToWriter(message: AttachmentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachmentsRequest;
  static deserializeBinaryFromReader(message: AttachmentsRequest, reader: jspb.BinaryReader): AttachmentsRequest;
}

export namespace AttachmentsRequest {
  export type AsObject = {
    id: number,
  }
}

export class Attachment extends jspb.Message {
  getId(): number;
  setId(value: number): Attachment;

  getAttachmenturl(): string;
  setAttachmenturl(value: string): Attachment;

  getDashboardid(): number;
  setDashboardid(value: number): Attachment;

  getUserid(): number;
  setUserid(value: number): Attachment;

  getUsername(): string;
  setUsername(value: string): Attachment;

  getServicename(): string;
  setServicename(value: string): Attachment;

  getCreatedat(): string;
  setCreatedat(value: string): Attachment;

  getUpdatedat(): string;
  setUpdatedat(value: string): Attachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Attachment.AsObject;
  static toObject(includeInstance: boolean, msg: Attachment): Attachment.AsObject;
  static serializeBinaryToWriter(message: Attachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Attachment;
  static deserializeBinaryFromReader(message: Attachment, reader: jspb.BinaryReader): Attachment;
}

export namespace Attachment {
  export type AsObject = {
    id: number,
    attachmenturl: string,
    dashboardid: number,
    userid: number,
    username: string,
    servicename: string,
    createdat: string,
    updatedat: string,
  }
}

export class AttachmentsResponse extends jspb.Message {
  getAttachmentsList(): Array<Attachment>;
  setAttachmentsList(value: Array<Attachment>): AttachmentsResponse;
  clearAttachmentsList(): AttachmentsResponse;
  addAttachments(value?: Attachment, index?: number): Attachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachmentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AttachmentsResponse): AttachmentsResponse.AsObject;
  static serializeBinaryToWriter(message: AttachmentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachmentsResponse;
  static deserializeBinaryFromReader(message: AttachmentsResponse, reader: jspb.BinaryReader): AttachmentsResponse;
}

export namespace AttachmentsResponse {
  export type AsObject = {
    attachmentsList: Array<Attachment.AsObject>,
  }
}

