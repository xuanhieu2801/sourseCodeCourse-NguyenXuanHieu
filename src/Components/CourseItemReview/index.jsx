import React, { Component } from 'react';
import {Popover,Button,Rate} from 'antd';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import {connect} from 'react-redux';
import _ from 'lodash';
import './CourseItemReview.css'
export default class CourseItemReview extends Component {


    constructor(props){
        super(props);
        this.state = {
            isTurnOn : true ,
        }
    }



    scrollToTop=()=>{
        scroll.scrollToTop();
    }

    onButton=()=>{
        this.setState({
            isTurnOn:false
        })
    }

    onGioHang(course){
        this.props.dataGioHang(course);
    }

    
    render() {
        const {course} = this.props ;
        const content = (
            <div className="Detail-courseItem">
                <p style={{ color: "#9e9e9e",marginTop:"20px" }}>{course.moTa}</p>
                <p>
                    <span style={{ background: "#ffe799", color: "#593d00", padding: "2px" }}>Khuyến Mãi Lớn  </span>
                    <span style={{paddingLeft:"10px",color:"green"}}>{course.ngayTao} Cập nhật</span>
                </p>
                <p>
                    {course.nguoiTao.tenLoaiNguoiDung} : {course.nguoiTao.taiKhoan}
                </p>
                <p style={{paddingRight:"20px",position:"absolute",bottom:"70px",right:"0",color:"red"}}>
                    399.000 đồng
                </p>
                <div style={{position:"absolute" , bottom:"20px" ,width:"100%"}} onClick={this.onButton}>
                    {this.state.isTurnOn ? <div onClick={() => this.onGioHang(course)} ><Button type="primary" style={{ width: "85%", height: "40px" }} >Mua Ngay</Button></div> :
                        <Button type="danger" style={{ width: "85%", height: "40px" }} onClick={this.scrollToTop}>Đến giỏ hàng</Button>
                    }  
                </div>
                
            </div>
        );
        return (
            <Popover content={content} title={course.tenKhoaHoc} trigger="hover" placement="right">
            <div className="card courseItem-card" id="cardReivew" style={{ margin: "0 20px" ,width:"220px" , marginBottom:"20px" }}>
                    <img className="card-img-top courseItem-top" src={course.hinhAnh} height={180}  />
                    <div className="card-body courseItem-body" style={{height:"130px",textAlign:"left"}}>
                        <h5 className="card-title courseItem-h" >{course.tenKhoaHoc.substr(0,16)+".."}</h5>
                        <p>  <Rate disabled defaultValue={4} /> (345)  </p>
                    </div>
                </div>
            </Popover>
        )
    }
}
