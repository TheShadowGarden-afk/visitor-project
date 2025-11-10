const API_URL = "https://visitor-project-pqvi.onrender.com/visit"; 

async function loadVisitorData() {
    try {
        // Send request to backend
        const response = await fetch(API_URL);
        const data = await response.json();

        // Fill values
        document.getElementById("totalVisits").textContent = data.totalVisits;
        document.getElementById("uniqueVisitors").textContent = data.uniqueVisitors;
        document.getElementById("yourVisits").textContent = data.yourVisits;
        document.getElementById("deviceInfo").textContent = data.device;
        document.getElementById("lastVisit").textContent = data.lastVisit;

    } catch (error) {
        console.log("Error loading visitor data:", error);
    }
}

loadVisitorData();

