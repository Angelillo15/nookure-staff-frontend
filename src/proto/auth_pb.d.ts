// package: com.nookure.staff.api.proto
// file: auth.proto

import * as jspb from "google-protobuf";

export class AuthRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getOtp(): string;
  setOtp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthRequest): AuthRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthRequest;
  static deserializeBinaryFromReader(message: AuthRequest, reader: jspb.BinaryReader): AuthRequest;
}

export namespace AuthRequest {
  export type AsObject = {
    username: string,
    otp: string,
  }
}

export class AuthResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getExpired(): boolean;
  setExpired(value: boolean): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasToken(): boolean;
  clearToken(): void;
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthResponse): AuthResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthResponse;
  static deserializeBinaryFromReader(message: AuthResponse, reader: jspb.BinaryReader): AuthResponse;
}

export namespace AuthResponse {
  export type AsObject = {
    success: boolean,
    expired: boolean,
    message: string,
    token: string,
  }
}

