

var color3 = new Vue({
  el: '#color-3',
  data: {
    items:[]
  }
})


var color2 = new Vue({
  el: '#color-2',
  data: {
    items:[]
  }
})

var color1 = new Vue({
  el: '#color-1',
  data: {
    items:[]
  }
})

var color4 = new Vue({
  el: '#color-4',
  data: {
      items:[]
  }
})


var colorNumber4 = new Vue({
  el: '#color-number-4',
  methods:{
    createLists: function(event){
      let lists3 = []
      for(let i = 0; i <colorNumber4.$el.value;i++){
        lists3.push({value:''})
      }

      color4._data.items = lists3
    }
  }
})

var colorNumber3 = new Vue({
  el: '#color-number-3',
  methods:{
    createLists: function(event){
      let lists3 = []
      for(let i = 0; i <colorNumber3.$el.value;i++){
        lists3.push({value:''})
      }

      color3._data.items = lists3
    }
  }
})

var colorNumber2 = new Vue({
  el: '#color-number-2',
  methods:{
    createLists: function(event){
      let lists3 = []
      for(let i = 0; i <colorNumber2.$el.value;i++){
        lists3.push({value:''})
      }

      color2._data.items = lists3
    }
  }
})


var colorNumber1 = new Vue({
  el: '#color-number-1',
  methods:{
    createLists: function(event){
      let lists3 = []
      for(let i = 0; i <colorNumber1.$el.value;i++){
        lists3.push({value:''})
      }

      color1._data.items = lists3
    }
  }
})


var item1 = new Vue({
  el: '#item-1',
  methods:{
    handler: function(event){
      if(item1.$el.checked){
        colorNumber1.$el.disabled=false
        color1.$el.style.display='flex';
      }else{
        colorNumber1.$el.disabled=true;
        color1.$el.style.display='';
      }
      if( colorNumber1.$el.disabled === false &&
        colorNumber2.$el.disabled === false &&
        colorNumber3.$el.disabled === false &&
        colorNumber4.$el.disabled === false){
         btnsLists[0].classList.add('check')
       btnsLists[0].classList.remove('mark')
      }else{
          if( colorNumber1.$el.disabled === false ||
          colorNumber2.$el.disabled === false ||
          colorNumber3.$el.disabled === false ||
          colorNumber4.$el.disabled === false){
            btnsLists[0].classList.remove('check')
           btnsLists[0].classList.add('mark')
        }else{
          btnsLists[0].classList.remove('check')
          btnsLists[0].classList.remove('mark')
        }
      }
    }
  }
})

var item2 = new Vue({
  el: '#item-2',
  methods:{
    handler: function(event){
      if(item2.$el.checked){
        colorNumber2.$el.disabled=false;
        color2.$el.style.display='flex';
      }else{
        colorNumber2.$el.disabled=true
        color2.$el.style.display='';
      }
     
      if( colorNumber1.$el.disabled === false &&
        colorNumber2.$el.disabled === false &&
        colorNumber3.$el.disabled === false &&
        colorNumber4.$el.disabled === false){
         btnsLists[0].classList.add('check')
       btnsLists[0].classList.remove('mark')
      }else{
          if( colorNumber1.$el.disabled === false ||
          colorNumber2.$el.disabled === false ||
          colorNumber3.$el.disabled === false ||
          colorNumber4.$el.disabled === false){
            btnsLists[0].classList.remove('check')
           btnsLists[0].classList.add('mark')
        }else{
         btnsLists[0].classList.remove('check')
          btnsLists[0].classList.remove('mark')
        }
      }
    }
  }
})


var item3 = new Vue({
  el: '#item-3',
  methods:{
    handler: function(event){
      if(item3.$el.checked){
        colorNumber3.$el.disabled=false
        color3.$el.style.display='flex';
      }else{
        colorNumber3.$el.disabled=true;
        color3.$el.style.display='';
      }
      if( colorNumber1.$el.disabled === false &&
        colorNumber2.$el.disabled === false &&
        colorNumber3.$el.disabled === false &&
        colorNumber4.$el.disabled === false){
         btnsLists[0].classList.add('check')
       btnsLists[0].classList.remove('mark')
      }else{
          if( colorNumber1.$el.disabled === false ||
          colorNumber2.$el.disabled === false ||
          colorNumber3.$el.disabled === false ||
          colorNumber4.$el.disabled === false){
            btnsLists[0].classList.remove('check')
           btnsLists[0].classList.add('mark')
        }else{
         btnsLists[0].classList.remove('check')
          btnsLists[0].classList.remove('mark')
        }
      }
    }
  }
})


var item4 = new Vue({
  el: '#item-4',
  methods:{
    handler: function(event){
      if(item4.$el.checked){
        colorNumber4.$el.disabled=false
        color4.$el.style.display='flex';
      }else{
        colorNumber4.$el.disabled=true
        color4.$el.style.display='';
      }
      if( colorNumber1.$el.disabled === false &&
        colorNumber2.$el.disabled === false &&
        colorNumber3.$el.disabled === false &&
        colorNumber4.$el.disabled === false){
         btnsLists[0].classList.add('check')
       btnsLists[0].classList.remove('mark')
      }else{
          if( colorNumber1.$el.disabled === false ||
          colorNumber2.$el.disabled === false ||
          colorNumber3.$el.disabled === false ||
          colorNumber4.$el.disabled === false){
            btnsLists[0].classList.remove('check')
           btnsLists[0].classList.add('mark')
        }else{
          btnsLists[0].classList.remove('check')
          btnsLists[0].classList.remove('mark')
        }
      }

    }
  }
})






colorNumber1.createLists()
colorNumber2.createLists()
colorNumber3.createLists()
colorNumber4.createLists()