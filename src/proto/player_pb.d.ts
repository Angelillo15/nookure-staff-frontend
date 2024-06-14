// package: com.nookure.staff.api.proto
// file: player.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class PlayerModel extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getUuid(): string;
  setUuid(value: string): void;

  hasLastlogin(): boolean;
  clearLastlogin(): void;
  getLastlogin(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastlogin(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasFirstlogin(): boolean;
  clearFirstlogin(): void;
  getFirstlogin(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirstlogin(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getLastip(): string;
  setLastip(value: string): void;

  getFirstip(): string;
  setFirstip(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerModel.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerModel): PlayerModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerModel;
  static deserializeBinaryFromReader(message: PlayerModel, reader: jspb.BinaryReader): PlayerModel;
}

export namespace PlayerModel {
  export type AsObject = {
    name: string,
    uuid: string,
    lastlogin?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    firstlogin?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastip: string,
    firstip: string,
  }
}

