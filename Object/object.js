const pr2 = {
    nameSP: "T-shirt",
    price: 200,
    inStock: true
}
const pr1 = {
    nameSP: "ao thun",
    price: 500,
    inStock: true
}
const pr3 = {
    nameSP: "quan dui",
    price: 50,
    inStock: false
}
const pr4 = {
    nameSP: "bikini",
    price: 50230,
    inStock: true
}
const pr5 = {
    nameSP: "quan sip",
    price: 1000,
    inStock: false
}
const products = [pr1, pr2, pr3, pr4, pr5];
console.log("Orgiginal : ", products);
const firstProduct = products[0]
console.log("1. San pham dau tien la : ", firstProduct.nameSP)

pr2.price = 150;
console.log("2. Update price pr2 = 150", products)
