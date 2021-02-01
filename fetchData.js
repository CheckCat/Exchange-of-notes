export const fetchData = (url, headers, callback) => {
  fetch(url, headers)
    .then(response => response.json())
    .then(data => callback(data))
}