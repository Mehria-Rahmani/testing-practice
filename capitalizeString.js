const capitalize = (string) => {
  if (typeof string === "string")
    return string[0].toUpperCase() + string.substring(1);
};

export default capitalize;
