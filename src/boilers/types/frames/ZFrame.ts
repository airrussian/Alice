import {Frame} from "./Frame";
import {u16, U16} from "../u16";
import {U8} from "../u8";

export class ZFrame implements Frame {

    header: U16;

    opcode: U16;

    length: U16 = u16(0);

    payload: U8[] = [];

    constructor(header: U16, opcode: U16) {
        this.header = header;
        this.opcode = opcode;
    }

    setPayload(payload: U8[]): void {
        this.payload = payload;
        this.length = u16(this.payload.length);
    }

    toHex(): string {
        return "";
    }

    toBuffer(): Buffer {
        return Buffer.from([
            ...this.header.toBytes(),
            ...this.opcode.toBytes(),
            ...this.length.toBytes(),
            ...this.payload.map(u => u.get())
        ]);
    }



}