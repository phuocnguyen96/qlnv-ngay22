// (OOP)
function ThongTinNhanVien(
  taiKhoan,
  hoTen,
  email,
  mk,
  date,
  luong,
  chucvu,
  time
) {
  this.taiKhoan = taiKhoan;
  this.hoTen = hoTen;
  this.email = email;
  this.mk = mk;
  this.date = date;
  this.luong = luong;
  this.chucVu = chucvu;
  this.time = time;
  this.tongLuong = 0; // xếp x3 / cầm đầu x2 / lính x1

  this.tinhLuong = function () {
    this.tong = 0;
    if (this.chucVu === "Sếp") {
      this.tong = (this.luong * 3).toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
    } else if (this.chucVu === "Trưởng phòng") {
      this.tong = (this.luong * 2).toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
    } else {
      this.tong = this.luong.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
    }
    return this.tong;
  };
  this.xepLoai = "";

  this.tinhXepLoai = function(){
    this.ketQua = ``;
    if(this.time >= 160){
      this.ketQua = 'Giỏi'
    } else if(this.time >= 100 && this.time < 160){
      this.ketQua = 'Khá'
    } else {
      this.ketQua = 'Trung Bình'
    };
    return this.ketQua;
  };
}
