const span = document.getElementById('countDisplay')


function newFollower() {
    let counter = 0

    function increaseCount() {
        counter++
        console.log('new follower added')
        span.textContent = counter
    }


    return increaseCount
}

let increaseCount=newFollower()


