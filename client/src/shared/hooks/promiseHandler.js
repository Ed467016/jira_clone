/**
 * Helper to avoid try catch boilerplate.
 */
const usePromiseHandler = (promise) => {
  return (...args) => new Promise((resolve) => {
    promise(...args)
      .then(res => {
        resolve([res, null])
      })
      .catch(err => resolve([null, err]));
  })
}

export default usePromiseHandler;
