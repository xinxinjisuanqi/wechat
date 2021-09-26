// index.js
var start,end,sum,mid;
Page({
  startNum:function(e){
    start=parseFloat(e.detail.value);
  },
    midNum:function(e){
      mid=parseFloat(e.detail.value);
    },
  
  endNum:function(e){
    end=parseInt(e.detail.value);
  },
   calc:function(){
     sum=start.toFixed(2)*1;
     for(var i=0;i<end;i++) {
       sum=(sum*(1+mid)).toFixed(2)*1;
     }
     this.setData({
       sum:sum
     })
   }
})