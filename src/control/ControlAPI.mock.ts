import {ControlBoilerResponse} from "./interfaces/ControlBoilerResponse";

export class MockControlAPI {
    public async token( username: string, password: string, grantType: string = "password" ): Promise<string> {
        return "ok";
    }

    public async GetBoilers( token: string ): Promise<Array<ControlBoilerResponse>> {
        return [{
                Id: 47244954416,
                CascadeId: null,
                BoilerName: 'Disney',
                PhoneNumber: '',
                USSDRequest: '',
                BoilerConnection: 0,
                Password: 171433,
                InternetConnection: true,
                LanConnection: false,
                GSMConnection: false,
                Type: 'LUX_X',
                Serial: 314160,
                EnableLog: true,
                ServiceView: true,
                Country: '',
                Region: '',
                City: ''
            }];
    }
}