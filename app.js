const plainText = document.getElementById('textarea')
const copy = document.getElementById('copy-btn')
const encriptarBtn = document.getElementById('encriptar')
const desencriptarBtn = document.getElementById('desencriptar')
const containerData = document.getElementById('data-list')
const initialState = document.getElementById('initial_state')
const data =document.getElementById('data')
const encriptar = () => {
    const data = plainText.value
    let newdata=''
        for (let i = 0; i < data.length; i++) {
        if (data[i] === 'a') {
            newdata+="ai"
        } else if (data[i] === 'e') {
            newdata+="enter"
        } else if (data[i] === 'i') {
            newdata+="imes"
        } else if (data[i] === 'o') {
            newdata+="ober"
        } else if (data[i] === 'u') {
            newdata+="ufat"
        } else if (data[i] === ' ') {
            newdata+="sp"
        }else{
            newdata+=data[i]
        }
    }
    return newdata
}

const desencriptar = () => {
    var chars = {'ai':'a','enter':'e','imes':'i', 'ober': 'o', 'ufat':'u', 'sp':' '};
    const encripted = plainText.value
     const desencripted =encripted.replace(/ai|enter|imes|ober|ufat|sp/g, m => chars[m])
    return desencripted
    }

encriptarBtn.addEventListener('click', ()=> {
    copy.style.display='block'
    data.style.display='block'
    initialState.style.display='none'
    data.innerHTML= encriptar()
    plainText.value=''
})

desencriptarBtn.addEventListener('click', ()=>{
    initialState.style.display='none'
    data.style.display='block'
    copy.style.display='block'
    data.innerHTML= desencriptar()
    plainText.value=''

})

const copyClipboard=()=> {
    const copyText = document.getElementById('data').innerHTML
    navigator.clipboard.writeText(copyText);
    alert("texto se ha copiado: " + copyText);
  }

copy.addEventListener('click', ()=>{
    copyClipboard()
})