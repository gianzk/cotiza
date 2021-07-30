export const verifyField = (value) => {
  return value.toString().length > 0;
};

export const alertMessage = (message) => {
  alert(message);
};

export const statusEvaluate = (id, info) => {
  switch (id) {
    case "tire":
      return info.productTire;
    case "shock":
      return info.productShock;
    case "accident":
      return info.productAccident;
    default:
      return false;
  }
};
