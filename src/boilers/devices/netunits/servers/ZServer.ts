import {Frame} from "../../../types/frames/Frame";

export interface ZServer {
    send(frame: Frame): void;

    listenEvent(listen: Function): void;
}


