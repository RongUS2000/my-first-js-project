// console.log('xin chao')
// const names = ["hoidan", "nam", "1"]
// //index = 0; arr[index]
// console.log(names[0])
// names[2] = "update Name"
// names.push(true, 123, "123")
// console.log(names)
// console.log('=======Duyet Mang=========')
// for (let i = 0; i < names.length; i++) {
//     console.log("i = ", i, "and value = ", names[i])
// }
// console.log('================')
// names.forEach(function (value, index) {
//     console.log("Value = ", value, "index = ", index)
// })
// console.log('================')
// names.forEach((value, index) => {
//     console.log("Value = ", value, "index = ", index)
// })



// const scores = [10, 8, 3, 7, 5];
// scores.forEach((element, index) => {
//     console.log("index =", index, "Value = ", element)
// })
// console.log('======= PHUONG THUC MAP()=========')
// //modify
// const newscoresx2 = scores.map((value, index) => {
//     return value * 2;
// })
// console.log("score = ", scores)
// console.log("score = ", newscoresx2)
const ages = [10, 20, 30, 25, 12, 19]
const ageX2 = ages.map((item, index) => {
    return item * 2;
})
const agesGreatThan18 = ages.filter((item, index) => {
    return item > 18;
})
console.log(ages);
console.log(agesGreatThan18);

