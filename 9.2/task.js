window.addEventListener('DOMContentLoaded', ()=>{

    let checkboxes = document.querySelectorAll('.interest__check')

    checkboxes.forEach((checkbox)=>{

        let subCheckboxBlock = checkbox.parentElement.nextElementSibling
        if(subCheckboxBlock){

            checkbox.addEventListener('change', () => {
                let checkboxItem = Array.from(subCheckboxBlock.querySelectorAll('.interest__check'))                
                checkboxItem.forEach((item)=>{
                    checkbox.checked ? item.checked = true : item.checked = false
                });
            });
        };
    });
});


