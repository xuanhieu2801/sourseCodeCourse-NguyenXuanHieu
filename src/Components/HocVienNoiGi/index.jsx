import React, { Component } from 'react';
import './HocVienNoiGiCss.css'

export default class HocVienNoiGi extends Component {
    render() {
        return (
            <div className="container-fluid wrap-HocVienNoiGi" style={{padding:"100px 0",position:"relative" , bottom:"600px"}}>
                <div className="row row-HocVienNoiGi">
                    <div className="line-gray-HocVienNoiGi">
                        <div className="container content-HocVienNoiGi">
                        <img src="https://i.udemycdn.com/home/non-student-cta/udlite-lohp-promo-teacher.jpg" style={{transform:"scale(1.2)",float:"left"}} width={320} height={320} />
                        <div className="content-right">
                        <h3 style={{paddingTop:"50px"}} className="wow bounce">Học Viên Nói Gì ?</h3>
                            <h4 style={{float:"right" ,width:"71%" ,textAlign:"center",marginTop:"15px"}}> 
                                    <div id="carouselId" className="carousel slide" data-ride="carousel" style={{height:"340px"}}>
                                        <ol className="carousel-indicators">
                                            <li data-target="#carouselId" data-slide-to={0} className="active"  />
                                            <li data-target="#carouselId" data-slide-to={1}  />
                                            <li data-target="#carouselId" data-slide-to={2}  />
                                        </ol>
                                        <div className="carousel-inner" role="listbox">
                                            <div className="carousel-item active">
                                                <img src="https://cybersoft.edu.vn/wp-content/uploads/2018/11/10.jpg" height={290} alt="First slide" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="https://cybersoft.edu.vn/wp-content/uploads/2018/11/9.jpg" height={290} alt="Second slide" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="https://cybersoft.edu.vn/wp-content/uploads/2018/11/8.jpg" height={290} alt="Third slide" />
                                            </div>
                                        </div>
                                    </div>
                            </h4>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
