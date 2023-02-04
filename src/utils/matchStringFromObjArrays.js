/* eslint-disable no-restricted-syntax */
const matchStringFromObjArrays = (arrOfObjs, propertyName, valueToBeChecked, id = '') => {
  let boolean = false;
  for (const obj of arrOfObjs) {
    if (obj[propertyName] === valueToBeChecked && obj.id !== id) {
      boolean = true;
      break;
    }
  }
  return (boolean);
};

export default matchStringFromObjArrays;
