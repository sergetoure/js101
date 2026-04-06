const feedbackform = document.getElementById('productFeedback')
const userInfoDiv = document.getElementById('userInfo')

feedbackform.addEventListener('submit', displayFeedbackInfo)

function displayFeedbackInfo(e) {
    e.preventDefault()

    const feedbackInfo = new FormData(e.target)
    console.log('form submited succesfully')
    const userName = document.getElementById('userName')
    const userAge = document.getElementById('userAge')
    const userEmail = document.getElementById('userEmail')
    const userJob = document.getElementById('userJob')
    const userDesignation = document.getElementById('userDesignation')
    const userProductChoice = document.getElementById('userProductChoice')
    const userFeedback = document.getElementById('userFeedback')

    userName.innerText = feedbackInfo.get('userName')
    userAge.innerText = feedbackInfo.get('userAge')
    userEmail.innerText = feedbackInfo.get('userEmail')
    userJob.innerText = feedbackInfo.get('userJob')
    userDesignation.innerText = feedbackInfo.get('userDesignation')
    userProductChoice.innerText = feedbackInfo.get('userProductChoice')
    userFeedback.innerText = feedbackInfo.get('userFeedback')

    userInfoDiv.setAttribute('style', 'display:true')



}
