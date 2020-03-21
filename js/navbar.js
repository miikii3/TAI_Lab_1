let nav = '<ul class="nav">' +
              '<li class="nav-item">'+
                 '<a class="nav-link" href="index.html">Home</a>'+
              '</li>'+
              '<li class="nav-item">'+
                 '<a class="nav-link" href="quiz.html">Quiz</a>'+
              '</li>'+
              '<li class="nav-item">'+
                 '<a class="nav-link" href="kontakt.html">Kontakt</a>'+
              '</li>'+
          '</ul>';

let navbarElem = document.querySelector(".navbar");

navbarElem.innerHTML = nav;