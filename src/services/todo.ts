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

export const getTodosAPI = async () => {
  try {
    const response = await axios.get<Todo[]>("/todos", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (e) {
    alert((e as AxiosError<any>).response?.data.message);
  }
};

export const deleteTodoAPI = async (id: number) => {
  try {
    const response = await axios.delete(`/todos/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (e) {
    alert((e as AxiosError<any>).response?.data.message);
  }
};

export const updateTodoAPI = async (
  id: number,
  todo: string,
  isCompleted: boolean
) => {
  try {
    const response = await axios.put<Todo>(
      `/todos/${id}`,
      { todo, isCompleted },
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
