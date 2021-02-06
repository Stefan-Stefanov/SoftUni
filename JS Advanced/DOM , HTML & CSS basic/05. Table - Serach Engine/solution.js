function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const rows = document.querySelectorAll('tbody tr');

   function onClick() {
      const input = document.querySelector('#searchField')
         .value
         .toLowerCase();

      for (const el of rows) {
         if (el.textContent.toLowerCase().includes(input) && input !== '') {
            el.setAttribute('class', 'select');
         } else {
            el.removeAttribute('class')
         }
      }
   }
}