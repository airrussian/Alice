import express from "express";
import {MksBoiler} from "./boilers/mks";
import {U16} from "./boilers/types/u16";
import {LanBoiler} from "./boilers/devices/netunits/LanBoiler";
import {u32, U32} from "./boilers/types/u32";
import {ZServerMock} from "./boilers/devices/netunits/servers/ZServerMock";
import {ControlAPI} from "./control/ControlAPI";

const app = express();

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



