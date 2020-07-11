const unqiueObjects = (arr, encoder = JSON.stringify, decoder = JSON.parse) =>
  [...new Set(arr.map(item => encoder(item)))].map(item => decoder(item));

export default unqiueObjects