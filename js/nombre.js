//! FETCH
/**
 * axios.delete('http://www.mi-api.com',{
      password: 'asdfasfsd',
      email: 'asdfasfsd@gmail.com',
    })
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
// const URL_CIUDAD = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=616629f9acdc3b22b8b09553e632e5da`; //! String templates
/* http://www.mi-api.com/users/id/compras/id */ //! route params
/* http://www.mi-api.com/users/12/compras/100 */

const getWeather = async (ciudad) => {
  const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const appID = '&appid=616629f9acdc3b22b8b09553e632e5da';
  const urlCompleta = baseURL + ciudad + appID;
  //! SINTAXIS FETCH ASYNC/AWAIT
  const response = await fetch(urlCompleta, {
    method: 'GET',
  });

  const data = await response.json();
  console.log(convertirACelcius(data.main.temp));
  return convertirACelcius(data.main.temp);
};

const inputTemperatura = document.getElementById('inputTemperatura');
const btnTemperatura = document.getElementById('btnTemperatura');
const resultadoTemperatura = document.getElementById('resultadoTemperatura');

btnTemperatura.addEventListener('click', async () => {
  const temperatura = await getWeather(inputTemperatura.value);
  console.log(temperatura);
  resultadoTemperatura.textContent = 'La temperatura es de ' + temperatura;

  getWeather(inputTemperatura.value).then((temperatura) => {
    resultadoTemperatura.textContent = 'La temperatura es de ' + temperatura;
  });
});
