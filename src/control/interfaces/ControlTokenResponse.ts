import e from "express";

export interface ControlTokenResponse {
    access_token: string,
    token_type: string,
    expires_in: number,
    userName: string,
    ".issued": string,
    ".expires": string
}