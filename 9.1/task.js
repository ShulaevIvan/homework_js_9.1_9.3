function getBotRandAns(arr){

    let randomValue = arr[Math.floor(Math.random() * arr.length)]
    let value = randomValue.querySelector('.message__text').textContent

    return value
};

function createMessage(text, selector){

    selector === 'c' ? selector = 'message_client' : selector ='message'

    let divBlock = document.createElement('div')
    let divTime = document.createElement('div')
    let divMessage = document.createElement('div')

    divBlock.classList.add('message', `${selector}`)
    divTime.classList.add('message__time')
    divMessage.classList.add('message__text')

    divMessage.textContent = text

    divBlock.appendChild(divTime)
    divBlock.appendChild(divMessage)
    divBlock.style.display = 'block'

    return divBlock
};

function lastMessageSscroll(){

    let messageArr = Array.from(document.querySelectorAll('.message_client'))
    messageArr[messageArr.length -1].scrollIntoView()


};


window.addEventListener('DOMContentLoaded', ()=> {

    let chatWidget = document.querySelector('.chat-widget')
    let chatInput = document.querySelector('.chat-widget__input')
    let messageBlock = document.querySelector('.chat-widget__messages')
    let botMessages = Array.from(document.querySelectorAll('.message'))

    messageBlock.style.display = 'none'

    botMessages.forEach((item)=>{
        item.style.display = 'none'
    });



    chatWidget.addEventListener('click', (e) => {

        let target = e.target

        if (target  && target.classList.contains('chat-widget__side-text')){
            chatWidget.classList.add('chat-widget_active')
        };
    });


    chatInput.addEventListener('keyup', (e) =>  {

        if (e.which == 13 || e.key == 'Enter'){

            if (chatInput.value == ''){
                return false
            }
            else {
                let clientMessageBlock = createMessage(chatInput.value, 'c')
                let botMessage = createMessage(getBotRandAns(botMessages))

                chatInput.value = ''
                messageBlock.appendChild(botMessage)
                messageBlock.appendChild(clientMessageBlock)
                messageBlock.style.display = 'block'
                lastMessageSscroll()
            };
        };
    });





});