import {ControlBoilerResponse} from "./ControlBoilerResponse";

export interface ControlGetBoilersResponse {
    "response": Object,
    "selectedType": string,
    "boilers": Array<ControlBoilerResponse>
}