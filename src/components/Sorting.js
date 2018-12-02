export const buff = {
  sortDir: 0, // asc
  sortField: "id",
  fields: {
    id: "num",
    username: "string",
    email: "string",
    text: "string",
    status: "string"
  }
};

export const sortNumbers = (a, b) => {
  let sortDir = buff.sortDir;
  let sortField = buff.sortField;

  if (sortDir) {
    return ("" + b[sortField]).localeCompare(a[sortField]);
  } else {
    return ("" + a[sortField]).localeCompare(b[sortField]);
  }
};

export const sortStrings = (a, b) => {
  let sortDir = buff.sortDir;
  let sortField = buff.sortField;

  if (sortDir) {
    return b[sortField] - a[sortField];
  } else {
    return a[sortField] - b[sortField];
  }
};

export const setSortDirection = () => {
  let sort = {
    id: null,
    username: null,
    email: null,
    text: null,
    status: null
  };

  sort[buff.sortField] = buff.sortDir ? "DESC" : "ASC";
  return sort;
};
