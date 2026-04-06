const span = document.getElementById('countDisplay')
const follow=document.getElementById('follow')

function newFollower() {
    let counter = 0
    function increaseCount() {
        counter++
        console.log('new follower added')
        span.textContent = counter

        checkCounter()
    }
    function checkCounter(){
        if(counter===10){
            alert('you reach 1à followers')
        } else if(counter===20){
            alert('you rock!')
        }
    }

    return increaseCount
}

let increaseCounter=newFollower()

follow.addEventListener('click',increaseCounter)


