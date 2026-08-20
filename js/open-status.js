// Renders a live "Open now" / "Closed" badge from BUSINESS_INFO.hoursMinutes.

document.addEventListener("DOMContentLoaded", () => {
  if (typeof BUSINESS_INFO === "undefined" || !BUSINESS_INFO.hoursMinutes) return;
  renderOpenStatus();
  setInterval(renderOpenStatus, 60000);
});

function getOpenStatus() {
  const now = new Date();
  const day = now.getDay();
  const minutesNow = now.getHours() * 60 + now.getMinutes();
  const today = BUSINESS_INFO.hoursMinutes[day];

  if (today && minutesNow >= today.open && minutesNow < today.close) {
    const minutesLeft = today.close - minutesNow;
    if (minutesLeft <= 30) {
      return { open: true, label: `Open now — closing soon` };
    }
    return { open: true, label: "Open now" };
  }

  if (today && minutesNow < today.open) {
    return { open: false, label: `Closed — opens ${formatTime(today.open)}` };
  }

  let nextDay = (day + 1) % 7;
  let daysAhead = 1;
  while (!BUSINESS_INFO.hoursMinutes[nextDay] && daysAhead < 7) {
    nextDay = (nextDay + 1) % 7;
    daysAhead++;
  }
  const next = BUSINESS_INFO.hoursMinutes[nextDay];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayLabel = daysAhead === 1 ? "tomorrow" : dayNames[nextDay];
  return { open: false, label: next ? `Closed — opens ${dayLabel} ${formatTime(next.open)}` : "Closed" };
}

function formatTime(minutes) {
  let h = Math.floor(minutes / 60);
  const m = minutes % 60;
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12;
  if (h === 0) h = 12;
  return m === 0 ? `${h} ${ampm}` : `${h}:${String(m).padStart(2, "0")} ${ampm}`;
}

function renderOpenStatus() {
  const targets = document.querySelectorAll("[data-open-status]");
  if (!targets.length) return;
  const status = getOpenStatus();
  targets.forEach((el) => {
    el.textContent = status.label;
    el.classList.toggle("is-open", status.open);
    el.classList.toggle("is-closed", !status.open);
  });
}
