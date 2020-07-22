import { values } from 'lodash';

import toast from 'shared/utils/toast';
import data from './mock.data.json';

const api = (method, url, variables) =>
  Promise.resolve(
    data[method.concat(url).concat(values(variables).some(x => x) && values(variables.params).some(x => x) ? '?queried' : '')]
  );

const optimisticUpdate = async (url, { updatedFields, currentFields, setLocalData }) => {
  try {
    setLocalData(updatedFields);
    await api('put', url, updatedFields);
  } catch (error) {
    setLocalData(currentFields);
    toast.error(error);
  }
};

export default {
  get: (...args) => api('get', ...args),
  post: (...args) => api('post', ...args),
  put: (...args) => api('put', ...args),
  patch: (...args) => api('patch', ...args),
  delete: (...args) => api('delete', ...args),
  optimisticUpdate,
};
