import { useCallback } from 'react';

const useFilterQuery = (filters, request) => {
  return useCallback(() => {
    debugger
    const params = { params:{} };
    for (const key in filters) {
      if(filters[key]) {
        const element = filters[key];
        params.params[key] = element;
      }
    }
  
    request(params);
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [filters]);
};

export default useFilterQuery;
