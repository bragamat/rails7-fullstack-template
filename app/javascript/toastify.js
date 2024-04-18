import Toastify from "toastify-js"

document.addEventListener('DOMContentLoaded', () => {

  document.addEventListener('turbo:load', ShowFlashMessages)
  document.addEventListener('turbo:frame-load', ShowFlashMessages)
  document.addEventListener('turbo:frame-render', ShowFlashMessages)
  document.addEventListener('turbo:before-fetch-response', ShowFlashMessages)


  function ShowFlashMessages() {
    const backgroundColors = {
      alert: "#f44336",
      error: "#f39c12",
      notice: "#009688"
    }
    JSON.parse(document.body.dataset.flashMessages).forEach(flashMessage => {
      const [type, message] = flashMessage;
      Toastify(
        {
          text: message,
          duration: 5000,
          close: true,
          backgroundColor: backgroundColors[type],
          stopOnFocus: true
        }
      ).showToast();
    });
  }
})
