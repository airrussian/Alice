import {Frame} from "../../../types/frames/Frame";
import {ZServer} from "./ZServer";

export class ZServerMock implements ZServer {

    private _listeners: Array<Function> = [];

    send(frame: Frame) {
        console.log("TO ZSERVER:", frame);
    }

    listenEvent( listener: Function ) {
        this._listeners.push( listener );
    }
}