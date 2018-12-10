if (window.location.href == "https://my.senecacollege.ca/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_241_1") {
    let urlStr = "https://api.openweathermap.org/data/2.5/weather?q=toronto&units=metric&appid=2ba5d1db9c55f5acc1f770bafd9e2caa"
    document.getElementById("module:_3925_1").style.display = 'block';
    document.getElementById("module:_3925_1").innerHTML = '<button id= "getWeather" style="display: none">' + "Get Weather" + '</button>';
     document.getElementById("getWeather").addEventListener('click', getText);
     document.getElementById("getWeather").click();
     function getText(){
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET', urlStr);
        ourRequest.onload = function() {
            var weatherData = JSON.parse(ourRequest.responseText);
            console.log(weatherData);
            renderHTML(weatherData);
        };
        ourRequest.send();
    };
     
    function renderHTML(data) {
        var body = document.getElementById("module:_3925_1");
         var weatherDom = `
            <div>
                <p style="padding:5px 0 3px 12px; font-weight: bolder; font-size: 1.1rem; background-color: #c2c2c2">Today's Weather</p>
                <ul style="padding: 0 5px; font-size: 1rem; display: flex; flex-wrap: wrap;">
                    <li style="box-sizing: border-box; padding: 2px; flex: 0 0 50%"><span style="font-weight: bolder;">Weather</span>: ${data.weather[0].main}</li>
                    <li style="box-sizing: border-box; padding: 2px; flex: 0 0 50%"><span style="font-weight: bolder;">City</span>: ${data.name}</li>
                    <li style="box-sizing: border-box; padding: 2px; flex: 0 0 50%"><span style="font-weight: bolder;">Temperature</span>: ${data.main.temp} °C</li>
                    <li style="box-sizing: border-box; padding: 2px; flex: 0 0 50%"><span style="font-weight: bolder;">Max Temperature</span>: ${data.main.temp_max} °C</li>
                    <li style="box-sizing: border-box; padding: 2px; flex: 0 0 50%"><span style="font-weight: bolder;">Min Temperature</span>: ${data.main.temp_min} °C</li>
                    <li style="box-sizing: border-box; padding: 2px; flex: 0 0 50%"><span style="font-weight: bolder;">Humidity</span>: ${data.main.humidity} %</li>
                </ul>
            </div>
        `;
         body.innerHTML += weatherDom;
    }
 }