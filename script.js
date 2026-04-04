const span = document.getElementById('countDisplay')
const follow=document.getElementById('follow')

function newFollower() {
    let counter = 0
    function increaseCount() {
        counter++
        console.log('new follower added')
        span.textContent = counter
        checkCount()
    }

    function checkCount(){
        if (counter===10){
            alert('congratulation you reach 10 followers')

        } else if(counter===20){
            alert('Hey you rock , you reach 20 followers')
        }
    }

    return increaseCount
}

let increaseCounter=newFollower()

follow.addEventListener('click',increaseCounter)


