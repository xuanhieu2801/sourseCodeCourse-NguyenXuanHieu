import React, { Component } from 'react';
import _ from 'lodash' ;
import './ProfileCss.css';
import { ReadOutlined } from '@ant-design/icons';
import { Avatar , Badge , Button} from 'antd';
import Axios from 'axios';
import {Link} from 'react-router-dom'
export default class Profile extends Component {

    constructor(props){
        super(props); 
        this.state={
            khoaHocND : {},
        }
    }
    componentDidMount(){
        const getLocal = localStorage.getItem('taiKhoanND') ; 
        const giaTriLocal = JSON.parse(getLocal) ; 
        if(_.isEmpty(giaTriLocal)){
            return this.props.history.push("/home")
        }

        Axios({
            method:"GET" , 
            url :"http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=1267"
        }).then(res=>{
        return     this.setState({
                khoaHocND : res.data
            })
        })

    }
    render() {


        const layDulieuNDString = localStorage.getItem("taiKhoanND");
        const mangND = JSON.parse(layDulieuNDString);
        return (
            <div className="container-fluid wrap-profile">
                <div className="wrap-black container-fluid">
                            <div className="container profile-content" >
                                <div className="row row-profile">
                                <div className="col-md-3 profile-left">
                                    <div className="row row-infor-profile">
                                            <div className="col-md-3 col-infor-profile"> <Avatar size={50} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></div>
                                            <div className="col-md-9 col-infor-profile"><p style={{fontSize:"24px",textAlign:"left" ,marginBottom:"0"}}>{mangND.hoTen}</p>
                                                <p style={{textAlign:"left"}}>{mangND.maLoaiNguoiDung}</p>
                                            </div>
                                    </div>

                                    <ul className="nav nav-tabs list-profile">
                                    <li className="active "><a data-toggle="tab" href="#home" className="li-profile active">Thông Tin Tài Khoản </a></li>
                                    <li><a data-toggle="tab" className="li-profile" href="#menu1">Khóa Học Của Tôi</a></li>
                                    <li><a data-toggle="tab" className="li-profile" href="#menu2">Danh Sách Yêu Thích</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-8 profile-right">
                                <div className="tab-content tab-profile-content">
                                        <div id="home" className="tab-pane fade in active show" style={{textAlign:"left"}}>
                                            <h3>Thông Tin Tài Khoản</h3>
                                            <div className="row show-infor" style={{marginTop:"50px"}}>
                                                <div className="col-md-5">
                                                <Avatar size={200} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                                </div>
                                                <div className="col-md-7">
                                                    <table class="table table-striped table-inverse table-responsive">
                                                        <thead class="thead-inverse">
                                                            </thead>
                                                            <tbody >
                                                                <tr>
                                                                    <th>Họ và Tên :</th>
                                                                    <td style={{width:"70%"}}>{mangND.hoTen} </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Số ĐT :</th>
                                                                    <td style={{width:"70%"}}>{mangND.soDT}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Email :</th>
                                                                    <td style={{width:"70%"}}>{mangND.email}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Ngày sinh :</th>
                                                                    <td style={{width:"70%"}}>19/12/1992</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Giới tính  :</th>
                                                                    <td style={{width:"70%"}}>Nam</td>
                                                                </tr>
                                                            </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="menu1" className="tab-pane fade">
                                            <h3>Khóa Học Của Tôi</h3>
                                            <div className="row" style={{marginTop:"80px"}}>
                                                <div className="col-md-4">
                                                <div className="card">
                                            <img className="card-img-top" src={this.state.khoaHocND.hinhAnh} height={150} />
                                            <div className="card-body"> 
                                                <h4 className="card-title">{this.state.khoaHocND.tenKhoaHoc}</h4>
                                                <p className="card-text">{this.state.khoaHocND.moTa}</p>
                                            </div>
                                        </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div id="menu2" className="tab-pane fade">
                                        <h3 style={{marginBottom:"30px"}}>Danh Sách Yêu Thích </h3>
                                        <Badge count={0} size={500} showZero>
                                                        <ReadOutlined  style={{fontSize:"200px"}} />
                                                        </Badge>
                                          <h4>Bạn chưa có khoá học nào trong danh sách yêu thích!</h4>      
                                         <Link to="/"> <Button danger>Khám phá hàng ngàn khóa học trên reading</Button> </Link>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                </div>
            </div>
        )
    }
}
