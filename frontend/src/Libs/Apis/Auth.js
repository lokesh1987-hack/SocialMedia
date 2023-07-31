import axios from "axios";

export const login = async (data) => {
  try {
    const result = await axios.post("http://localhost:8000/auth/login", data);
    return result.data;
  } catch (err) {
    console.log(err);
  }
};

export const register = async (data) => {
  try {
    const result = await axios.post(
      "http://localhost:8000/auth/register",
      data
    );
    return result;
  } catch (err) {
    console.log(err);
  }
};
