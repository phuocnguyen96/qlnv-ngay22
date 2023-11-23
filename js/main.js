const danhSachNhanVien = new DanhSachNhanVien();
const validation = new Validation();
const getELE = (id) => {
  return document.getElementById(id);
};



const setLocalStorage = (dsnv) => {
  localStorage.setItem('DSNV', JSON.stringify(dsnv));
};

const showUI = (dsnv) => {
  let content = '';
  dsnv.map((nv) => {
    content +=` 
            <tr>
                <td>${nv.taiKhoan}</td>
                <td>${nv.hoTen}</td>
                <td>${nv.email}</td>
                <td>${nv.date}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.tongLuong}</td>
                <td>${nv.xepLoai}</td>
                <td class="d-flex"> <button onclick = "xoaNV('${nv.taiKhoan}')" class="btn btn-danger mx-1">Xoá</button>
                <button onclick = "xemNV('${nv.taiKhoan}')" class="btn btn-success mx-1">Xem</button></td>
            </tr>`
        ;
  });
  getELE('tableDanhSach').innerHTML = content;
};

const checkEmptyInput = (element ,elemementID ,id, content) => {
  const elementThongBao = getELE(id);
  const elementInput = getELE(elemementID);


}

const themNhanVien = () => {
  const taiKhoan = getELE('tknv').value;
  const name = getELE('name').value;
  const email = getELE('email').value;
  const mk = getELE('password').value;
  const date = getELE('datepicker').value;
  const luong = getELE('luongCB').value;
  const chucVu = getELE('chucvu').value;
  const gioLam = Number(getELE('gioLam').value);

  validation.checkEmpty(taiKhoan, 'tknv', 'tbTKNV', 'Vui lòng kiểm tra lại tên tài khoản');
  validation.checkEmpty(name, 'name', 'tbTen', 'Vui lòng kiểm tra tên nhân viên');
  validation.checkEmpty(luong, 'luongCB', 'tbLuongCB', 'Vui lòng nhập vào lương nhân viên');
  validation.checkEmpty(gioLam, 'gioLam', 'tbGiolam', 'Vui lòng nhập vào giờ làm');

  const nhanVien = new ThongTinNhanVien(taiKhoan, name, email, mk, date, luong, chucVu, gioLam);
  nhanVien.tongLuong = nhanVien.tinhLuong();
  nhanVien.xepLoai = nhanVien.tinhXepLoai();
  danhSachNhanVien.themNhanVien(nhanVien);

  showUI(danhSachNhanVien.dsnv);  

  setLocalStorage(danhSachNhanVien.dsnv);
};

const getLocalStorage = () => {
  if(localStorage.getItem('DSNV')){
    const listDSVN = JSON.parse(localStorage.getItem('DSNV'));
    showUI(listDSVN);
  };    
}

getLocalStorage();

const btnThemNhanVien = document.getElementById('btnThemNV');
btnThemNhanVien.addEventListener('click', themNhanVien);