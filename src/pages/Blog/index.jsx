import React, { Component,Fragment } from 'react';
import "./BlogCss.css";
import { Breadcrumb } from 'antd';
import {Link} from 'react-router-dom';
import WOW from 'wowjs';
import FooterPages from '../../Layouts/FooterPages/index'
export default class Blog extends Component {
    componentDidMount(){
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <Fragment>
                <div className="container-fluid wrap-blog">
                </div>
                <div className="container-fluid content-blog" >
                    <div className="row">
                    <div className="title-blog">
                        <h2 className="h2-blog wow fadeIn">Blog</h2>
                            <h4 className="wow fadeIn"><Breadcrumb>
                                <Breadcrumb.Item><Link to="/home">Trang Chủ</Link></Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    Blog
                                </Breadcrumb.Item>
                            </Breadcrumb></h4>
                    </div>
                    </div>
                </div>
                <div className="div-space container-fluid"></div>
                <div className="container blog-area">
                        <div className="row" style={{marginBottom:"50px"}}>
                            <div className="col-md-4 col-xs-12 col-sm-12 col-blog wow fadeIn">
                            <div className="card">
                                <img className="card-img-top" src="https://techydevs.com/demos/themes/html/aduca/images/img12.jpg" alt />
                                <div className="card-body">
                                    <h4 className="card-title">Học tập, tình bạn và niềm vui</h4>
                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                                    <a style={{color:"#127416 ", fontWeight:"bolder"}} className="selectorReadmore">Xem tiếp </a>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4 col-xs-12 col-sm-12 col-blog wow fadeIn">
                            <div className="card">
                                <img className="card-img-top" src="https://techydevs.com/demos/themes/html/aduca/images/img13.jpg" alt />
                                <div className="card-body">
                                <h4 className="card-title">Học tập, tình bạn và niềm vui</h4>
                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                                    <a style={{color:"#127416 ", fontWeight:"bolder"}} className="selectorReadmore">Xem tiếp </a>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4 col-xs-12 col-sm-12 col-blog wow fadeIn">
                            <div className="card">
                                <img className="card-img-top" src="https://techydevs.com/demos/themes/html/aduca/images/img14.jpg" alt />
                                <div className="card-body">
                                <h4 className="card-title">Học tập, tình bạn và niềm vui</h4>
                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                                    <a style={{color:"#127416 ", fontWeight:"bolder"}} className="selectorReadmore">Xem tiếp </a>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4 col-xs-12 col-sm-12 col-blog wow fadeIn">
                            <div className="card"> 
                                <img className="card-img-top" src="https://techydevs.com/demos/themes/html/aduca/images/img10.jpg" alt />
                                <div className="card-body">
                                <h4 className="card-title">Học tập, tình bạn và niềm vui</h4>
                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                                    <a style={{color:"#127416 ", fontWeight:"bolder"}} className="selectorReadmore">Xem tiếp </a>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4 col-xs-12 col-sm-12 col-blog wow fadeIn">
                            <div className="card">
                                <img className="card-img-top" src="https://techydevs.com/demos/themes/html/aduca/images/img9.jpg" alt />
                                <div className="card-body">
                                <h4 className="card-title">Học tập, tình bạn và niềm vui</h4>
                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                                    <a style={{color:"#127416 ", fontWeight:"bolder"}} className="selectorReadmore">Xem tiếp </a>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4 col-xs-12 col-sm-12 col-blog wow fadeIn">
                            <div className="card">
                                <img className="card-img-top" src="https://techydevs.com/demos/themes/html/aduca/images/img8.jpg" alt />
                                <div className="card-body">
                                     <h4 className="card-title">Học tập, tình bạn và niềm vui</h4>
                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                                    <a style={{color:"#127416 ", fontWeight:"bolder"}} className="selectorReadmore">Xem tiếp </a>
                                </div>
                            </div>
                            </div>
                        </div>
                </div>
                <FooterPages />
            </Fragment>
        )
    }
}
