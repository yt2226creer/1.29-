let weight = 55;
let height = 155; 

console.log('体重' + weight + 'kg／身長' + height + 'cmのBMI：');
console.log(weight / (1.55 * 1.55)); // → 20.20..

weight  = 65;
height  = 175;

console.log('体重' + weight + 'kg／身長' + height + 'cmのBMI：');
console.log(weight / (1.55 * 1.55)); // → 20.20..

let x = 10; // 正しい変数宣言
y = 20; // letなしでもエラーにはならない
console.log('x:' + x + ' y:' + y); // → x:10 y:20