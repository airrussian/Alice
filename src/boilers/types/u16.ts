import {Z} from "./z";
import {u8, U8} from "./u8";

export class U16 extends Z {

    protected _value: U8[] = new Array<U8>(2);

    constructor(v: number = 0) {
        super();
        this.value = v;
    }

    set value(value: number) {
        for (let i = 0; i < this._value.length; i++)
            this._value[i] = u8((value >>> (8 * i)) & 0xff);
    }

    get value(): number {
        return 0;
    }
}

export const u16 = (v: number = 0) => new U16(v);