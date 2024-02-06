import fetch from "node-fetch";
import {ControlBoilerResponse} from "./interfaces/ControlBoilerResponse";
import {ControlGetBoilersResponse} from "./interfaces/ControlGetBoilersResponse";
import {ControlTokenResponse} from "./interfaces/ControlTokenResponse";

export class ControlAPI {

    private host = "http://control.zota.ru:81";

    public async token( username: string, password: string, grantType: string = "password" ): Promise<string> {

        const url = "/token";

        const body = new URLSearchParams();
        body.append("username", username);
        body.append("password", password);
        body.append("grant_type", grantType);

        const response = await fetch(this.host + url, {
            method: "POST",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            body
        });

        if (!response.ok) throw new Error(`Ошибка при попытке получение токена авторизации на ${url}`);

        const res:ControlTokenResponse = await response.json();
        return res.access_token;
    }

    public async GetBoilers( token: string ): Promise<Array<ControlBoilerResponse>> {
        const url = "/api/Boilers/GetBoilers";
        const response = await fetch(this.host + url, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}`},
        });
        if ( !response.ok ) throw new Error("Ошибка получение списка котлов");
        const result: ControlGetBoilersResponse = await response.json();
        return result.boilers;
    }

    public async DeleteBoiler( token: string, type: string, serial: string, password: string ): Promise<string> {
        const url = "/api/Boilers/Delete";
        const response = await fetch(this.host + url, {
            method: "POST",
            headers: { Authorization: `Bearer ${token}`},
        });
        if ( !response.ok ) throw new Error("Ошибка получение списка котлов");
        return "ok";
    }

}