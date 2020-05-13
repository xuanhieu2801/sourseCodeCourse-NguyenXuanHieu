import React, { Component } from 'react';
import './PopularCourses.css';
import Course from "../Courses/index";
import {connect} from "react-redux";
import CourseService from '../../Service/CourseService/index';
import Axios from "axios" ; 
import {GioHangAction} from "../../Redux/Action/CourseAction";
import _ from 'lodash';
class Popular extends Component {


    constructor(props){
        super(props);
        this.state={
            dataDanhMuc : [] , 
            BackEnd : [] , 
            Design : [] , 
            DiDong : [] ,
            FrontEnd:[] , 
            FullStack : [] ,
            TuDuy : [] ,

        }
    }
    componentDidMount(){
        CourseService.LayDanhMucKhoaHoc().then((res)=>{
                this.setState({
                    dataDanhMuc:res.data
                })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    onLayKhoaHocTheoDanhMuc = (maDanhMuc)=>{
        console.log(maDanhMuc)
      return  Axios({
            method:"GET",
            url:`http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}`
        }).then((res)=>{
            switch(maDanhMuc){
                case "BackEnd" :
                    return this.setState({
                        BackEnd : res.data
                    })
                case "Design" :
                    return this.setState({
                        Design : res.data
                    })  
                case "DiDong" :
                    return this.setState({
                        DiDong : res.data
                    })   
                case "FrontEnd" : 
                return this.setState({
                    FrontEnd : res.data
                })
                case "FullStack" : 
                return this.setState({
                    FullStack : res.data 
                })
                case "TuDuy" : 
                return this.setState({
                    TuDuy : res.data
                })
                default :
                return null
            }
        }).catch((err)=>{
            console.log(err)
        })
    }



    onDataGioHangTatCa= (dataDaChon)=>{
        // this.setState({
        //     GioHang1 : [...this.state.GioHang1 , dataDaChon]
        // })
        this.props.dispatch(GioHangAction(dataDaChon))
    }
    onDataGioHangBackEnd= (dataDaChon)=>{
        this.props.dispatch(GioHangAction(dataDaChon))
    }
    onDataGioHangThietKe= (dataDaChon)=>{
        this.props.dispatch(GioHangAction(dataDaChon))
    }
    onDataGioHangDiDong= (dataDaChon)=>{
        this.props.dispatch(GioHangAction(dataDaChon))
    }
    onDataGioHangFrontEnd= (dataDaChon)=>{
        this.props.dispatch(GioHangAction(dataDaChon))
    }
    onDataGioHangFullStack= (dataDaChon)=>{
        this.props.dispatch(GioHangAction(dataDaChon))
    }
    onDataGioHangTuDuy= (dataDaChon)=>{
        this.props.dispatch(GioHangAction(dataDaChon))
    }


    render() {
        const {dataDanhMuc} = this.state ; 
        const renDerDanhMuc = dataDanhMuc.map((danhMuc,index)=>{
            return <li className="nav-item" key={index} onClick={()=>this.onLayKhoaHocTheoDanhMuc(danhMuc.maDanhMuc)}>
                        <a className="nav-link" data-toggle="pill" href={"#"+danhMuc.maDanhMuc}>{danhMuc.tenDanhMuc}</a>
                    </li>
        }) 
        return (
            <div className="container-fluid wrap-popular">
                <div className="space-Div"></div>
                <div className="row row-popular">
                    <p style={{
                        width: "100%",
                        textAlign: "left"
                    }}> <span style={{ fontSize: "30px", fontWeight: "bolder",marginLeft:"120px" }}>Khóa Học</span>
                    </p>
                    <div className="wrap-carousel"> 
                        <ul className="nav nav-pills" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="pill" href="#TATCA">Tất Cả</a>
                            </li>
                            {renDerDanhMuc}
                        </ul>
                        {/* Tab panes */}
                        <div className="tab-content" style={{height:"450px"}}>
                            <div id="TATCA" className="container-fluid tab-pane active"><br />
                                <Course onDataGioHang={this.onDataGioHangTatCa} courses={this.props.CoursesRedux} /> 
                            </div>
                            <div id="BackEnd" className="container-fluid tab-pane fade"><br />
                                <Course onDataGioHang={this.onDataGioHangBackEnd} courses={this.state.BackEnd} />
                            </div>
                            <div id="Design" className="container-fluid tab-pane fade"><br />
                                <Course onDataGioHang={this.onDataGioHangThietKe} courses={this.state.Design} />
                            </div>
                            <div id="DiDong" className="container-fluid tab-pane fade"><br />
                                <Course onDataGioHang={this.onDataGioHangDiDong} courses={this.state.DiDong} />  
                            </div>
                            <div id="FrontEnd" className="container-fluid tab-pane fade"><br />
                                <Course onDataGioHang={this.onDataGioHangFrontEnd} courses={this.state.FrontEnd} />   
                            </div>
                            <div id="FullStack" className="container-fluid tab-pane fade"><br />
                                <Course onDataGioHang={this.onDataGioHangFullStack} courses={this.state.FullStack} />    
                            </div>
                            <div id="TuDuy" className="container-fluid tab-pane fade"><br />
                                <Course onDataGioHang={this.onDataGioHangTuDuy} courses={this.state.TuDuy} />  
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return {
        CoursesRedux : state.Courses ,
        MaXoaKhoaHoc : state.MaXoaKhoaHoc,   

    }
}

export default connect(mapStateToProps)(Popular) ; 