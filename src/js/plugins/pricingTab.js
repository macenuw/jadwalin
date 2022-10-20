const pricingTab = () => {
  const controlBtns = document.querySelectorAll('.pricing__period'),
    pricingContent = document.querySelectorAll('.pricing__items'),
    control = document.querySelector('.pricing__periods');
  control.addEventListener('click', (e) => {
    if (e.target.getAttribute('id') === 'monthly' || e.target.getAttribute('id') === 'yearly') {
      deactivateAll();
      document.querySelector(`#${e.target.getAttribute('id')}`).classList.add('active');
      document.querySelector(`#${e.target.getAttribute('id')}Plans`).classList.add('active');
    }
  })


  function deactivateAll() {
    controlBtns.forEach(btn => {
      btn.classList.remove('active')
    })
    pricingContent.forEach(btn => {
      btn.classList.remove('active')
    })
  }
};
export default pricingTab;