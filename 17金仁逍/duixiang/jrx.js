let rabbit = {
name : 'huahua',
age : 2 ,
color : 'white' ,
ismale : true ,

food : 100 ,
// drink :100 ,
health:100,

liveInterval: null,


bark : function  () {
  console.log("cicici!")
  this.food--
},

showStatus: function() {
  console.log('health: ' + this.health)
  console.log('food: ' + this.food)
 
},

speak : function () {
  return('My name is ' + this.name)
 
},

setname: function () {
   this.food--
  return this.name 
  
} ,
  
run : function () {


  if (this.food > 20 ) {
    console.log('rabbit is running in the house')
    this.food-=10
  }else {
    console.log ('饿了，要恰饭的嘛')

    
  }





},


// if(this.health===0){

//   this.dead()
  
}

  eat: function () {
    this.food = 100;
   console.log("狗狗吃饱了，摇头表示感谢");
  },

  live: function(){
    let self = this;
    this.live = setInterval(function(){
    self.food--;
    console.log(self.food)
    self.checkStatus();
    self.showStatus();
},1000)
},

checkStatus: function () {

  if (this.food < 0) {
    this.food = 0;
    this.bark();
  };

  if (this.water === 0 || this.food === 0) {
    this.health = this.health < 0 ? 0 : this.health - 5;
    this.bark();
  };

  if (this.health === 0) {
    this.dead();
  };
},

  dead: function() {
  clearInterval(this.liveInterval);
  console.log("gapi了");
},


rabbit.speak();
rabbit.bark();
rabbit.run();
rabbit.live();


