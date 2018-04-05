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

new Chart(document.getElementById("pie-chart"), {
  type: 'pie',
  data: {
    labels: ["JS", "HTML", "CSS", "PHP"],
    datasets: [{
      label: "Population (millions)",
      backgroundColor: ["#ffd633", "#1aa3ff", "#990000", "#00b33c"],
      data: [15, 40, 35, 10]
    }]
  },
  options: {
    title: {
      display: true,
      text: "Compétences Web maîtrisées en 2018"
    }
  }
});
