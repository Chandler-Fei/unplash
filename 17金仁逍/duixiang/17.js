console.log("sunshine")
//金仁逍//
let jrx;
//daibo 在我的左边
let db;


jrx = 10;



console.log ( jrx * 2 );
console.log ( jrx % 3 );
console.log (Math.floor(jrx / 3));




db = "20";
console.log (jrx + db);
if (jrx===db) {
  console.log(true)
}
else{
console.log (false)
};
console.log (jrx === db ? true : false)

if (jrx<db) {
  console.log("db is bigger than jrx")
}
else{
  console.log("jrx is bigger than db")
}

let ks  = 60;
if (ks >= 80 ) {
  console.log ("优秀");

}  else if (ks>=60) {
  console.log ("及格");
}
    else{(ks < 60 ) 
      console.log ("不及格");
    }

console.log("...........")
let arr =[];
arr = [1, 2, 3, 4, 5,];
arr[5]='string';
arr[6] =['a','b','c'];
console.log(arr[7]);

let count = 0;
 
// while (count < arr.length) {
//   console.log(arr[count])
//   count++
// }


for (let count = 0; count< arr.length; count++) {
  // console.log('arr+[count]'= j );
  typeof(count);
  if(typeof arr[count]=='object'){
    console.log('arr ['+count+'] + 数组')
   

  }
  
};

function sayhi() {
  console.log("Hi!");
};

 sayhi();

function hi() {
  return('hi')
}

console.log (hi())


 

 function jin(j,x){
  return j + x;
  
};


function ren(r,e) {
  if (r>e){
    return r
  }
  else{
    return e
  }
}

console.log (ren(5,2))


let x = ren(50,73);

let y = ren(23,44);

console.log(jin(x,y));


function xiao (a,b,c,d,e){
  return (a+b+c+d+e)/5
}

console.log(xiao(5,4,7,8,9));


 let scorelist =arr[45,55,62,15,74];

function hhh(list) {

  let sum=0;

  for (let count = 0; count < list.length; count++) {
    sum = sum + list.length
    return sum;
  }
  
}

function lll (scorelist){
   return sum/list.length
}


console.log()