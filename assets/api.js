function convertKelvinToCelsius(kelvin) {
    if (kelvin < (0)) {
      return 'below absolute zero (0 K)';
    } else {
      return (kelvin-273.15);
    }
  }

sendQuery('http://api.openweathermap.org/data/2.5/weather?q=aix-en-provence,FR,13100&appid=edf28e14960f11a459bd5fc49ae5592c');

            sendQueryWithCallback(
                    'http://api.openweathermap.org/data/2.5/weather?q=aix-en-provence,FR,13100&appid=edf28e14960f11a459bd5fc49ae5592c',
                    'GET',
                    () => {console.log("ok")}
                );
                function refreshData() {
                sendQueryWithCallback(
                        'http://api.openweathermap.org/data/2.5/weather?q=aix-en-provence,FR,13100&appid=edf28e14960f11a459bd5fc49ae5592c',
                        'GET',
                        (response) => {
                            response = JSON.parse(response);
                            console.log("Refreshed");
                            console.log(response)
                            document.getElementById('weather-image').src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
                            document.getElementById('weather-temp').innerHTML = Math.ceil(convertKelvinToCelsius(response.main.temp)) + "°C";
                            document.getElementById('weather-city').innerHTML = response.name;
                    });
                    setTimeout(refreshData, 100000);
                };
                refreshData();
