
import Axios from 'axios' ;

class UserService {
    PostDangKy (values){
        return     Axios({
            method:"POST" , 
            url : "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data: values ,
        })
    }

    PostDangNhap (values){
        return Axios({
            method:"POST" , 
            url :"http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap" , 
            data : values
        })
    }
}


export {UserService} ;

export default new UserService ; 