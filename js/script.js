/* SLIDER */
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slider");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  };
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
};
/* PIE CHART DASHBOARD */
new Chart(document.getElementById("pie-chart"), {
  type: 'pie',
  data: {
    labels: ["JS", "HTML", "CSS", "PHP"],
    datasets: [{
      label: "Progression (%)",
      backgroundColor: ["#ffd633", "#1aa3ff", "#990000", "#00b33c"],
      data: [15, 40, 35, 10]
    }]
  },
  options: {
    title: {
      display: true,
      text: "Temps consacré aux compétences Web en 2018"
    }
  }
});
/* RADAR CHART DASHBOARD */
new Chart(document.getElementById("radar-chart"), {
  type: 'radar',
  data: {
    labels: ["HTML", "CSS", "JS", "JAVA", "PHP"],
    datasets: [{
      label: "2017",
      fill: true,
      backgroundColor: "rgba(63,136,191,0.5)",
      borderColor: "rgba(63,136,191,1)",
      pointBorderColor: "#fff",
      pointBackgroundColor: "rgba(63,136,191,1)",
      data: [20, 35.61, 21.69, 15.62, 8.82]
    }, {
      label: "2018",
      fill: true,
      backgroundColor: "rgba(63,191,127,0.5)",
      borderColor: "rgba(63,191,127,1)",
      pointBorderColor: "#fff",
      pointBackgroundColor: "rgba(63,191,127,1)",
      pointBorderColor: "#fff",
      data: [55.48, 54.16, 27.61, 20.06, 15.45]
    }]
  },
  options: {
    title: {
      display: true,
      text: "Compétences Web acquises 2017/2018 (degré de progression)"
    }
  }
});
