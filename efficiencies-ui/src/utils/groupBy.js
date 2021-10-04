
/**
 * @param {object[]} data 
 * @param {string} key - Key to group by
 * @returns {object[]} 
 */
const groupBy = (data, key) => { 
  return data.reduce((storage, item) => {
    const group = item[key];
    storage[group] = storage[group] || [];
    storage[group].push(item);
    
    return storage; 
  }, {});
};
