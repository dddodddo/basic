document.addEventListener("DOMContentLoaded", function() {
  const apiKey = "8582ffda1c1390cabd3fd5d75d5e5847"; // 여기에 OpenWeatherMap API 키를 입력하세요.
  const weatherContainer = document.querySelector(".weather-container");

  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=kr`)
              .then(response => response.json())
              .then(data => {
                  document.getElementById("location").textContent = `위치: ${data.name}`;
                  document.getElementById("temperature").textContent = `온도: ${data.main.temp} °C`;
                  // document.getElementById("description").textContent = `날씨: ${data.weather[0].description}`;
                  const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                  document.getElementById("icon").src = iconUrl;
                  document.getElementById("icon").alt = data.weather[0].description;

                  const timezoneOffset = 9 * 60; // 서울 시간대는 UTC+9
                  const localTime = new Date((data.dt + data.timezone + timezoneOffset * 60) * 1000);
                  const options = {
                      timeZone: 'Asia/Seoul',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit'
                  };
                  const formatter = new Intl.DateTimeFormat('ko-KR', options);
                  document.getElementById("time").textContent = `시간: ${formatter.format(localTime)}`;
              })
              .catch(error => {
                  weatherContainer.innerHTML = `<p>날씨 정보를 불러오는 데 실패했습니다.</p>`;
                  console.error("Error fetching weather data: ", error);
              });
      });
  } else {
      weatherContainer.innerHTML = `<p>위치 정보를 사용할 수 없습니다.</p>`;
  }
});
