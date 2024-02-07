import express from "express";
import {LanBoiler} from "../boilers/devices/netunits/LanBoiler";
import {ZServerMock} from "../boilers/devices/netunits/servers/ZServerMock";
import {MksBoiler} from "../boilers/mks";
import {u32} from "../boilers/types/u32";
import {ControlAPI} from "../control/ControlAPI";
import bodyParser from "body-parser";

export class Application {

    private app: express.Express;

    private _config: Application.Config;

    constructor(config: Application.Config) {
        this._config = config;

        this.app = express();
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(bodyParser.json());

    }

    public run() {

        const lan =  new LanBoiler(new ZServerMock());

        const mks = new MksBoiler(u32(303228), lan);
        // mks.auth(u32(1));

        const control = new ControlAPI();

        (async () => {
            try {
                const token = await control.token("testMobile", "testMobile999");
                const boilers = await control.GetBoilers( token );
                console.log(boilers);
            } catch (e) {

            }
        })();
    }

}