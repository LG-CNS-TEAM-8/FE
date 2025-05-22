import { jwtDecode } from "jwt-decode";

import instance from "./axiosInstance";

// UNAUTHORIZED APIS

export const login = async ({ email, password }) => {
  try {
    const response = await instance.post(
      "/login",
      {
        email,
        password,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const signup = async ({ email, password, name, interests }) => {
  try {
    const response = await instance.post(
      "/sign-up",
      {
        email,
        password,
        name,
        interests,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const addInterest = async ({ userId, keywords }) => {
  try {
    const response = await instance.post(
      "/interest",
      {
        userId,
        name: keywords,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const deleteInterest = async ({ userId, removeKeyword }) => {
  try {
    const response = await instance.delete(`/interest/delete/${userId}`, {
      data: {
        name: removeKeyword,
      },
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// AUTHORIZED APIS
export const getMe = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const decode = jwtDecode(accessToken);

    const response = await instance.get(`/user/${decode.userId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response ? error.response.data : error;
  }
};

export const editUser = async ({ name, email, interests }) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await instance.put(
      `/user`,
      { name, email, interests },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response ? error.response.data : error;
  }
};

export const getUserFavorites = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const decode = jwtDecode(accessToken);

    const response = await instance.get(`/${decode.userId}/favorites`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response ? error.response.data : error;
  }
};

export const logout = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    const accessToken = localStorage.getItem("accessToken");

    const response = await instance.delete("/logout", {
      headers: {
        refreshToken: `${refreshToken}`,
        Authorization: `Bearer ${accessToken}`,
      },
    });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response ? error.response.data : error;
  }
};

export const deleteAccount = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const response = await instance.delete("/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response ? error.response.data : error;
  }
};

export const getUserInterests = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const decode = jwtDecode(accessToken);

    const response = await instance.get(`/interest/${decode.userId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response ? error.response.data : error;
  }
};
