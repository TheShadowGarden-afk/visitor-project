async function getVisitorData() {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();

    const infoDiv = document.getElementById("info");

    infoDiv.innerHTML = `
        <p><strong>IP Address:</strong> ${data.ip}</p>
        <p><strong>City:</strong> ${data.city}</p>
        <p><strong>Region:</strong> ${data.region}</p>
        <p><strong>Country:</strong> ${data.country_name}</p>
        <p><strong>Latitude:</strong> ${data.latitude}</p>
        <p><strong>Longitude:</strong> ${data.longitude}</p>
        <p><strong>ISP:</strong> ${data.org}</p>
        <p><strong>Timezone:</strong> ${data.timezone}</p>
        <p><strong>Postal Code:</strong> ${data.postal}</p>
        <p><strong>Browser:</strong> ${navigator.userAgent}</p>
        <p><strong>Language:</strong> ${navigator.language}</p>
        <p><strong>Device Online:</strong> ${navigator.onLine}</p>
        <p><strong>Battery Level:</strong> <span id="batteryLevel">Loading...</span></p>
    `;

    // Battery API
    navigator.getBattery().then(function(battery) {
        document.getElementById("batteryLevel").innerText =
            Math.round(battery.level * 100) + "%";
    });
}

getVisitorData();
