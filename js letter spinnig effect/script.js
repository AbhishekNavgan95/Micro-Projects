document.querySelectorAll(".hover").forEach((e) => {
  // takes reference to existing text
  let text = e.textContent;

  // removes existing text from the element
  e.textContent = "";

  // create span tags
  for (let i = 0; i < text.length; i++) {
    let newSpan = document.createElement("span");

    // cheaks if words contains any space and 
    // replaces with space charecter if exist
    newSpan.innerHTML = text[i] === " " ? "&nbsp;" : text[i];
    newSpan.classList.add("transform");
    e.appendChild(newSpan);
  }
});

// animation for each charecter
document.querySelectorAll(".hover").forEach((e) => {
  e.addEventListener("mouseenter", () => {
    gsap.to(e.querySelectorAll(".transform"), {
      stagger: 0.05,
      rotateX: "360deg",
      display: "inline-block",
      duration: 0.1,
    });
  });
});

// animation for each charecter
document.querySelectorAll(".hover").forEach((e) => {
  e.addEventListener("mouseenter", () => {
    gsap.to(e.querySelectorAll(".transform"), {
      stagger: -0.05,
      rotateX: "360deg",
      display: "inline-block",
      duration: 0.1,
    });
  });
});

// resets animation
document.querySelectorAll(".hover").forEach((e) => {
  e.addEventListener("mouseleave", () => {
    gsap.to(e.querySelectorAll(".transform"), {
      stagger: 0.05,
      rotateX: "-360deg",
      duration: 0.1,
    });
  });
});
