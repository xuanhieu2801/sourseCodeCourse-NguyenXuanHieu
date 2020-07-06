import React, { Component ,Fragment } from 'react';
import  '../Home/Home.css';
import Typed from 'react-typed';
import 'antd/dist/antd.css';
import {  DownOutlined , CheckOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { animateScroll as scroll, scroller } from 'react-scroll';
import PopularCourses from '../../Components/PopularCourses/index'
import {connect} from "react-redux";
import {CourseAction ,GioHangAction} from "../../Redux/Action/CourseAction";
import CourseReview from '../../Components/CourseReview/index';
import CourseFrontEnd from '../../Components/CourseFrontEnd';
import ComponentHour from "../../Components/ComponentHour/index" ;
import DanhMucPhoBien from '../../Components/DanhMucPhoBien/index';
import HocVienNoiGi from '../../Components/HocVienNoiGi/index';
import TinTucComponent from '../../Components/TinTucComponent/index';
import Footer from '../../Layouts/Footer/index' ;
import Preload  from '../../Components/PreloadComponent/index';
import WOW from 'wowjs';
import _, { isEmpty } from 'lodash';

const { Search } = Input;

    
 class Home extends Component {

    constructor(props){
        super(props) ;
        this.state={
            dataReviewCourse:[]
        }
    }

    onDataGioHangReviewCourses=(dataDaChon)=>{
        this.props.dispatch(GioHangAction(dataDaChon))
    }

    componentDidMount(){
        this.props.dispatch(CourseAction);
        let dataLocalCourseReviews = []
       {isEmpty(localStorage.getItem('Course'))?dataLocalCourseReviews =[]: dataLocalCourseReviews = localStorage.getItem('Course');}
        const dataReviews = JSON.parse(dataLocalCourseReviews).reverse();
        this.setState({
            dataReviewCourse : dataReviews
        })
        new WOW.WOW({
            live: false
        }).init();
    }
    
    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }
    render() {
        console.log(this.state.dataReviewCourse)
        return (
            <Fragment>
                <Preload />
            <div className="container-fluid Home" style={{padding:"0",maxHeight:"5800px"}} >
                <div className="wrap-header">
                        <div className="space-Div"></div>
                        <div className="row row-title">
                        <h1 className="title-h1">
                        <Typed 
                            strings={[
                                'HỌC TỐT NHẤT.HỌC MỌI NƠI',
                                'TÌM KIẾM NHỮNG KHÓA HỌC',
                                'HỌC TỐT NHẤT.HỌC MỌI NƠI']}
                                typeSpeed={40}
                                backSpeed={40}
                                >
                            </Typed>
                        </h1>
                        </div>
                        <div className="row search" style={{margin:"70px auto"}}>
                                <div className="col-md-4 col-sm-5" style={{margin:"0 auto"}}>
                                    <Search placeholder="Tìm Kiếm Khóa Học" onSearch={value => {if(!_.isEmpty(value)){
                                        this.props.history.push(`/course/${value}`)
                                    }}} enterButton  size="large"/>
                                </div>
                        </div>
                        <div className="row title-bottom">
                        <div className="circle" onClick={() => scroll.scrollTo(750)}>   
                                <DownOutlined style={{ fontSize: '25px', color: '#08c', margin:"0 auto" }} className="down-button" />
                        </div>
                        </div>
                </div>
                <div className="space-Div" id="spaceDiv"></div>
                <div className="container infor-content" >
                            <div className="row infor-row" style={{justifyContent:"center"}}>   
                            <div className="col-md-4 infor-col" style={{marginRight:"30px"}}>
                                <h5 className="whatyouget" style={{color:"white",padding:"20px 0"}}> BẠN NHẬN ĐƯỢC</h5>
                                <div className="div-span">
                                    <span style={{fontWeight:"bolder"}}>Bạn xây dựng không gian  </span>
                                    <span>
                                       học trực tuyến với những gì bạn muốn , khi bạn thực hành những ứng dụng hỗ trợ cho bạn bao gồm xem và nghe các videos  .
                                    </span>
                                </div>
                                <div className="div-p">
                                    <p style={{paddingTop:"5px"}}><CheckOutlined /> 4024 CÁC VIDEO KHÓA HỌC</p>
                                    <p><CheckOutlined />KHÔNG GIỚI HẠN BAO NHIÊU LẦN TRUY CẬP</p>
                                    <p><CheckOutlined /> NHỮNG GIÁO VIÊN CHUYÊN GIA CÁC LĨNH VỰC</p>
                                    <p><CheckOutlined /> KIẾN THỨC VỮNG</p>
                                    <p><CheckOutlined /> HƯỚNG ĐẾN VIỆC HỌC TẬP </p>
                                    <p><CheckOutlined /> ĐAM MÊ VỚI NHỮNG KHÓA HỌC </p>
                                    <p><CheckOutlined />KHÓA HỌC ĐÁNG TIN CẬY</p>
                                </div>
                            </div>
                            <div className="col-md-7 infor-col right-row">
                                <div className="row ">
                                    <div className="col-md-6 right-col wow bounce" style={{    background: "black"}}>
                                        <h6 style={{color:"white"}}>LÀM THẾ NÀO ĐỂ KHỞI TẠO</h6>
                                        <p>HƯỚNG DẪN KỸ THUẬT</p>
                                        <div className="div-span">
                                        Dễ dàng sử dụng , chỉ cần đăng ký tài khoản và đăng nhập , click vào các khóa học bạn mong muốn , hoàn thành thanh toán và bắt đầu học trực tuyến mọi lúc mọi nơi.
                                          </div>
                                        <div className="number-dv" style={{color:"#ffcb00"}}>
                                            Chỉ còn : 399.000 vnd 
                                        </div>
                                    </div>
                                    <div className="col-md-6 right-col" style={{background:"#26394b"}}>
                                    <h6 style={{color:"white"}}>LÀM THẾ NÀO ĐỂ KHỞI TẠO</h6>
                                        <p>HƯỚNG DẪN ĐĂNG KÝ KHÓA HỌC</p>
                                        <div className="div-span">
                                                Dễ dàng sử dụng , chỉ cần đăng ký tài khoản và đăng nhập , click vào các khóa học bạn mong muốn , hoàn thành thanh toán và bắt đầu học trực tuyến mọi lúc mọi nơi.
                                             </div>
                                        <div className="number-dv" style={{color:"#ffcb00"}}>
                                        Chỉ còn : 399.000 vnd 
                                        </div>
                                    </div>
                                    <div className="col-md-6 right-col" style={{background:"rgb(14, 112, 76)"}}>
                                    <h6 style={{color:"white"}}>LÀM THẾ NÀO ĐỂ KHỞI TẠO</h6>
                                        <p>HƯỚNG DẪN KỸ THUẬT</p>
                                        <div className="div-span">
                                        Dễ dàng sử dụng , chỉ cần đăng ký tài khoản và đăng nhập , click vào các khóa học bạn mong muốn , hoàn thành thanh toán và bắt đầu học trực tuyến mọi lúc mọi nơi.
                                        </div>
                                        <div className="number-dv" style={{color:"#ffcb00"}}>
                                        Chỉ còn : 399.000 vnd 
                                        </div>
                                    </div>
                                    <div className="col-md-6 right-col" style={{background:"#26394b",borderTop:" 0.5px dotted "}}>
                                    <h6 style={{color:"white"}}>LÀM THẾ NÀO ĐỂ KHỞI TẠO</h6>
                                        <p>HƯỚNG DẪN KỸ THUẬT</p>
                                        <div className="div-span">
                                        Dễ dàng sử dụng , chỉ cần đăng ký tài khoản và đăng nhập , click vào các khóa học bạn mong muốn , hoàn thành thanh toán và bắt đầu học trực tuyến mọi lúc mọi nơi.
                                            </div>
                                        <div className="number-dv" style={{color:"#ffcb00"}}>
                                        Chỉ còn : 399.000 vnd 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                </div>               
                <PopularCourses />
                <CourseReview courses={this.state.dataReviewCourse} onDataGioHang={this.onDataGioHangReviewCourses} />
                <CourseFrontEnd  />
                <ComponentHour  />
                <DanhMucPhoBien />
                <HocVienNoiGi />
                <TinTucComponent />
                <Footer />
            </div>
            </Fragment>
        )
    }
}

const mapStateToProps =(state)=>{
    return {
        dataCourseReview : state.Courses
    }
}
export default connect(mapStateToProps)(Home);