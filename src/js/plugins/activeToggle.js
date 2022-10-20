const activeToggle = (selector) => {
  const elem = document.querySelector(selector);
  elem.addEventListener('click', () => {
    elem.classList.toggle('active')
  })
};
export default activeToggle;