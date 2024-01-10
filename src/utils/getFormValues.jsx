const getFormValues = (form) => {
  const values = {};
  const formElement = document.querySelector(` .${form}`);

  const formDate = new FormData(formElement);

  for (let [key, value] of formDate) {
    Object.assign(values, { [key]: value });
  }

  return values;
};

export default getFormValues;
