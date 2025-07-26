console.log("lab 2")
const tinhTrungBInh = (toan, van, anh) => {
    return (toan + van + anh) / 3;
}
const xepLoai = (diemTB) => {

    if (diemTB >= 9) {
        return "Xuat sac"
    } else if (diemTB >= 8 && diemTB < 9) {
        return "Gioi"
    } else if (diemTB >= 6.5 && diemTB < 8) {
        return "Kha"
    } else return "Trung Binh"
}
//main
const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;
const myTB = tinhTrungBInh(diemToan, diemVan, diemAnh);

console.log(`
Diem trung binh : ${myTB}
Xep loai: ${xepLoai(myTB)}
    `)