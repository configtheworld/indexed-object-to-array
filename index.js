function indexedObjToArr(obj, keep_index) {
    let result;
    if (keep_index) {
      result = Object.keys(obj).map(key => {
        const obj_temp = {
          index: key,
          value: obj[key]
        };
        return new Object(obj_temp);
      });
    } else {
      result = Object.keys(obj).map(key => Object(obj[key]));
    }
  
    return result;
  }

  module.exports = indexedObjToArr;