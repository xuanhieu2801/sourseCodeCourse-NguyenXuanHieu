import Axios from 'axios';
class CourseService {
    LayKhoaHoc = ()=>{
        return (Axios({
            method:"GET" , 
            url:"http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"
            }))
    }
    LayDanhMucKhoaHoc = ()=>{
        return (Axios({
            method:"GET" , 
            url :"http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc" ,
        }))
    }
}


export {CourseService}; 


export default new CourseService(); 