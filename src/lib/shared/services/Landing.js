import remove from "lodash/remove";
import {doPost} from './Api';


export default class RequestLanding {
  static async onSubmitForm(payload) {
    const {firstName, lastName, phone} = payload;
    const form = {...payload, name: `${firstName  } ${ lastName}`, phone: phone.toString()};
    remove(form,"firstName");
    remove(form, "lastName");
    const response = await doPost(`${process.env.NEXT_PUBLIC_APP_BACKEND_CMS}Contact`, form);
    return response.data;
  }

}
