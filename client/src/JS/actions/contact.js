import {
    GET_CONTACTS,
    LOAD_CONTACTS,
    FAIL_CONTACTS,
} from "../actionsTypes/contact";
 import axios from "axios";
 export const getContact = () => async (dispatch)=> {
    dispatch({type:LOAD_CONTACTS})
    try {
         let result =await axios.get("/api/contacts");
         dispatch({type:GET_CONTACTS, payload:result.data});
         
     } catch (error) {
         dispatch({type:FAIL_CONTACTS, payload:error.response})
         
     }

 } 
