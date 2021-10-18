export const REGEX_CONSTANT = {
  PASSWORD_PATTERN: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9]).{8,}$/,
};

export const ERROR_MESSAGES = {
  REQUIRED_EMAIL: 'Email is Required',
  REQUIRED_PASSWORD: 'Password is required',
  INVALID_PASSWORD: 'Invalid Password format',
  INVALID_EMAIL: 'Please enter a valid Email Address.',
  REQUIRED_POST: 'Post is Required',
};

export const APP_NAV = {
  LOGIN: 'login_screen',
  DASHBOARD: 'dashboard_screen',
  POST: 'post_screen',
  PROFILE: 'profile_screen',
  CREATE_MODAL: 'create_modal',
  APP_TAB: 'app_tab',
};

export const API_SERVICE = {
  BASE_URL: 'https://res.cloudinary.com/prohorde/raw/upload',
};

export const STORAGE_SERVICE = {
  TOKEN: 'TOKEN',
  USER_INFO: 'USER_INFO',
};

export const CONTENT_TYPE = {
  JSON: 'application/json',
  FORM_DATA: 'multipart/form-data',
};

export const HTTP_STATUS = {
  UNAUTHORIZED: 401,
  OK: 200,
  CREATED: 201,
  PAYLOAD_TOO_LARGE: 413,
  SERVER_ERROR: 500,
};
