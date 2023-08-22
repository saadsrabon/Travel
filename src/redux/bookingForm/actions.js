import { DATEFROM, DESTINATIONFROM, DESTINATIONTO, FLIGHTTYPECLASS, GUEST, SUBMIDTA } from "./actionType";

export const destinationFrom = (value) => {
    return {
        type: DESTINATIONFROM,
        payload: value,
    };
}

export const destinationTo = (value) => {    
    return {
        type: DESTINATIONTO,
        payload: value,
    };
}

export const dateFrom = (value) => {    
    return {
        type: DATEFROM,
        payload: value,
    };
}
export const guest = (value) => {    
    return {
        type: GUEST,
        payload: value,
    };
}

export const flightTypeClass = (value) => {    
    return {
        type: FLIGHTTYPECLASS,
        payload: value,
    };
}

export const submitData = (value) => {    
    return {
        type: SUBMIDTA,
        payload: value,
    };
}
export const reset =(value)=>{
    return {
        type:'reset',
        payload:value,
    }
}