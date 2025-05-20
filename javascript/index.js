function homePageTime() {
  let cities = {
    auckland: "Pacific/Auckland",
    dublin: "Europe/Dublin",
    delhi: "Asia/Kolkata",
    dc: "America/New_York",
  };

  for (let city in cities) {
    let cityElement = document.querySelector(`#${city}`);
    let cityDate = cityElement.querySelector(".date");
    let cityTime = cityElement.querySelector(".time");
    let cityZone = cityElement.querySelector(".zone");

    cityDate.innerHTML = moment().tz(cities[city]).format("dddd, D MMMM");
    cityTime.innerHTML = moment()
      .tz(cities[city])
      .format("HH:mm [<small>]z[</small>]");
  }
}

homePageTime();
setInterval(homePageTime, 60000);

function updateCityTime(event) {
  let timezones = {
    "Australia/Brisbane": "Brisbane",
    "America/Argentina/Buenos_Aires": "Buenos Aires",
    "Africa/Casablanca": "Casablanca",
    "Asia/Kolkata": "Chennai",
    "Asia/Dubai": "Dubai",
    "Africa/Harare": "Harare",
    "Asia/Hong_Kong": "Hong Kong",
    "Asia/Manila": "Manila",
    "Europe/Prague": "Prague",
    "America/Sao_Paulo": "São Paulo",
    "America/Vancouver": "Vancouver",
  };

  let timezone = event.target.value;
  let tz, cityName;

  if (timezone === "current") {
    tz = moment.tz.guess();
    cityName = tz.replace("_", "").split("/")[1];
  } else {
    tz = timezone;
    cityName = timezones[timezone];
  }

  if (timezone.length > 0) {
    let now = moment.tz(tz);
    let date = now.format("dddd, D MMMM");
    let time = now.format("HH:mm  ");
    let zone = now.format("zz");

    let cities = document.querySelector("#cities");
    cities.innerHTML = `<div class="city">
          <div class="city-info">
            <h2>${cityName}</h2>
            <div class="date">${date}</div>
          </div>
          <div class="time">${time}<small class="zone">${zone}</small></div>
        </div>`;
  }
}
let select = document.querySelector("#city");
select.addEventListener("change", updateCityTime);
