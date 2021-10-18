import apiService from '../Shared/services/api.service';

const login = async () => {
  const response = await apiService.get('/v1633980023/cdn/teewt_api/user_login_data_lyukus.json');
  return response;
};

export default authService = {
  login: login,
};
