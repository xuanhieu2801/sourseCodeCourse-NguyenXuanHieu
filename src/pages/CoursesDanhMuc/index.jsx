import React, { Component } from 'react' ; 
import Axios from 'axios' ;
import Course from '../../Components/Courses/index';
import {connect} from 'react-redux';
import {GioHangAction} from '../../Redux/Action/CourseAction' ;
import './CoursesPageDanhMucCss.css';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
 class CourseDanhMuc extends Component {

    constructor(props){
        super(props);
        this.state={
            dulieuDanhMuc : [],
        }
    }

    onDataGioHangDanhMuc = (dataDaChon)=>{
        this.props.dispatch(GioHangAction(dataDaChon))
    }

componentDidMount(){
    Axios({
        method:"GET" , 
        url :`http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${this.props.match.params.idCate}&MaNhom=GP01`
    }).then(res=>{
            this.setState({
                dulieuDanhMuc : res.data ,
            })
         
    })
      .catch(error=>console.log(error))
}

    render() {
        
        return (
            <div className="container-fluid page-courseDanhMuc">
               <Breadcrumb style={{marginTop:"70px",marginBottom:"70px" ,fontSize:"40px",textAlign:"left"}}>
                    <Breadcrumb.Item >
                    Danh Mục Khóa Học
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{this.props.match.params.idCate}</Breadcrumb.Item>
                </Breadcrumb>
                <div className="container-fluid" style={{width:"96%"}}>
                <Course courses={this.state.dulieuDanhMuc} onDataGioHang={this.onDataGioHangDanhMuc}  />
                </div>
            </div>
        )
    }
}



export default connect()(CourseDanhMuc) ;