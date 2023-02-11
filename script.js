const img = document.querySelector('img')
const input = document.querySelector('input')
const btn = document.querySelector('.btn')

input.addEventListener('change', (e) => {
    var myvalue = e.target.value
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${myvalue}`
    img.src = url

})