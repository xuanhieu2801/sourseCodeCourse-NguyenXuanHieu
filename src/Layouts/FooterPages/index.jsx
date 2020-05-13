import React, { Component,Fragment } from 'react';
import './FooterPagesCss.css' ;
import { BackTop } from 'antd';
import { UpSquareOutlined  } from '@ant-design/icons';

export default class FooterPages extends Component {
    render() {
        return (
            <Fragment>
                <section className="footer_one" style={{background:" rgba(0, 0, 0, 0.75)", padding:" 80px 0"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-md-3 col-lg-3">
                            <div className="footer_contact">
                                <h4 style={{color:"white"}}>LIÊN HỆ</h4>
                                <p>333 Lê Văn Lê ,Việt Nam</p>
                                <p>222, Văn Lê Lê , Việt Nam</p>
                                <p>123 456 7890</p>
                                <p>support@support.com</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-md-3 col-lg-2">
                            <div className="footer_company">
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
                            <div className="footer_program">
                                <h4 style={{color:"white"}}> ĐÀO TẠO</h4>
                                <ul className="list-unstyled">
                                <li><a href="#">Designer</a></li>
                                    <li><a href="#">Lập trình viên</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-md-3 col-lg-2">
                            <div className="footer_support">
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
                            <div className="footer_apps">
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
                <section className="footer_bottom_area " > 
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
