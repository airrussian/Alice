import net from 'net';
import {u8, U8} from "./types/u8";
import {NetUnit} from "./devices/netunits/NetUnit";
import {AuthFrame} from "./types/frames/AuthFrame";
import {Frame} from "./types/frames/Frame";
import {U32} from "./types/u32";
import {U16, u16} from "./types/u16";

export class MksBoiler {

    private type: U16 = u16(0x18);

    private netUnit: NetUnit;

    private isPower: boolean = false;

    private readonly serialNumber: U32;

    constructor(serialNumber: U32, netUnit: NetUnit) {
        this.serialNumber = serialNumber;
        this.netUnit = netUnit;
    }

    auth( password: U32 ) {
        const frame: Frame = new AuthFrame( this.type, this.serialNumber, password)
        this.netUnit.send( frame );
    }

    powerSwitch() {
        // const frame: Frame = new CommandFrame( command.request.set.onoff );
        // this.netUnit.send( frame );
    }

    powerUp() {
        // if ( this.isPower ) throw new Error("Котел включен");
        // const frame: Frame = new CommandFrame( command.request.set.onoff );
        // this.netUnit.send( frame );
    }

    powerDown() {
        // if ( this.isPower )
        //     const frame: Frame = new CommandFrame( command.request.set.onoff );
        // const frame: Frame = new CommandFrame( command.request.set.onoff );
        // this.netUnit.send( frame );
    }


}