const list = [
  '고은산', '조민수', '나상민', '이원진', '원종운', '김정준', '이교은', '상원', '이예슬', '조성욱',
];
const length = list.length;
console.log(length);
const fiveTimes = list.slice(0, Math.floor(length / 5));
const twoTimes = list.slice(Math.floor(length / 5), Math.floor(length * 4 / 5));
const oneTimes = list.slice(Math.floor(length * 4 / 5));

const finalList = [...fiveTimes.slice(), ...fiveTimes.slice(), ...fiveTimes.slice(), ...fiveTimes.slice(), ...fiveTimes.slice(), ...twoTimes.slice(), ...twoTimes.slice(), ...oneTimes.slice()];
console.log(finalList.length);

const shuffle = [];
while (finalList.length > 0) {
  shuffle.push(finalList.splice(Math.floor(Math.random() * finalList.length), 1)[0]);
}
let i = 0;
setInterval(() => {
  console.log(i + 1, shuffle[i]);
  i++;
}, 2000);
