import {NetUnit} from "./NetUnit";
import {Frame} from "../../types/frames/Frame";
import {Queue} from "queue-typescript";
import {ZServer} from "./servers/ZServer";

export class LanBoiler implements NetUnit {

    private interval: NodeJS.Timeout;

    private timeout = 1000;

    /**
     * Хранит исходящие фраймы в виде очереди
     * @protected
     */
    protected fOutGoingQueue: Queue<Frame> = new Queue();

    /**
     * Хранит входящие фраймы для обработки в виде очереди
     * @protected
     */
    protected fIncomingQueue: Queue<Frame> = new Queue();

    private _zServer: ZServer;

    constructor(zServer: ZServer) {
        this.interval = setInterval(() => this.tick(), this.timeout);
        this._zServer = zServer;
        this._zServer.listenEvent(this.listen);
    }

    send( frame: Frame ): void {
        this.fOutGoingQueue.enqueue(frame);
    }

    tick() {
        const frame = this.fOutGoingQueue.dequeue();
        if ( frame )
            this._zServer.send( frame )
    }

    listen(frame: Frame): void {

    }



}