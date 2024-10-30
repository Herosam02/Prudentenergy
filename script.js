// JavaScript functionality for read more buttons (optional)
document.querySelectorAll('.btn-primary').forEach(button => {
  button.addEventListener('click', () => {
    alert("Functionality to read more will be added here.");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const carouselElement = document.querySelector("#demo");
  const overlays = document.querySelectorAll(".overlay");

  carouselElement.addEventListener("slide.bs.carousel", function () {
    overlays.forEach(overlay => overlay.style.display = "none");
  });

  carouselElement.addEventListener("slid.bs.carousel", function () {
    overlays.forEach(overlay => overlay.style.display = "block");
  });
});

function incrementStats() {
  const counters = document.querySelectorAll('.counter');

  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      let c = +counter.innerText.replace(/,/g, '');

      const increment = target / 1000; // Adjust speed by changing divisor

      if (c < target) {
        c += increment;
        counter.innerText = Math.ceil(c).toLocaleString();
        setTimeout(updateCounter, 10); // Adjust time to control smoothness
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    updateCounter();
  });
}

document.addEventListener('DOMContentLoaded', incrementStats);

document.getElementById("projectSelect").addEventListener("change", function() {
  const displayImage = document.getElementById("displayImage");
  const displayText = document.getElementById("displayText");

  // Set image and text based on selected value
  switch(this.value) {
      case "education":
          displayImage.src = "Prudent-Energy-Financed-Classroom-Block-Oghareki-Grammar-School-Delta-State-e1582800292205.png"; // Update to actual image path
          displayText.textContent = "Education Infrastructure Support: In 2018, Prudent Energy financed the construction of a block of six classrooms with offices and convenience at Oghareki Grammar School, located in one of our host communities in Delta State where we have our multi-purpose storage facility.";
          break;
      case "handball":
          displayImage.src = "Prudent-Handball-League-2019-1-e1582800581790.jpg"; // Update to actual image path
          displayText.textContent = "Prudent Energy Handball League: We recognize the role of sports in socio-economic development, and its impact on society and young people in particular. This is why over the last five years since 2015 we have been the headline sponsor of the National Handball league now the Prudent Energy Handball league.";
          break;
      case "covid":
          displayImage.src = "OGS-GOV-COVID19-Support2-2.jpeg"; // Update to actual image path
          displayText.textContent = "COVID-19 Support for Ogun State: A few weeks into the lock down put in place by the governments at state and federal levels, we initiated and supported a series of interventions designed to support communities with food supplies, protective gear; and governments with medical equipment to aid institutional response to the COVID-19 outbreak specifically in Delta and Ogun States.";
          break;
      case "default":
        displayImage.src = "Prudent-Energy-Financed-Classroom-Block-Oghareki-Grammar-School-Delta-State-e1582800292205.png"; // Update to actual image path
        displayText.textContent = "Education Infrastructure Support: In 2018, Prudent Energy financed the construction of a block of six classrooms with offices and convenience at Oghareki Grammar School, located in one of our host communities in Delta State where we have our multi-purpose storage facility.";
        break;
  }
});