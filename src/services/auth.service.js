import apiService from '../Shared/services/api.service';
import UserService from './user.service';

const notFound = (message = 'user not found') => {
  return {
    ok: false,
    data: null,
    response: {
      message: message,
    },
  };
};

const login = async ({id, password}) => {
  try {
    const [auth, users] = await Promise.all([
      await apiService.get('/v1633980023/cdn/teewt_api/user_login_data_lyukus.json'),
      UserService.user(),
    ]);
    const userEmail = users?.data?.users?.find(el => el.username === id);

    if (!userEmail) return notFound();

    const userInfo = auth?.data?.oauth?.find(
      el => el.user_id === userEmail?.id && el.password === password,
    );

    if (!userInfo) return notFound();

    return {
      data: userInfo,
      ok: true,
      response: auth.response,
    };
  } catch (error) {
    return notFound(error?.message);
  }
};

export default authService = {
  login: login,
};
