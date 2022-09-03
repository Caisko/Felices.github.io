/**
* PHP Email Form Validation - v3.4
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
(function () {
  "use strict";
  
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyAneCzmAc0PmWc1VKRtGgg1FBNmHf4EiguX2DjGAjc6tDoggLZyP6YhhvTeOb_OVi2/exec'
    const form = document.forms['submit-to-google-sheet']

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, {
                method: 'POST',
                body: new FormData(form)
            })
            .then(response => console.message("Success"))
            .catch(error => console.error('Error!', error.message))
    })

})();
