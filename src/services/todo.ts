import { Todo } from "@/types/todo";
import axios, { AxiosError } from "axios";

export const createTodoAPI = async (todo: string) => {
  try {
    const response = await axios.post<Todo>(
      `/todos`,
      { todo },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (e) {
    alert((e as AxiosError<any>).response?.data.message);
  }
};
