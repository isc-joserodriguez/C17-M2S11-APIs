//! FETCH
/**
 * axios.get('http://www.mi-api.com')
 * .then((response)=>console.log(response.data))
 * .catch((err)=>console.log(err));
 */

const URL = '';

/* fetch(URL)
  .then((response) => response.json())
  .then((data) => console.log(data)); */

const convertirACelcius = (gradosK) => {
  return gradosK - 273.15;
};

const getWeather = async (ciudad) => {
  // const URL_CIUDAD = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=616629f9acdc3b22b8b09553e632e5da`; //! String templates
  const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const appID = '&appid=616629f9acdc3b22b8b09553e632e5da';
  const urlCompleta = baseURL + ciudad + appID;
  //! SINTAXIS FETCH ASYNC/AWAIT
  const response = await fetch(urlCompleta);
  const data = await response.json();
  console.log(convertirACelcius(data.main.temp));
};

getWeather('colombia');
