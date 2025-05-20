import axios from "axios";

import instance from "./axiosInstance";

export const login = async ({ email, password }) => {
  console.log("Login API 호출");
  console.log("Email :" + email);
  console.log("Password :" + password);
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

export const signup = async ({ email, password, name }) => {
  console.log("Signup API 호출");
  console.log("Email :" + email);
  console.log("Password :" + password);
  console.log("Name :" + name);
  try {
    const response = await instance.post(
      "/sign-up",
      {
        email,
        password,
        name,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const addInterest = async ({ userId, keyword }) => {
  console.log("Add Interest API 호출");
  console.log("UserId :" + userId);
  console.log("Name :" + keyword);
  try {
    const response = await instance.post(
      "/interest",
      {
        userId,
        name: keyword,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const deleteInterest = async ({ userId, keyword }) => {
  console.log("Delete Interest API 호출");
  console.log("UserId :" + userId);
  console.log("Name :" + keyword);
  try {
    const response = await instance.delete(
      "/interest",
      {
        userId,
        name: keyword,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
