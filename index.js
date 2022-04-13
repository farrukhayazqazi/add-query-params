function addQueryParams(url, queryParams) {
    let URL = url.concat('?');
    for (let [index, [key, value]] of Object.entries(Object.entries(queryParams))) {
      URL += `${index > 0 ? '&' : ''}${key}=${value}`;
    }
    return URL;
};

module.exports = addQueryParams;