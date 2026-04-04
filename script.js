const span = document.getElementById('countDisplay')
const follow=document.getElementById('follow')

function newFollower() {
    let counter = 0
    function increaseCount() {
        counter++
        console.log('new follower added')
        span.textContent = counter
    }

    return increaseCount
}

let increaseCounter=newFollower()

follow.addEventListener('click',increaseCounter)


