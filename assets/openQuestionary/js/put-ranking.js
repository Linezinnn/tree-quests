// function putRanking(mainRanking){

//     var totalUsers = document.querySelector('.leaderboard h4')
//     var boxResult = document.querySelector('.leaderboard')

//     for(let i = 0; i < mainRanking.length; i++){

//         var userLine = document.createElement("p")
//         userLine.innerHTML = `

//         ${mainRanking[i][0]} - ${mainRanking[i][1]} pontos

//         `

//         userLine.style.background = 'transparent'
//         userLine.style.color = 'var(--letter-color)'

//         boxResult.insertBefore(userLine, totalUsers)

//         if(mainRanking[i][2]){

//             console.log(mainRanking[i])

//             userLine.style.background = 'var(--pcolor)'
//             userLine.style.color = 'var(--b-letter-color)'
//             userLine.style.borderRadius = '15px'
//             userLine.style.padding = '5px 15px'
//             userLine.style.margin = '4px'

//             mainRanking[i].pop()

//         }

//     }
    
//     totalUsers.innerHTML = `
    
//         <h4>Total de usuários: ${mainRanking.length} jogadores</h4>
    
//     `


// }

function putRanking(user, mainRanking) {
    var totalUsers = document.querySelector('.leaderboard h4');
    var boxResult = document.querySelector('.leaderboard');
  
    for (let i = 0; i < mainRanking.length; i++) {
      var userLine = document.createElement('p');
      userLine.innerHTML = `
        ${mainRanking[i][0]} - ${mainRanking[i][1]} pontos
      `;
  
      userLine.style.background = 'transparent';
      userLine.style.color = 'var(--letter-color)';
  
      boxResult.insertBefore(userLine, totalUsers);
  
      if (mainRanking[i][0] == user.userName) {
  
        userLine.style.background = 'var(--pcolor)';
        userLine.style.color = 'var(--b-letter-color)';
        userLine.style.borderRadius = '15px';
        userLine.style.padding = '5px 15px';
        userLine.style.margin = '4px';
  
        
      }
    }
  
    totalUsers.innerHTML = `
      <h4>Total de usuários: ${mainRanking.length} jogadores</h4>
    `;

}