let div = document.querySelector(".baby-skills");
let spans = document.querySelectorAll(".baby-skills span");

window.onscroll = () => {
	if (window.scrollY >= div.offsetTop+40) {
		console.log("hi u here")
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  if (window.scrollY <= div.offsetTop-180) {
    spans.forEach((span) => {
      span.style.width = 0;
    });
  }
};
