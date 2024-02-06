import {Frame} from "../../../types/frames/Frame";
import net from "net";
import {ZServer} from "./ZServer";

export class ZServerControl implements ZServer {

    private _socket: net.Socket;

    private _listeners: Array<Function> = [];

    constructor(host: string = "control.zota.ru", port: number = 1977 ) {
        this._socket = net.connect({host: host, port: port}, () => {
            this._socket.on("data", data => this.notifyListeners(data));
        });
    }

    send(frame: Frame): void {
        this._socket.write( frame.toBuffer() );
    }

    notifyListeners( data ) {
        this._listeners.forEach( listener => listener( data ));
    }

    listenEvent( listener: Function ) {
        this._listeners.push( listener );
    }
}