import {
    GET_CONTACTS,
    FAIL_CONTACTS,
    LOAD_CONTACTS,
} from "./../actionsType/actionstype";
import axios from "axios";
//getall
export const getContact = () => async (dispatch) => {
    dispatch({ type: LOAD_CONTACTS });
    try {
        let result = await axios.get("/api/contacts");
        dispatch({ type: GET_CONTACTS, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response });
    }
};
//postcontact
export const postContact = (newContact) => async (dispatch) => {
    try {
        await axios.post("/api/contacts", newContact);
        dispatch(getContact());
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response });
    }
};
//Deletecontact
export const deleteContact = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/contacts/${id}`);
        dispatch(getContact());
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response });
    }
};
//  EDIT
export const editContact = (id, newContact) => async (dispatch) => {
    try {
        await axios.put(`/api/contacts/${id}`, newContact);
        dispatch(getContact());
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response });
    }
};
