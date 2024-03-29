export interface ControlBoilerResponse {
    "Id": number,
    "CascadeId": boolean | null,
    "BoilerName": string,
    "PhoneNumber": string,
    "USSDRequest": string,
    "BoilerConnection": number,
    "Password": number,
    "InternetConnection": boolean,
    "LanConnection": boolean,
    "GSMConnection": boolean,
    "Type": string,
    "Serial": number,
    "EnableLog": boolean,
    "ServiceView": boolean,
    "Country": string,
    "Region": string,
    "City": string
}