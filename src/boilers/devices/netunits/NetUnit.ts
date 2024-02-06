import {Frame} from "../../types/frames/Frame";

export interface NetUnit {

    send( frame: Frame ): void;

    listen( frame: Frame ): void;

}