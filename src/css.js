
const string=`
/* 下面我将画一只皮卡丘 */
/* 首先是给它一个黄色的皮肤 */
.skin{
  position: relative;
  height: 100vh;
  background-color: #f7d40e;
}
.move{
  position: relative;
  top:-7vh;
}
@media (max-width:500px){
  .move{
    top:-10vh;
  }
}
/*然后画一个鼻子*/
.nose{
  position: absolute;
  left: 50%;
  top: 180px;
  border-top: 14px solid black;
  margin-left:-15px;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-radius: 50%  50% 0 0;
  width: 0;
  height: 0;
}

/*给它画一双眼睛*/
.eye.left{
  transform:translateX(-100px);
}
.eye.right{
  transform:translateX(100px);
}
.eye{
  left: 50%;
  top: 150px;
  margin-left: -25px;
  position:absolute;
  /*先画两个方框*/
  border: 2px solid #000;
  width: 50px;
  height: 50px;
  /*再改成圆形*/
  border-radius: 50%;
  /*给眼睛上背景色*/
  background: rgb(39, 37, 37);
}

/*这时候加两个明亮的眼珠子*/

.eye::before{
  content: '';
  display: block;
  border: 2px solid #000;
  width:25px ;
  height: 25px;
  background: white;
  border-radius: 50%;
  position: relative;
  left: 6px;
  top: -1px;
}
/*给它的小脸蛋上加两个红色的脸颊*/
.face.left{
  transform:translateX(-140px);
}
.face.right{
  transform:translateX(140px);
}
.face{
  position:absolute;
  margin-left: -40px;
  left: 50%;
  top: 250px;
  border: 2px solid #000;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: red;
}


.mouth{
  width: 160px;
  height: 200px;
  margin-left: -80px;
  position: absolute;
  left: 50%;
  top:200px;
}
.mouth .up .lip{
  background-color: #f7d40e;
  border: 2px solid #000;
  width: 78px;
  height: 25px;
  border-top: none;
  position: absolute;
  z-index: 1;
}
.mouth .up .lip.right{
  right: 0;
  border-radius: 0 0 25px 0;
  border-left: none;
  transform: rotate(20deg);
}
.mouth .up .lip.left{
  left: 0;
  border-radius: 0 0 0 25px ;
  border-right: none;
  transform: rotate(-20deg);
}
.mouth .down {
  height: 160px;
  position: absolute;
  width: 100%;
  overflow: hidden;
  top:10px
}
.mouth .down .yuan1{
  border:2px solid #000;
  position:absolute;
  left:50%;
  transform: translate(-50%,-80%);
  height: 800px;
  width: 140px;
  border-radius: 200px/600px;
  background: rgb(156,30,12);
  overflow: hidden;
}
.mouth .down .yuan2{
  background: rgb(235, 132, 149);
  height: 130px;
  width: 140px;
  position:absolute;
  bottom: -10px;
  border-radius: 50%;
  
}
`

export default string