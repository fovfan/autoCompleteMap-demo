(function () {
  const autoCompleteUrlPrefix = '/api/autocomplete/';
  document.getElementById('auto-c-input').addEventListener('keyup', (Element) => {
    //get input value
    let inputValue = Element.target.value;
    debounce(remoteCall, 1000)(inputValue);
  })

  function renderDropdown(suggestions) {
    cleanDropdown();
    suggestions.forEach(element => {
      document.getElementById('dropdown-item')
      .insertAdjacentHTML('beforeend',
        `<a href="#" class="dropdown-item">
      ${element.label}
    </a>`
      )
    });
  }

  function cleanDropdown(){
    document.getElementById('dropdown-item').innerHTML = '';
  }
 
  async function remoteCall(input) {
    cleanDropdown();
    const response = await fetch(autoCompleteUrlPrefix + input);
    const results = await response.json();
   
      renderDropdown(results.suggestions);
   
  }

  var inDebounce = false;
  const debounce = (func, delay) => {
    return function() {
      const context = this
      const args = arguments
      clearTimeout(inDebounce)
      inDebounce = setTimeout(() => func.apply(context, args), delay)
    }
  }

})();
