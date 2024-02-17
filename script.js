let qrText=document.getElementById('urlInp')
let sizes=document.getElementById('sizes')
let gbtn=document.getElementById('genarate')
let downloadBtn=document.getElementById('download')

const qrContainer=document.querySelector('.qr-body')
let size=sizes.value;

downloadBtn.addEventListener('click', ()=>{
    let img = document.querySelector('.qr-body img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr);
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});
gbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('change',(e)=>{
    size=e.target.value;
    isEmptyInput();

});
function isEmptyInput(){
    
    qrText.value.length > 0 ? genarateQRcode() : alert("Enter the text or URL to generate your QR code");;
}
function genarateQRcode(){
    qrContainer.innerHTML="";
     new QRCode(qrContainer, {
        text: qrText.value,
        width: size,
        height: size,
        colorDark : "#000000",
        colorLight : "#ffffff",
    });
}