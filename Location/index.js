navigator.geolocation.getCurrentPosition((v) => {
  const apikey = "1ebc9f4f4653ca037ec711d3dc307bc5";
  const { latitude, longitude } = v.coords;
  const weatherImage = {
    snow: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fkr%2Fsearch%3Fk%3Dsnow%2Bbackground&psig=AOvVaw0Z52qe8v5aIzw7OViEp1o0&ust=1741146079456000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLDQ9t7A74sDFQAAAAAdAAAAABAE",
    wind: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmountainhouse.com%2Fblogs%2Femergency-prep-survival%2Fhigh-winds-storm-warnings-safety&psig=AOvVaw2F7TlFAqtesPUFtD59gEXK&ust=1741146100289000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPinsenA74sDFQAAAAAdAAAAABAE",
  };
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`
  )
    .then((response) => response.json())
    .then((v) => document.body.backgroundImage(v.weather[0].main));
});
