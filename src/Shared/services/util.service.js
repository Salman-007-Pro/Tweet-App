import _ from 'lodash';

export const utilService = {
  getValue,
  isEmpty,
  createDynamicUrl,
  toPascalCase,
  delay,
};

function getValue(...param) {
  return _.get(...param);
}

function isEmpty(value) {
  return _.isEmpty(value);
}

function createDynamicUrl(dynamicUrl, object) {
  for (const key in object) {
    dynamicUrl = dynamicUrl.replace(`{${key}}`, object[key]);
  }
  return dynamicUrl;
}

function toPascalCase(s) {
  if (!s) {
    return '';
  }
  s = s.replace(/\w+/g, function (w) {
    return w[0].toUpperCase() + w.slice(1).toLowerCase();
  });
  return s;
}
const delay = ms => new Promise(res => setTimeout(res, ms));

export default utilService;
