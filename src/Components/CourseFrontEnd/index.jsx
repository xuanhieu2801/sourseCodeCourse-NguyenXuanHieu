import React, { Component } from 'react' ;
import Axios from 'axios' ; 
import CourseItem from '../CourseItem/index';
import Slider from "react-slick";
import {GioHangAction} from '../../Redux/Action/CourseAction' ;
import {connect} from 'react-redux';
 class CourseFrontEnd extends Component {

    constructor(props){
        super(props); 
        this.state = { 
            CourseFrontEnd : []
        }
    }

    componentDidMount(){
        Axios({
            method:"GET" ,
            url :"http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=FrontEnd&MaNhom=GP01"
        }).then(res=>{
            this.setState({
                CourseFrontEnd : res.data
            })
        })
    }

    onDataGioHangFrontEndCourse = (dataGioHang)=>{
        this.props.dispatch(GioHangAction(dataGioHang))
    }
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        const render = this.state.CourseFrontEnd.map((course,index)=>{
            return <CourseItem course={course} key={index} dataGioHang={this.onDataGioHangFrontEndCourse} />
        })
        return (
            <div className="container-fluid wrap-CourseFrontEnd" style={{position:"relative" , bottom:"600px",paddingTop:"60px" ,width:"90%",marginLeft:"20px",marginBottom:"100px"}}>
                <h2 style={{textAlign:"left" ,marginLeft:"18px",marginBottom:"40px"}}>Khóa Học Front-End</h2>
                <Slider className="wow fadeIn" {...settings}  style={{width:"95%",margin:"0 auto"  }}>
                {render}
                </Slider>
                
            </div>
        )
    }
}


export default connect()(CourseFrontEnd ) ;