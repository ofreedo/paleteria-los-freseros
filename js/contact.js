// Contact page: renders the weekly hours table with today highlighted.

document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("#hours-table tbody");
  if (!tbody || typeof BUSINESS_INFO === "undefined") return;

  const todayName = new Date().toLocaleDateString("en-US", { weekday: "long" });

  tbody.innerHTML = BUSINESS_INFO.hours
    .map((h) => {
      const isToday = h.day === todayName;
      return `<tr class="${isToday ? "is-today" : ""}"><td>${h.day}${isToday ? " (Today)" : ""}</td><td>${h.time}</td></tr>`;
    })
    .join("");
});
