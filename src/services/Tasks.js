import axios from "axios";
import crypto from "crypto";
import $ from "jquery";
import { BASE_API } from "../config/config";
export const getToken = async objectAuth => {
  axios.post(`${BASE_API}login`, objectAuth).then(function(response) {
    console.log("saved successfully");
  });
};

export const getTasks = async () => {
  const url =
    `${BASE_API}?developer='Georgiy'`;
  const body = await axios.get(url);
  return body.data.message.tasks;
};

export const fileUpload = async () => {
  let countFiles = $("#fileUpload")[0].files.length;
  let imgPath = $("#fileUpload")[0].value;

  let extn = imgPath.substring(imgPath.lastIndexOf(".") + 1).toLowerCase();
  let image_holder = $("#image-holder");
  image_holder.empty();
  if (extn === "gif" || extn === "png" || extn === "jpg" || extn === "jpeg") {
    if (typeof FileReader != "undefined") {
      for (let i = 0; i < countFiles; i++) {
        let reader = new FileReader();
        reader.onload = function(e) {
          $("<img />", {
            src: e.target.result,
            class: "thumb-image",
            height: 320,
            width: 240
          }).appendTo(image_holder);
        };
        image_holder.show();
        reader.readAsDataURL($("#fileUpload")[0].files[i]);
      }
    } else {
      alert("This browser does not support FileReader.");
    }
  }
};

export const addTask = async task => {
  const { username, email, text } = task;
  let form = new FormData();
  form.append("username", username);
  form.append("email", email);
  form.append("text", text);
  form.append("image", $("#fileUpload")[0].files[0]);

  const url =
    `${BASE_API}create?developer='Georgiy'`;
  const body = await axios.post(url, form);

  return body.data.message;
};

export const editTask = async ({ id, status, text = "" }) => {
  const token = encodeURIComponent("beejee");

  const hash = data =>
    crypto
      .createHash("md5")
      .update(data)
      .digest("hex");

  let tempQ = "";

  if (status) tempQ += `status=${encodeURIComponent(status)}&`;
  if (text) tempQ += `text=${encodeURIComponent(text)}&`;

  const signature = hash(`${tempQ}token=${token}`);

  const url = `${BASE_API}edit/${id}?developer='Georgiy'`;

  const form = new FormData();
  status && form.append("status", status);
  text && form.append("text", text);
  form.append("signature", signature);
  form.append("token", token);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  };

  const { data } = await axios.post(url, form, config);

  return !!data.status;
};
