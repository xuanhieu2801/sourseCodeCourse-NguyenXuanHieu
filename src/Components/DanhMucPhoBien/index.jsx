import React, { Component } from 'react' ; 
import './DanhMucPhoBienCss.css';
import {Link} from 'react-router-dom';
export default class DanhMụcPhoBien extends Component {

    constructor(props){
        super(props) ; 
        this.state={
            DanhMuc : [
                {hinhAnh:"https://i.udemycdn.com/home/top-categories/lohp-category-design.jpg" ,tenDanhMuc: "Thiết kế Web",maDanhMuc: "Design"},
                {hinhAnh:"https://i.pinimg.com/originals/81/e5/21/81e521d4050e3227cbfa4440de6b17a1.jpg" ,maDanhMuc: "FrontEnd", tenDanhMuc: "Lập trình Front end"},
                {hinhAnh:"https://i.udemycdn.com/home/top-categories/lohp-category-personal-development.jpg" ,maDanhMuc: "TuDuy", tenDanhMuc: "Tư duy lập trình"},
                {hinhAnh:"https://i.pinimg.com/originals/84/33/7d/84337d228ace94503f01d517e74d7139.jpg" ,tenDanhMuc: "Lập trình Backend",maDanhMuc: "BackEnd"},
                {hinhAnh:"https://i.pinimg.com/236x/2e/c7/02/2ec70206296a11a51af305f595529506.jpg" ,maDanhMuc: "DiDong", tenDanhMuc: "Lập trình di động"},
                {hinhAnh:"https://i.pinimg.com/originals/21/15/83/211583d4c813d6548603233efe5f0eaf.jpg" ,maDanhMuc: "FullStack", tenDanhMuc: "Lập trình Full Stack"},
                
            ]
        }
    }

    
    render() {
        const renDer = this.state.DanhMuc.map((item,index)=>{
            return   <Link to={"/courseCategoriate/"+ item.maDanhMuc}> 
                    <div classname="col-md-4 wow fadeIn" key={index}>
                                <div className="card card-categoriesTop" style={{width:"300px",boxShadow:"0" , marginRight:"40px",marginTop:"30px",filter:"grayscale(1)"}}>
                                    <img className="card-img-top card-img-categories" src={item.hinhAnh} height={320}  alt />
                                    <div className="card-body">
                                        <h4 className="card-title card-title-categories" style={{textAlign:"left"}}>{item.tenDanhMuc}</h4>
                                    </div>
                                </div>
                            </div>
                    </Link>
          
        })
        return (
            <div className="container-fluid wrap_categories" style={{marginBottom:"50px",position:"relative" , bottom:"600px"}} >
                <h3 className="title-danhmucphobien" style={{textAlign:"left",marginLeft:"230px", fontWeight:"bolder"}}>Danh Mục Phổ Biến </h3>
                <div className="container wrap-categoriesTop">
                        <div className="row row-categoriesTop" style={{justifyContent:"center"}}>
                            {renDer}
                        </div>
                </div>
            </div>
        )
    }
}
