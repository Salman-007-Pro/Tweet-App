import apiService from '../Shared/services/api.service';

const feed = async () => {
  const response = await apiService.get('/v1633980024/cdn/teewt_api/teewt_feeds_idwoi7.json');
  return response;
};

export default authService = {
  feed: feed,
};
