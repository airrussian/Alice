import {Z} from "./z";
import {U8} from "./u8";

export class U32 extends Z {

    protected _value: U8[] = new Array<U8>(4);

    constructor(v = 0) {
        super();
        this.set(v);
    }
}

export const u32 = (v = 0) => new U32(v);