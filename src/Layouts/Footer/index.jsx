import React, { Component,Fragment } from 'react';
import './FooterCss.css' ;
import { BackTop } from 'antd';
import { UpSquareOutlined , FacebookOutlined ,TwitterOutlined ,YoutubeOutlined ,GooglePlusOutlined,GithubOutlined} from '@ant-design/icons';

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                <section className="footer_one" style={{background:" #151515", padding:" 80px 0",position:"relative" , bottom:"547px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-md-3 col-lg-3">
                            <div className="footer_contact_widget">
                                <h4 style={{color:"white"}}>LIÊN HỆ</h4>
                                <p>333 Lê Văn Lê ,Việt Nam </p>
                                <p>222, Văn Lê Lê , Việt Nam</p>
                                <p>123 456 7890</p>
                                <p>support@support.com</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-md-3 col-lg-2">
                            <div className="footer_company_widget">
                                <h4 style={{color:"white"}}>TRUNG TÂM</h4>
                                <ul className="list-unstyled">
                                    <li><a href="#">Giới thiệu</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="page-contact.html">Liện Hệ</a></li>
                                    <li><a href="#">Để trở nên tốt hơn</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-md-3 col-lg-2">
                            <div className="footer_program_widget">
                                <h4 style={{color:"white"}}> ĐÀO TẠO </h4>
                                <ul className="list-unstyled">
                                    <li><a href="#">Designer</a></li>
                                    <li><a href="#">Lập trình viên</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-md-3 col-lg-2">
                            <div className="footer_support_widget">
                                <h4 style={{color:"white"}}>HỖ TRỢ</h4>
                                <ul className="list-unstyled">
                                    <li><a href="#">Tài Liệu học</a></li>
                                    <li><a href="#">Nhóm Học</a></li>
                                    <li><a href="#">Đa ngôn ngữ </a></li>
                                    <li><a href="#">Các videos chọn lọc</a></li>
                                    <li><a href="#">Giáo viên tận tâm</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-md-3 col-lg-3">
                            <div className="footer_apps_widget">
                                <h4 style={{color:"white"}}>MOBILE</h4>
                                <div className="app_grid">
                                    <button className="apple_btn btn-dark">
                                        <span className="icon">
                                            <span className="flaticon-apple" />
                                        </span>
                                        <span className="title">App Store</span>
                                        <span className="subtitle">Available now on the</span>
                                    </button>
                                    <button className="play_store_btn btn-dark">
                                        <span className="icon">
                                            <span className="flaticon-google-play" />
                                        </span>
                                        <span className="title">Google Play</span>
                                        <span className="subtitle">Get in on</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                <section className="footer_middle_area p0" style={{position:"relative" , bottom:"547px"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 col-md-3 col-lg-3 col-xl-2 pb15 pt15">
                                <div className="logo-widget home1" style={{position:"relative",top:"-15px"}}>
                                    <span style={{fontSize:"30px" , fontWeight:"bolder"}}>A+</span>
                                </div>
                            </div>
                            <div className="col-sm-8 col-md-5 col-lg-6 col-xl-6 pb25 pt25 brdr_left_right">
                                <div className="footer_menu_widget">
                                    <ul >
                                        <li className="list-inline-item"><a href="#">Trang chủ </a></li>
                                        <li className="list-inline-item"><a href="#">Khóa Học</a></li>
                                        <li className="list-inline-item"><a href="#">Blog</a></li>
                                        <li className="list-inline-item"><a href="#">Tin Tức</a></li>
                                        <li className="list-inline-item"><a href="#">Thanh toán</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-3 col-xl-4 pb15 pt15">
                                <div className="footer_social_widget mt15">
                                    <ul style={{color:"white"}}>
                                        <li className="list-inline-item"><FacebookOutlined /></li>
                                        <li className="list-inline-item"><TwitterOutlined /></li>
                                        <li className="list-inline-item"><YoutubeOutlined /></li>
                                        <li className="list-inline-item"><GooglePlusOutlined /></li>
                                        <li className="list-inline-item"><GithubOutlined /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="footer_bottom_area " style={{position:"relative" , bottom:"547px"}}> 
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="copyright-widget text-center">
                                    <p>Copyright Edumy © 2019. All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <BackTop>
                <div className="ant-back-top-inner">
                    <UpSquareOutlined  style={{color:"green",
                              fontSize:"40px"}}/>
                </div>
                </BackTop>
            </Fragment>
        )
    }
}
