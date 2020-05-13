import React, { Component } from 'react';
import './TinTucCss.css';
import Slider from "react-slick";

export default class TinTuc extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 700,
            slidesToShow: 1,
            slidesToScroll: 1 , 
            autoplay: true,
          };
        return (
            <div className="Container-fluid wrap-TinTuc" style={{position:"relative" , bottom:"600px"}}>
                <h3 style={{
                    fontWeight: "bolder"
                }}>Sự Kiện Và Tin Tức </h3>
                <p>Cập nhật những tin tức mới nhất về giáo dục </p>
                <div className="container wrap-content-TinTuc" >
                            <div className="row row-content-TinTuc">
                                    <div className="col-lg-7 col-xs-12 col-sm-12 col-content-left" >
                                    <Slider {...settings}>
                                        <div style={{position:"relative"}}>
                                            <div className="img-content">
                                                <img src="https://grandetest.com/theme/edumy-html/images/blog/1b.jpg"  width={630} />
                                            </div>
                                            <div className="content">
                                                <h5 style={{color:"white",textAlign:"left"}}>Tin vui cho giới IT: Giải pháp mới giúp doanh nghiệp giám sát 24/7 và quản lý hạ tầng CNTT ngoại biên hiệu quả</h5>
                                            </div>
                                        </div>
                                        <div style={{position:"relative"}}>
                                            <div className="img-content">
                                                <img src="https://genk.mediacdn.vn/thumb_w/640/2018/1/29/germanymicrosoft-abusive-updates-microsoft-updates-microsoft-15172004672111702411122.jpg" height={440}  width={630} />
                                            </div>
                                            <div className="content">
                                                <h5 style={{color:"white",textAlign:"left"}}>Microsoft cho biết họ cứ thu về 1 USD thì các đối tác còn thu được gấp 10</h5>
                                            </div>
                                        </div>
                                        </Slider>
                                    </div>
                                    <div className="col-lg-5 col-xs-12 col-sm-12 col-content-right">
                                        <img src="https://grandetest.com/theme/edumy-html/images/blog/2.jpg" style={{ cursor:"pointer"   ,filter:"drop-shadow(2px 4px 6px black)"}} alt=""/>
                                        <div className="content-right" >
                                                <a style={{color: "white",fontWeight:"900"}}>
                                                11/3,2020
                                                </a>
                                        </div>    
                                        <div className="detail">
                                            <h4 style={{color:"white"}}>Sự kiện Marketing</h4>
                                        </div>
                                    </div>
                            </div>
                </div>
            </div>
        )
    }
}
