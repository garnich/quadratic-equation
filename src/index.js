module.exports = function solveEquation(equation) {

   var foo = equation.replace(/(?:\s*)/g,'');
   var re = /(?:\*x\^2|\*x)/g;

    arr = foo.split(re);

      //  решение уравнения
         var a, b, c, d, res1, res2;
         a = arr[0];console.log(a);
         b = arr[1];console.log(b);
         c = arr[2];console.log(c);

         d = Math.sqrt(b * b  - (4 * a * c));

if (d  > 0){
  res1 = (-b + d)/(a*2);
  res2 = (-b - d)/(a*2);

var ult1 = Math.round(res1);
var ult2 = Math.round(res2);

var fin = [ult1,ult2];
} else {if (d == 0){
  res1=(b/2*a)*-1;
  res2=res1;
}}


    res1 = (-b + d)/(a*2);
    res2 = (-b - d)/(a*2);

var ult1 = Math.round(res1);
var ult2 = Math.round(res2);



if (ult1 > ult2){
  var fin = [ult2,ult1];
} else{var fin = [ult1,ult2];}

  return fin;
  // your implementation
}
