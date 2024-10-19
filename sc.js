const calculatorContainer = document.getElementById('calculator_container');
const displayArea = document.getElementById('display_area');

calculatorContainer.addEventListener('click', (e) => {
    if (e.target.nodeName == "BUTTON"){
        switch (e.target.textContent){
            case "C":
                clear();
                break;
            case "DEL":
                deleteOneValue();
                break;
            case "=":
                evaluate();
                break;
            default:
                addToDisplayArea(e.target.textContent);
        }
    }
});

function clear() {
    displayArea.textContent = '';
}

function addToDisplayArea(value){
    displayArea.textContent += value;
}

// تأكد من إضافة الدالة التالية
function deleteOneValue() {
    displayArea.textContent = displayArea.textContent.slice(0, -1);
}

// تأكد من إضافة الدالة التالية
function evaluate() {
    try {
        displayArea.textContent = eval(displayArea.textContent);
    } catch (e) {
        displayArea.textContent = 'Error';
    }
}
function deleteOneValue(){
    let currentContent = displayArea.textContent;
    displayArea.textContent = currentContent.substring(0, currentContent.length - 1);
}
