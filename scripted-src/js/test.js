document.addEventListener('DOMContentLoaded', ()=>{
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    document.body.appendChild(canvas);
    
    const image = new Image();
    image.onload = function(){
        ctx.drawImage(image,0,0)
    }
    image.src = 'src/img/bombe.png';
})


