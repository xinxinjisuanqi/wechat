// index.js
var rand;
function createRand(){
  rand=[];
  for(var i=0;i<7;i++) {
    var r=Math.floor(Math.random()*31+1);
     rand.push(r);
     console.log(rand[i]);
  }
};
Page({
  onLoad:function(){
  createRand();
  this.setData({
    rand:rand,
  })
}, 
   newRand:function(){
     createRand();
     this.setData({
       rand:rand,
     })
   }
})