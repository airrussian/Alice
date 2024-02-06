import {ZFrame} from "./ZFrame";
import {u16, U16} from "../u16";
import {U32} from "../u32";

export class AuthFrame extends ZFrame {

    constructor(typeDevice: U16, serialNumber: U32, password: U32) {
        super(u16(1), u16(1));
    }

}