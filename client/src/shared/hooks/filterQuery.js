const useFilterQuery = (request) => (filters) => {
    const params = { params:{} };
    for (const key in filters) {
      if(filters[key]) {
        const element = filters[key];
        params.params[key] = element;
      }
    }
  
    request(params);
};

export default useFilterQuery;
