import axios from "axios";

export const getTimelinePost = async () => {
  let getUserId = localStorage.getItem("userId");
  try {
    const result = await axios.get(
      `http://localhost:8000/posts/timeline/${getUserId}`
    );
    return result;
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
