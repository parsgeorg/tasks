import axios from "axios";
import crypto from "crypto";
import $ from "jquery";
import { BASE_API } from "../config/config";
//import "../js/jquery.tablesorter.js";

export const getToken = async objectAuth => {
  axios.post(`${BASE_API}login`, objectAuth).then(function(response) {
    console.log("saved successfully");
  });
};

export const getTasks = async () => {
  const url =
    "https://uxcandy.com/~shapoval/test-task-backend/?developer='Georgiy'";
  const body = await axios.get(url);
  //console.log(body.data.message.tasks);
  return body.data.message.tasks;
};

export const getSortedTable = () => {};

export const fileUpload = async () => {
  var countFiles = $("#fileUpload")[0].files.length;
  var imgPath = $("#fileUpload")[0].value; //C:\fakepath\nP0qwBiDeP4.jpg

  var extn = imgPath.substring(imgPath.lastIndexOf(".") + 1).toLowerCase();
  var image_holder = $("#image-holder");
  image_holder.empty();
  if (extn === "gif" || extn === "png" || extn === "jpg" || extn === "jpeg") {
    $("#save").prop("disabled", false);
    if (typeof FileReader != "undefined") {
      //loop for each file selected for uploaded.
      for (var i = 0; i < countFiles; i++) {
        var reader = new FileReader();
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
  } else {
    if (imgPath.length > 0) {
      alert("Загрузите пожалуйста файл с расширением jpeg/pmg/gif!" + imgPath);
      $("#save").prop("disabled", true);
    } else {
      $("#save").prop("disabled", false);
    }
  }
};

export const addTask = async task => {
  //$(document).ready(function() {
  const { username, email, text } = task;
  let form = new FormData();
  form.append("username", username);
  form.append("email", email);
  form.append("text", text);
  form.append("image", $("#fileUpload")[0].files[0]); //files[0] instead value
  //"https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508840871_6.jpg"

  const url =
    "https://uxcandy.com/~shapoval/test-task-backend/create?developer='Georgiy'";
  const body = await axios.post(url, form);

  return body.data.message;
};

export const editTask = async ({ id, status, text = "" }) => {
  //status = +status;
  const token = encodeURIComponent("beejee");
  // console.log(id);
  // console.log(status);
  // console.log(text);
  const hash = data =>
    crypto
      .createHash("md5")
      .update(data)
      .digest("hex");

  let tempQ = "";

  if (status) tempQ += `status=${encodeURIComponent(status)}&`;
  if (text) tempQ += `text=${encodeURIComponent(text)}&`;

  const signature = hash(`${tempQ}token=${token}`);

  const url = `https://uxcandy.com/~shapoval/test-task-backend/edit/${id}?developer='Georgiy'`;

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
