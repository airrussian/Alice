import {
    Request as ExpressRequest,
    Response as ExpressResponse,
} from "express";

export default abstract class Controller {
    private _response?: ExpressResponse;
    private _request?: ExpressRequest;
    private _containerDI: Routing.ContainerDI;

    constructor(containerDI: Routing.ContainerDI = {}) {
        this._containerDI = containerDI;
    }
}