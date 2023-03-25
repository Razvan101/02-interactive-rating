
let listElements = document.querySelectorAll('.list-item');
  listElements.forEach(function(e){
    e.addEventListener('click', function(){
      data = this.getAttribute('data-star');
      console.log(data);
      let element = this;
      element.classList.add('active');
      document.getElementById('send').onclick = function(){
        rating();
      }
      function rating(){
        let rating = document.getElementById('rating');
        let displayRating = document.getElementById('success').style.display = 'block';
        let displayHide = document.getElementById('main-content').style.display = 'none';
        rating.innerHTML = data;
      }
    });
  });