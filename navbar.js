document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");

  const caseLi = document.createElement("li");
  const caseA = document.createElement("a");
  caseA.href = "case-studies.html";
  caseA.textContent = "Case Studies";
  caseLi.appendChild(caseA);
  navbar.insertBefore(caseLi, navbar.querySelector("li:last-child"));

  const toolsLi = document.createElement("li");
  const toolsA = document.createElement("a");
  toolsA.href = "tools-resources.html";
  toolsA.textContent = "Tools & Resources";
  toolsLi.appendChild(toolsA);
  navbar.insertBefore(toolsLi, navbar.querySelector("li:last-child"));
});
