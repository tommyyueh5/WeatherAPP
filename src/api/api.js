import {
    requestService
} from "./request.js";

export function GetWeather() {

    return requestService({
        url: 'F-D0047-091',
        method: 'get',
        params: {
            Authorization: 'CWB-D8B2A879-4B02-4978-99C2-40819A1F00BA',
            format:'JSON',
            elementName: 'MinT,MaxT'
        }
    })
}
