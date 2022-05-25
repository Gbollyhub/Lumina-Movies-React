import axios from "axios";

export async function GET(path) {
    const url = `${process.env.REACT_APP_API_KEY}${path}`
    try {
      const response = await axios.get(url, {headers: {'Content-Type': 'application/json'}});
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  export async function GET_WITH_TOKEN(path,token) {
    const url = `${process.env.REACT_APP_API_KEY}${path}`
    try {
      const response = await axios.get(url, {headers: {'Content-Type': 'application/json', 'Authorization':  `Bearer ${token}`}});
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  export async function POST(data, path) {
    const url = `${process.env.REACT_APP_API_KEY}${path}`
    try {
      const response = await axios.post(url, data, {headers: {'Content-Type': 'application/json'}});
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  export async function POST_WITH_TOKEN(data, path,token) {
    const url = `${process.env.REACT_APP_API_KEY}${path}`
    try {
      const response = await axios.post(url, data, {headers: {'Content-Type': 'application/json', 'Authorization':  `Bearer ${token}`}});
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  export async function PATCH(data, path) {
    const url = `${process.env.REACT_APP_API_KEY}${path}`
    try {
      const response = await axios.patch(url, data, {headers: {'Content-Type': 'application/json'}});
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

 
  export async function PATCH_WITH_TOKEN(data, path,token) {
    const url = `${process.env.REACT_APP_API_KEY}${path}`
    try {
      const response = await axios.patch(url, data, {headers: {'Content-Type': 'application/json', 'Authorization':  `Bearer ${token}`}});
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

