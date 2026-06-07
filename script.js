const mediaFrames = document.querySelectorAll(".photo-frame, .logo-frame");

for (const frame of mediaFrames) {
  const img = frame.querySelector("img");

  if (!img) {
    continue;
  }

  const markAsReady = () => {
    if (img.naturalWidth > 0) {
      frame.classList.add("is-ready");
    }
  };

  img.addEventListener("load", markAsReady);
  img.addEventListener("error", () => {
    frame.classList.remove("is-ready");
  });

  if (img.complete) {
    markAsReady();
  }
}

const yearNode = document.querySelector("#current-year");

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const favicon = document.querySelector('link[rel="icon"]');

if (favicon) {
  favicon.type = "image/jpeg";
}
