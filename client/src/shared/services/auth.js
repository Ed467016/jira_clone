import useApi from 'shared/utils/api';
import {
  storeAuthToken,
  getStoredAuthToken,
  removeStoredAuthToken
} from 'shared/utils/authToken';

const signIn = async ({ email, password }) => {
  // REPLACE:: const { authToken } = await api.post('/authentication/signIn', { email, password });
  const { authToken } = await useApi.post('/authentication/guest');
  storeAuthToken(authToken);
  
  return authToken;
}

const signOut = () => {
  if (!getStoredAuthToken()) {
    throw new Error('Signing out:: No user found.');
  }

  removeStoredAuthToken();
}

export default {
  signIn,
  signOut
}
