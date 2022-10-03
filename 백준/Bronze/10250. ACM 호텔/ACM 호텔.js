console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').splice(1).map(e=>{
    const [h,w,n]=e.split(' ');
    const floor=n%h; 
    const room=String(Math.ceil(n/h)).padStart(2,'0');
    return `${floor!==0?floor:h}${room}`
}).join('\n'));