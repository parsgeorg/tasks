const buff = {
  sortDir: 0, // asc
  sortField: "id",
  fields: {
    id: "num",
    username: "string",
    email: "string",
    text: "string",
    status: "num"
  }
};

const sortStrings = (a, b) => {
  let sortDir = buff.sortDir;
  let sortField = buff.sortField;

  if (sortDir) {
    return b[sortField] - a[sortField];
  } else {
    return a[sortField] - b[sortField];
  }
};

const sortNumbers = (a, b) => {
  let sortDir = buff.sortDir;
  let sortField = buff.sortField;

  if (sortDir) {
    return ("" + b[sortField]).localeCompare(a[sortField]);
  } else {
    return ("" + a[sortField]).localeCompare(b[sortField]);
  }
};

// тут мы берем продукты из базы
const fetchProducts = items => {
  let sortField = buff.sortField;
  //console.log(items);
  // должен быть запрос в апишку, файл или куда там еще
  // let products = [
  //   { id: 1, text: "Product 1", status: 1 },
  //   { id: 2, text: "Product 2", status: 0 },
  //   { id: 3, text: "Product 3", status: 1 }
  // ];

  if ("text" === buff.fields[sortField]) items.sort(sortStrings);
  else items.sort(sortNumbers);

  return items;
};

const setSortField = () => {
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

// это выполняется когда кликам на тх в таблице
const handleThClick = ev => {
  let sortField = buff.sortField;
  let sortDir = buff.sortDir;

  if (ev.currentTarget.dataset.field === sortField) {
    sortDir = !sortDir;
  } else {
    sortField = ev.currentTarget.dataset.field;
    sortDir = !sortDir;
  }

  // запрашиваем продукты заново с новыми сортировками
  buff.sortField = sortField;
  buff.sortDir = sortDir;
  let products = fetchProducts();
  return products;
};

export { fetchProducts, setSortField, handleThClick };
