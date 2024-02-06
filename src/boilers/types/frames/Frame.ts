import {u16, U16} from "../u16";
import {U8} from "../u8";

export interface Frame {

    // Desc: {
    //     Auth: u16(0x0001),
    //
    // }

    setPayload(payload: U8[]): void;

    toHex(): string;

    toBuffer(): Buffer;

}