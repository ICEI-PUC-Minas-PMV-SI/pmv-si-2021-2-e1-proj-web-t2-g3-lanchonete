const c = (el)=> document.querySelector(el);
const cs = (el)=> document.querySelectorAll(el);

modelsJson.map((item, index)=>{
    let quantidade = c('#quantidade, #bsubtração, #badição').cloneNode(true);
    document.querySelector('#quantidade').append('#bsubtração, #badição')
    
})