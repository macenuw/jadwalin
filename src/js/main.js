import activeToggle from './plugins/activeToggle'
import pricingTab from './plugins/pricingTab'
window.addEventListener("DOMContentLoaded", () => {
  activeToggle('#menuBtn');
  pricingTab();
})