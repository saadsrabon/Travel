

import { createStore } from "redux";
import bookingFormReducer from "./bookingForm/bookingFormReducer";

const store = createStore(bookingFormReducer);

export default store;

