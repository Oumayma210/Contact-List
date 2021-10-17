import {
    GET_CONTACTS,
    LOAD_CONTACTS,
    FAIL_CONTACTS,
} from "../actionsTypes/contact";
//initial state
const initialState = {
    listContacts: [],
    error: null,
    load: false, //
};
//pure function
const contactReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_CONTACTS:
            return { ...state, load: true };
        case GET_CONTACTS:
            return {
                ...state,
                load: false,
                listContacts: payload.listContacts,
            };
        case FAIL_CONTACTS:
            return { ...state, load: false, error: payload };

        default:
            return state;
    }
};
export default contactReducer;
