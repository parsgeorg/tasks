export const validateAlpabetical = value => {
  const alfa = new RegExp(/^[a-z]+$/i);

  return alfa.test(value) ? "" : "Только латинские буквы!";
};

export const validateMaxLength = maxlength => value => {
  return value.length < maxlength ? "" : "Не более " + maxlength + "символов!";
};

export const validateRequired = value => {
  return value.length > 0 ? "" : "Поле обязательно к заполнению!";
};

export const validateEmail = value => {
  const email = /^\w+@\w+\.\w{2,4}$/i;
  return email.test(value) ? "" : "Email невалидный!";
};

export const validateImg = () => {
  const img = document.getElementById("fileUpload").files[0];

  let resCheck =
    img.name.includes(".jpg") || img.name.includes(".png")
      ? // (img && img.name.includes(".jpg")) ||
        // (img && img.name.includes(".png")) ||
        // (img && img.name.includes(".gif"))
        ""
      : "Загружаемая картинка должна быть одного из трех форматов - jpg, gif или png";

  return resCheck;
};
