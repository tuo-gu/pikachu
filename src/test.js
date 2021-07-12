import x from './css.js'
const string=x
const demo1=document.querySelector('#demo1')
const demo2=document.querySelector('#demo2');
const stop=document.querySelector('#stop')
const quick=document.querySelector('#quick')
const slow= document.querySelector('#slow')
const play= document.querySelector('#play')
const speed= document.querySelector('#speed')
let n=1
let time=20
let speedSave=0
let oldTime=time

const pause=()=>{
  window.clearInterval(id)
}
const show=()=>{
  n+=1;
  demo1.innerText=string.substr(0,n)
  demo2.innerHTML=string.substr(0,n)
  demo1.scrollTop=demo1.scrollHeight;//标签是id的情况下，控制滚动高度
  if(n>string.length){
    pause()
    console.log("end")
    return ;
  }
}
const speedShow=(times,a)=>{
  if(times<time){
    a-=1
  }else if(times>time){
    a+=1
  }else if(times=time){
    a=0
  }else{
    console.log("xxx")
  }
  speed.innerHTML="倍速:"+(a===0?"默认":a+"倍")
  return speedSave=a

}
let id=setInterval(show,time) //首次执行
speedShow()

const run=()=>{
  id=setInterval(show,time)
}
const butStyle=(a)=>{
  stop.style.display=a
  quick.style.display=a
  slow.style.display=a
  speed.style.display=a
}
$(quick).on('click',()=>{
  oldTime=time
  console.log("quick")
  pause()
  time<=0?time=0:time-=10;
  run() 
  speedShow(oldTime,speedSave)
  return oldTime
})
$(slow).on('click',()=>{
  console.log("slow")
  oldTime=time
  pause();
  time<=30?time+=20:time+=10;
  run()  
  speedShow(oldTime,speedSave)
  return oldTime
})
$(stop).on('click',()=>{
  console.log("stop")
  pause()
  butStyle("none")
  play.style.display="block"
},)
$(play).on('click',()=>{
  console.log("play")
  butStyle("block")
  play.style.display="none"
  run()  
})