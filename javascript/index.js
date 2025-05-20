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
