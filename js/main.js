var collapsibleToggler = document.querySelector(".collapsible__toggler");

collapsibleToggler.addEventListener('click', () => {
  collapsibleToggler.parentElement.classList.toggle("collapsible--expanded");
  // prompt();
})