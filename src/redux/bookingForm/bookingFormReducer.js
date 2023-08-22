import { DESTINATIONFROM, DESTINATIONTO, DATEFROM, GUEST, FLIGHTTYPECLASS, SUBMIDTA } from './actionType';

const initialState = {
    destinationFrom: '',
    destinationTo: '',
    dateFrom: '',
    guest:'',
    flightTypeClass: '',
    bookings: []
  };

export default function bookingFormReducer(state = initialState, action) {
    switch (action.type) {
        case DESTINATIONFROM:
            return {
                ...state,
                destinationFrom: action.payload,
            };
        case DESTINATIONTO:
            return {
                ...state,
                destinationTo: action.payload,
            };
        case DATEFROM:
            return {
                ...state,
                dateFrom: action.payload,
            };
        case GUEST:
            return {
                ...state,
                guest: action.payload,
            };
        case FLIGHTTYPECLASS:
            return {
                ...state,
                flightTypeClass: action.payload,
            };
        case SUBMIDTA:
            return {
                ...state,
                bookings:[...state.bookings, action.payload]
            };
            case 'reset':
                const updateFlight = state.bookings.filter((flight) => flight.id !== action.payload);
                return {
                    ...state,
                    bookings: updateFlight,
                }
        default:
            return state;
    }


}