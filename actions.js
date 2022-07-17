function applyColor(){
    let element = document.getElementById('selector1').value
    let color = document.getElementById('color').value
    switch (element){
        case 'text':
            document.getElementById('try').style.color = color;
            break;
        case 'background':
            document.getElementById('try').style.background = color;
            break;
        case 'border':
            document.getElementById('try').style.borderColor = color;
            break;
        case 'shadow':
            document.getElementById('try').style.boxShadow = `0 0 30px ${color}`;
            break;
        case 'body':
            document.querySelector('body').style.background = color;
            break;
    }
}
window.addEventListener('load', ()=>{
    document.getElementById('cambios').addEventListener('click',()=>{
        applyColor();
    })
})