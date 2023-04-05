import { Form } from "@/types/form";
import axios, { AxiosError } from "axios";

export const SignUpAPI = async (form: Form) => {
  try {
    const response = await axios.post("/auth/signup", form, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (e) {
    alert((e as AxiosError<any>).response?.data.message);
  }
};
