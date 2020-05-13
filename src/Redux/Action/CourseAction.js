
import CourseService from "../../Service/CourseService/index";

 const CourseAction =(dispatch)=>{
        CourseService.LayKhoaHoc().then((res)=>{
        localStorage.setItem("Course" , JSON.stringify(res.data)) 
           return   dispatch({
                type: "GET_COURSE" ,
                payload: res.data ,
            })
        })
}

        const GioHangAction = (data)=>{
            return ({
                type:"GET_GIOHANG" , 
                payload : data
            })
        }

        const XoaKhoaHocAction = (data)=>{
            return ({
                type:"XOA_COURSE" , 
                payload : data
            })
        }

        const MaKhoaHocVeRongAction = ()=>{
            return {type:"MA_KHOA_HOC_NULL"}
        }
        export {CourseAction , GioHangAction , XoaKhoaHocAction , MaKhoaHocVeRongAction }        