function Validation() {
    this.getElement = function (id){
        return document.getElementById(id);
    }

    this.checkEmpty = function(element, elementID, id, content){
        
        const elementThongBao = this.getElement(id);
        const elementInputField = this.getElement(elementID);

        if(element){
            elementThongBao.innerHTML = ``;
            elementThongBao.style.display = 'none';
        } else {
            elementThongBao.innerHTML = content;
            elementThongBao.style.display = 'block';
            elementInputField.style.borderColor = 'red';
        };
    }

    this.checkPassword = function(password){
        const dieuKien = /^(?=.*\d)(?=.*[.!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return dieuKien.test(password);
    }
}

/// Cần check duplicate tài khoản hoặc tên nhân viên
/*
Check định dạng email
Check định dạng lương + số giờ = number
Fix chức năng nhân viên => add nhân viên vào array để hiện dãy nhân viên*/


