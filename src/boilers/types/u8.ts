import {Z} from "./z";

export class U8 extends Z {

    protected _value: Z[] = new Array<Z>(1);

    constructor(v = 0) {
        super();
        this.set(v);
    }

    set value(value: number) {
        for (let i = 0; i < this._value.length; i++)
            this._value[i] = u8((value >>> (8 * i)) & 0xff);
    }
}

export const u8 = (v = 0) => new U8(v);