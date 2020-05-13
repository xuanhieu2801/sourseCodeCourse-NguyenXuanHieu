import React, { Component ,Fragment } from 'react';
import './CoursesPageCss.css';
import { Breadcrumb } from 'antd';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import CourseItem from '../../Components/CourseItem/index';
import Axios from 'axios' ;
import {GioHangAction} from '../../Redux/Action/CourseAction';
import { Input ,Collapse ,Tag } from 'antd';
import WOW from 'wowjs';
import FooterPages from '../../Layouts/FooterPages/index'
const { Search } = Input;
const { Panel } = Collapse;
 class Course extends Component {

    constructor(props){
        super(props);
        this.state={
            mangRender :[]
            , 
            searchKhoaHoc : "",
        }
    }

    componentDidMount(){
        new WOW.WOW({
            live: false
        }).init();
        const mangPage1 = this.props.CourseRedux.filter((item,index)=>{
            return index < 10 })
        this.setState({
            mangRender: mangPage1
        })
        if(this.props.match.params.idCourse !== "KhoaHoc"){
            var mangserch =  this.props.CourseRedux.filter((item)=>{
                return item.biDanh.indexOf(this.props.match.params.idCourse) > -1 
            })
        this.setState({
            mangRender :mangserch 
        })    
        }
    
    }
    onChangeCate=(e)=>{
            if(e.target.value == "all"){
                this.setState({
                    mangRender:this.props.CourseRedux
                })
            } else(
            Axios({
                method:"GET",
                url:(`http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${e.target.value}&MaNhom=GP01`)
            }).then((res)=>{
                this.setState({
                    mangRender:res.data
                })
            }).catch(error=>console.log(error)))
    }

    onGioHang=(course)=>{
        this.props.dispatch(GioHangAction(course))
    }

    onPage1=()=>{
        Axios({
            method:"GET",
            url:("http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=1&pageSize=10&MaNhom=GP01")
        }).then((res)=>{
            console.log(res.data.items)
            this.setState({
                mangRender: res.data.items
            })
        })
    }
    onPage2=()=>{
        Axios({
            method:"GET" , 
            url :("http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=2&pageSize=10&MaNhom=GP01")
        }).then(res=>{this.setState({mangRender:res.data.items})})
    }

    // search khoa hoc rong tra ve mang khoa hoc 
    onSearchNull=(e)=>{
        this.setState({
            [e.target.name]:e.target.value 
        },()=>{
                if(this.state.searchKhoaHoc === ''){
                    const mangPage1 = this.props.CourseRedux.filter((item,index)=>{
                        return index < 10 })
                    this.setState({
                        mangRender: mangPage1
                    })
                }
        })
    }

    log=(e)=>{
        console.log(e);
      }
    render() {
            const render = this.state.mangRender.map((item,index)=>{
                return <div className="col-md-5 cardItem-coures" style={{padding:"0",marginTop:"50px"}}
                key={index}>
                                <CourseItem course={item}  dataGioHang={this.onGioHang} />
                        </div>
            })
        return (
            <Fragment>
                <div className="container-fluid wrap-pageCourses"> 
                </div>
                <div className="container-fluid title-pageCourses">
                    <h2 className="h2-coursesPage wow fadeIn">Khóa Học</h2>
                    <h4 className="h4-coursePage wow fadeIn"><Breadcrumb>
                                <Breadcrumb.Item><Link to="/home">Trang Chủ</Link></Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    Khóa Học
                                </Breadcrumb.Item>
                            </Breadcrumb></h4>
                </div>
                <div className="container-fluid wrap-content-pageCourses">
                    <div className="container" style={{padding:"0" }}>
                        <div className="row">
                            <div className="col-md-8 col-xs-12 " style={{padding:"0"}}>
                                <div className="row">
                                    <div className="col-md-4 result-col-khoahoc" style={{padding:"0",paddingTop:"12px"}}>
                                        <div className="instructor_search_result style2">
                                            <p className="mt10 "><span className="color-dark pr10">{this.state.mangRender.length}</span> Khóa Học <span class="color-dark pr10">1,236</span> Video Hướng Dẫn </p>
                                        </div>
                                    </div>
                                    <div className="col-md-8" style={{padding:"0"}}>
                                        <div className="row" >
                                            <div className="candidate_revew_select text-right col-md-4 col-xs-12 col-sm-12" >           
                                                <select id="mySelect" onChange={this.onChangeCate}>
                                                <option value="all"  >Tất Cả</option>
                                                <option value='Design' > Thiết kế Web</option>
                                                <option  value="FrontEnd">Lập trình Front end</option>
                                                <option value="TuDuy">Tư duy lập trình</option>
                                                <option value="BackEnd">Lập trình Backend</option>
                                                <option value="DiDong">Lập trình di động</option>
                                                <option value="FullStack">Lập trình Full Stack</option>
                                            </select>
                                            </div>
                                            <div className="search text-right col-md-8 col-xs-12 col-sm-12">
                                                <Search
                                                    placeholder="tìm kiếm khóa học"
                                                    enterButton="Tìm Kiếm"
                                                    size="large"
                                                    name = "searchKhoaHoc"
                                                    onChange={this.onSearchNull}
                                                    onSearch={value => {
                                                        const mangSearch = this.state.mangRender.filter((item=>{
                                                            return item.biDanh.indexOf(value) > -1 
                                                        }))
                                                        this.setState({
                                                            mangRender : mangSearch
                                                        })
                                                    }}
                                                    />
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wrap-card-courses">
                                       <div className="row wow fadeIn" >
                                       {render}
                                       </div>
                                       </div>
                            </div>
                            <div className="col-md-4 columm-right">
                                <div>
                                    <Collapse  className="selected_filter_widget" defaultActiveKey={['1']} style={{background:"white"}}>
                                        <Panel header="Selected Filter"  key="1" style={{background:"white",paddingLeft:"15px"}}>
                                        <Tag closable onClose={this.log}>
                                            FrontEnd
                                        </Tag>
                                        <Tag closable onClose={this.log}>
                                            BackEnd
                                        </Tag>
                                        <Tag closable onClose={this.log}>
                                                    FullStack
                                        </Tag>
                                        <Tag closable onClose={this.log} style={{marginTop:"15px",marginBottom:"100px"}}>
                                                    Design
                                        </Tag>
                                        </Panel>
                                        </Collapse> 
                                        <Collapse className="selected_filter_widget" defaultActiveKey={['1']} style={{background:"white",marginTop:"50px"}}>
                                        <Panel header="Thư Mục"  key="1" style={{background:"white",paddingLeft:"15px"}}>
                                                    <p>Front-End <span>(20)</span></p>
                                                    <p>Back-End <span>(12)</span></p>
                                                    <p>FullStack <span>(25)</span></p>
                                                    <p>Design <span>(12)</span></p>
                                                    <p>Di Động <span>(9)</span></p>
                                                    <p>Tư Duy <span>(8)</span></p>
                                        </Panel>
                                        </Collapse>
                                        <Collapse className="selected_filter_widget" defaultActiveKey={['1']} style={{background:"white",marginTop:"50px"}}>
                                        <Panel header="Xếp hạng"  key="1" style={{background:"white",paddingLeft:"15px"}}>
                                                    <p>5 sao và cao hơn <span>(123000)</span></p>
                                                    <p>4 sao và cao hơn <span>(23789)</span></p>
                                                    <p>3 sao và cao hơn <span>(25)</span></p>
                                                    <p>2 sao và cao hơn <span>(12)</span></p>
                                                    <p>1 sao và cao hơn  <span>(2)</span></p>
        
                                        </Panel>
                                        </Collapse>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{marginTop:"50px"}}>
                            <div className="col-md-8">
                                    <nav aria-label="Page navigation example" style={{marginTop:"40px"}}>
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <a className="page-link" onClick={this.onPage1} aria-label="Previous">
                                                    <span aria-hidden="true">«</span>
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                            </li>
                                            <li className="page-item"><a className="page-link" onClick={this.onPage1}>1</a></li>
                                            <li className="page-item"><a className="page-link" onClick={this. onPage2}>2</a></li>
                                            <li className="page-item"><a className="page-link" onClick={this.onPage2}>3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" onClick={this.onPage2} aria-label="Next">
                                                    <span aria-hidden="true">»</span>
                                                    <span className="sr-only">Next</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FooterPages />
            </Fragment>
        )
    }
}


const mapStateToProps =(state)=>{
    return{
        CourseRedux  : state.Courses
    }
}
export default connect(mapStateToProps)(Course);