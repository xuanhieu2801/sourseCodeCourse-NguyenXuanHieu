import React, { Component ,Fragment } from 'react' ; 
import Slider from "react-slick";
import {connect} from 'react-redux';
import CourseItemReview from '../CourseItemReview/index' ;
import './CourseReviewCss.css'
 class CourseReview  extends Component {


    onDataGioHang=(data)=>{
       this.props.onDataGioHang(data)
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
        const {courses} = this.props ; 
        const renDer = courses.map((course,index)=>{
            return <CourseItemReview dataGioHang={this.onDataGioHang} course={course}  key={index} />
        })
        return (
            <Fragment>
                <div className="container-fluid wrap-courseReview" style={{padding:"0"}}>
                </div>
                <div className="container-fluid content-courseReview">
                    <h2 style={{paddingTop:"60px",textAlign:"left" ,marginLeft:"57px", color:"white",marginBottom:"80px"}}>Đánh Giá Khóa Học</h2>
                    <Slider className="wow fadeIn" {...settings}  style={{width:"95%",margin:"0 auto" }}>
                    {renDer}
                    </Slider>
                    <div className="line-style" style={{width:"100%", height:"120px" }}></div>
                </div>
            </Fragment>
            
        )
    }
}



export default connect()(CourseReview) ;