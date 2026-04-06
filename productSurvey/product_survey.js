const feedbackform = document.getElementById('productFeedback')
const userInfoDiv = document.getElementById('userInfo')
feedbackform.addEventListener('submit', displayFeedbackInfo)
function displayFeedbackInfo(e) {
    e.preventDefault()
    const feedbackInfo = new FormData(e.target)
    const fields = ['userName', 'userAge', 'userEmail', 'userJob', 'userDesignation', 'userProductChoice', 'userFeedback']
    fields.forEach(field => {
        document.getElementById(field).innerText = feedbackInfo.get(field)
    })
    userInfoDiv.style.display = 'block'
}
