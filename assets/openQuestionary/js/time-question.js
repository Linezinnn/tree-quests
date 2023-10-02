function startTime(time) {
    if(time !== 0){
        var timeOver = document.querySelector('.timeOverBox')
        var timerDiv = document.querySelector('.timer');
        timerDiv.style.width = '100%';
        timerDiv.style.transition = 'width ' + time + 's linear';
        var transitionLinear = document.querySelector('.timeOverBox div')
        console.log(transitionLinear)
        
        setTimeout(function() {
            timerDiv.style.width = '0';
        }, 0);
        
        timeoutID = setTimeout(() => {
            
            var container = document.querySelector('.questions-content')

            container.style.pointerEvents = 'none'
            timeOver.style.display = 'flex'
            timeOver.style.backgroundColor = 'var(--b-letter-color)'
            
            setTimeout(() => {
                transitionLinear.style.pointerEvents = 'all'
                nextPrevious(9)
            }, 3000)
            
        }, time*1000);

    }

  }
