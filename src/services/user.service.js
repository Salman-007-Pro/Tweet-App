import apiService from '../Shared/services/api.service';

const user = async () => {
  const response = await apiService.get(
    '/v1633980023/cdn/teewt_api/users_profile_info_d9whys.json',
  );
  return response;
};

export default authService = {
  user: user,
};
