function getBotRandAns(arr){

    let randomValue = arr[Math.floor(Math.random() * arr.length)]
    let value = randomValue.querySelector('.message__text').textContent

    return value
};

function createMessage(text, selector){

    selector === 'c' ? selector = 'message_client' : selector ='message'

    let dateNow = new Date().toLocaleString()
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
    divTime.textContent = dateNow.replace('AM', '')

    return divBlock
};

function lastMessageSscroll(){

    let messageArr = Array.from(document.querySelectorAll('.message_client'))
    messageArr[messageArr.length -1].scrollIntoView()
};


function messageAfter(check){

    if (check){

        let timer = setTimeout(()=>{
        let message = createMessage('Привет')
        let messageBlock = document.querySelector('.chat-widget__messages')
        messageBlock.appendChild(message)
        messageBlock.style.display = 'block'

        }, 3000);
    }else if (!check){
        clearTimeout(timer)
    }
};

window.addEventListener('DOMContentLoaded', ()=> {

    let chatWidget = document.querySelector('.chat-widget')
    let chatInput = document.querySelector('.chat-widget__input')
    let messageBlock = document.querySelector('.chat-widget__messages')
    let botMessages = Array.from(document.querySelectorAll('.message'))
    let tumbler = false

    messageBlock.style.display = 'none'

    botMessages.forEach((item)=>{

        item.style.display = 'none'
    });

    chatWidget.addEventListener('click', (e) => {

        let target = e.target

        if (target  && target.classList.contains('chat-widget__side-text')){
            chatWidget.classList.add('chat-widget_active')
            tumbler = true
            messageAfter(tumbler)

        }else if (target &&  target.classList.contains('chat-widget__area')){
            chatWidget.classList.remove('chat-widget_active')
            tumbler = false
        };

    });

    chatInput.addEventListener('keyup', (e) =>  {

        tumbler = false

        if (e.key == 'Enter'){

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