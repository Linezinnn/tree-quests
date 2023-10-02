function calcRanking(id) {

    var questionaryBD = JSON.parse(localStorage.getItem('questionaryBD'));
    var ranking = questionaryBD[id][14]
  
    var userName = document.querySelector('#userName').value;
    var globalPontuation = window.globalPontuation;
  
    var user = [userName, globalPontuation];
    ranking.push(user)


    ranking = ranking.sort((a, b) => b[1] - a[1]);


    localStorage.setItem('questionaryBD', JSON.stringify(questionaryBD));

    putRanking({ userName }, ranking);

    

  }
