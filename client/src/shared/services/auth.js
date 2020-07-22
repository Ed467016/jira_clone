import useApi from 'shared/hooks/api';
import {
  storeAuthToken,
  getStoredAuthToken,
  removeStoredAuthToken
} from 'shared/utils/authToken';

const signIn = () => {
  const [obj, signInRequest] = useApi.post('/authentication/signIn');
  const signInRequestDecorated = async (...args) => {
    const token = await signInRequest(...args);
    storeAuthToken(token);
  };
  
  return [obj, signInRequestDecorated];
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
