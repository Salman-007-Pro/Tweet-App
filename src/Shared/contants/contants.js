export const REGEX_CONSTANT = {
  PASSWORD_PATTERN: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9]).{8,}$/,
};

export const ERROR_MESSAGES = {
  REQUIRED_EMAIL: 'Email is Required',
  REQUIRED_PASSWORD: 'Password is required',
  INVALID_PASSWORD: 'Invalid Password format',
  INVALID_EMAIL: 'Please enter a valid Email Address.',
};

export const APP_NAV = {
  LOGIN: 'login_screen',
  DASHBOARD: 'dashboard_screen',
};
