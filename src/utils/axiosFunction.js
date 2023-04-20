import axios from "axios";

export const addData = async (data) => {
  await axios.post("http://localhost:8080/addItem", data);
  console.log(data);
};

export const deleteData = async (id) => {
  console.log(`http://localhost:8080/deleteMapping/${id}`);
  await axios.delete(`http://localhost:8080/deleteMapping/${id}`);
};

export const getData = async () => {
  let x = await axios.get("http://localhost:8080/getItem");
  console.log(x);
  return x.data;
};

export const sendFormData = async (data) => {
  await axios.post("http://localhost:8080/saveContactUs", data);
};

export const getContectUsData = async () => {
  let x = await axios.get("http://localhost:8080/getContactUs");
  return x.data;
};

export const sendReply = async (data) => {
  await axios.put("http://localhost:8080/getReply", data);
};
