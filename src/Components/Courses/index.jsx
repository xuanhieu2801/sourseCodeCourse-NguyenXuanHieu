import React, { Component ,Fragment } from 'react' ; 
import CourseItem from '../CourseItem/index';
import Slider from "react-slick";
import './CoursesCss.css';
import {connect} from 'react-redux';
 class Course  extends Component {


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
            return <CourseItem dataGioHang={this.onDataGioHang} course={course}  key={index} />
        })
        return (
            <Slider className="wow fadeIn" {...settings} >
                {renDer}
            </Slider>
            
        )
    }
}



export default connect()(Course) ;