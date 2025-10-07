// 🌱 Add Crop Modal
function openModal() {
  document.getElementById("addCropModal").style.display = "flex";
}
function closeModal() {
  document.getElementById("addCropModal").style.display = "none";
}

function openWarning(message) {
  document.getElementById("warningMessage").innerHTML = message;
  document.getElementById("warningModal").style.display = "flex";
}

function closeWarning() {
  document.getElementById("warningModal").style.display = "none";
}



function closeWarning() {
  const modal = document.getElementById("warningModal");
  modal.style.display = "none";
}

// ✅ Test Update Function
function updateSensors(temp, humidity, soil, light, ph) {
  document.querySelector(".temperature .value").textContent = temp + "°C";
  document.querySelector(".humidity .value").textContent = humidity + "%";
  document.querySelector(".soil .value").textContent = soil + "%";
  document.querySelector(".light .value").textContent = light + " PAR/μmol";
  document.querySelector(".ph .value").textContent = ph;

  // 🚨 Trigger warnings
  if (humidity < 20) {
    openWarning(
      `The <strong>HUMIDITY</strong> level of your soil has dropped<br>
       to <span class="highlight">${humidity}%</span><br>
       Your plants may die from lack of water!`
    );
  }

  if (soil < 20) {
    openWarning(
      `The <strong>SOIL MOISTURE</strong> level is too low<br>
       (<span class="highlight">${soil}%</span>)<br>
       Please water your plants!`
    );
  }
}

// ✅ Test Call (this should make the warning appear)
updateSensors(32, 18, 25, 50, "6.5");

function addCrop() {
  const cropName = document.getElementById("cropInput").value.trim();
  const humidity = document.getElementById("cropHumidity").value.trim();
  const soilMoisture = document.getElementById("cropSoilMoisture").value.trim();

  if (!cropName || !humidity || !soilMoisture) {
    alert("Please enter crop name, humidity and soil moisture.");
    return;
  }

  saveToHistory(cropName, humidity, soilMoisture);

  // Clear only humidity & soil moisture inputs, keep crop name
  document.getElementById("cropHumidity").value = "";
  document.getElementById("cropSoilMoisture").value = "";
}