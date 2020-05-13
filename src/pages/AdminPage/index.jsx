import React, { Component ,Fragment} from 'react';
import { Layout, Menu, Breadcrumb ,Avatar  } from 'antd';
import { DollarCircleOutlined ,ContainerOutlined,CreditCardOutlined ,EditOutlined,DeleteOutlined  } from '@ant-design/icons';
import "./AdminCss.css";
import {Bar} from 'react-chartjs-2';
import 'chartjs-plugin-annotation';
import  CourseService from '../../Service/CourseService/index';
import { Form, Input, InputNumber, Button ,Select} from 'antd';
import Axios from 'axios' ;
import _ from 'lodash';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';


const { Option } = Select;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;


const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };
  
export default class Admin extends Component {

    constructor(props){
        super(props);
        this.state={
            cacKhoaHoc : [] ,
            danhSachNguoiDung :[],
            isEdit : false ,
            isEditND:false ,
            maKhoaHoc : '' ,
            biDanh : '',
            tenKhoaHoc:'' ,
            moTa:'',
            hinhAnh:'',
            ngayTao:'',
            maDanhMucKhoaHoc:'',   
            taiKhoan : '', 
            matKhau:'',
            hoTen :'',
            soDT :'',
            maLoaiNguoiDung : 'HV',
            maNhom :'GP06' , 
            email:'',
            iSearch:'',
            searchKhoaHoc:''
            
        }
    }

    componentDidMount(){
     CourseService.LayKhoaHoc().then((res)=>{
             this.setState({
                 cacKhoaHoc : res.data
             })   
     }).catch(error=>{console.log(error)})

     //call api danh sach nguoi dung 

     Axios({
         method:"GET", 
         url : "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP06" , 

     }).then(res=>{
         console.log(res.data)
        this.setState({
            danhSachNguoiDung:res.data
        })
     }).catch(error=>console.log(error))

    }

    // start searchnulluser
    onSearchNull=(e)=>{
        this.setState({
            [e.target.name]  : e.target.value
        },()=>{
            if(this.state.iSearch === ''){
            
                    Axios({
                    method:"GET", 
                    url : "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP06" , 
            
                }).then(res=>{
                    console.log(res.data)
                    this.setState({
                        danhSachNguoiDung:res.data
                    })
                }).catch(error=>console.log(error))
                    }
        })
        
    }
    //end searchnulluser 

    //start search null kh 
    onSearchNullKH=(e)=>{
        console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        },()=>{
            if(this.state.searchKhoaHoc ===''){
                CourseService.LayKhoaHoc().then((res)=>{
                    this.setState({
                        cacKhoaHoc : res.data
                    })   
            }).catch(error=>{console.log(error)})
            }
        })
    }
    //end search null khoa hoc 

    // xoa nguoi dung
    onDeleteND=(value)=>{
        const tkND = JSON.parse(localStorage.getItem('taiKhoanND'));
        const token = tkND.accessToken;
        console.log(value)
        Axios({
            method:"DELETE",
            url:"http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung",
            params:{taiKhoan:value} , 
            headers:{ 'Authorization':'Bearer ' + token }
        }).then(res=>{
            Axios({
                method:"GET", 
                url : "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP06" , 
       
            }).then(res=>{
                console.log(res.data)
               this.setState({
                   danhSachNguoiDung:res.data,
               })
               swal({
                title: "Xóa thành công !",
                icon: "success",
                button: "Thoát",
              });
            }).catch(error=>console.log(error))
            
        })
    }

    onDelete =(e)=>{
        const tkND = JSON.parse(localStorage.getItem('taiKhoanND'));
        const token = tkND.accessToken;
        
        console.log(e)
       return Axios({
            method:"DELETE",
            url:"http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc",
            params : {MaKhoaHoc : e},
            headers:{ 'Authorization':'Bearer ' + token }
        }).then((res)=>{
            if(!_.isEmpty(res.data)){
                return  CourseService.LayKhoaHoc().then((res)=>{
                    this.setState({
                        cacKhoaHoc : res.data
                    })   
            }).catch(error=>{console.log(error)})
            }
        }).catch(error=>{
            
        })
    }

    onDangXuat=()=>{
        localStorage.setItem('taiKhoanND', null);
        this.props.history.push('/home');
    }

    onEdit=(item)=>{
            this.setState({
                isEdit : true , 
                maKhoaHoc : item.maKhoaHoc , 
                biDanh : item.biDanh,
                tenKhoaHoc:item.tenKhoaHoc ,
                moTa:item.moTa,
                hinhAnh:item.hinhAnh,
                ngayTao:item.ngayTao,
                maDanhMucKhoaHoc:item.maDanhMucKhoaHoc,
                
            })
    }

    onThemKhoaHoc=()=>{
        this.setState({
            isEdit : false
        })
    }

    onTest = ()=>{
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yiss!",
          });
    }

    onThemNguoiDung = (e)=>{
        const input = e.target
        this.setState({   
        [input.name]:input.value
        })
    }

    onCallEditND=(nd)=>{
        console.log(nd)
        this.setState({
            taiKhoan : nd.taiKhoan ,
            matKhau:nd.matKhau , 
            hoTen : nd.hoTen,
            soDT :nd.soDT , 
            maLoaiNguoiDung:nd.maLoaiNguoiDung , 
            email : nd.email ,
            isEditND:true
        })
    }

    onEditND=()=>{
        const tkND = JSON.parse(localStorage.getItem('taiKhoanND'));
        const token = tkND.accessToken;
        const ndEdit  = {
            taiKhoan: this.state.taiKhoan,
            matKhau: this.state.matKhau,
            hoTen: this.state.hoTen,
            soDT: this.state.soDT,
            maLoaiNguoiDung: this.state.maLoaiNguoiDung,
            maNhom: "GP06",
            email: this.state.email
        }
        console.log(ndEdit)
        Axios({
            method:"PUT", 
            url : "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung" , 
            data:ndEdit,
            headers : {'Authorization' : 'Bearer ' + token}
        }).then(res=>{
            if(res.data !== null){
                Axios({
                    method:"GET", 
                    url : "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP06" , 
           
                }).then(res=>{
                    console.log(res.data)
                   this.setState({
                       danhSachNguoiDung:res.data
                   })
                }).catch(error=>console.log(error))

                swal({
                    title: "Cập nhật thành công !",
                    icon: "success",
                    button: "Thoát",
                  });
            }
        })
    }

    oncallThemND=()=>{
        this.setState({
            isEditND:false
        })
    }

    onAdd=()=>{
        
        const values = {
            taiKhoan : this.state.taiKhoan, 
            matKhau:this.state.matKhau,
            hoTen :this.state.hoTen,
            soDT :this.state.soDT,
            maLoaiNguoiDung : this.state.maLoaiNguoiDung,
            maNhom :'GP06' , 
            email:this.state.email,
        }
        const tkND = JSON.parse(localStorage.getItem('taiKhoanND'));
        const token = tkND.accessToken;
        
     Axios({
        method:"POST",
        url:"http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
        data : values,
        headers : {'Authorization' : 'Bearer ' + token}
    }).then(res=>{
        swal({
            title: "Thêm thành công !",
            icon: "success",
            button: "Thoát",
          })
         Axios({
            method:"GET", 
            url : "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP06" , 
   
        }).then(res=>{
            console.log(res.data)
           this.setState({
               danhSachNguoiDung:res.data
           })
        }).catch(error=>console.log(error))
    })
    
    }

    render() {
            const onFinish = values => {
                const tkND = JSON.parse(localStorage.getItem('taiKhoanND'));
                const token = tkND.accessToken;
                console.log(values)
            return   Axios({
                    method:"POST",
                    url:"http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc",
                    data : values ,
                    headers:{ 'Authorization':'Bearer ' + token }
                }).then((res)=>{if(!_.isEmpty(res.data)){
                    this.setState({
                        cacKhoaHoc : JSON.parse(localStorage.getItem('Course')),
                    })   
                    swal({
                        title: "Đã Thêm Khóa Học!",
                        icon: "success",
                        button: "OK",
                    });
                }}).catch((error)=>{
                    console.log(error)
                })
            };

            const onFinishEdit = values =>{
                console.log(values)
                const tkND = JSON.parse(localStorage.getItem('taiKhoanND'));
                const token = tkND.accessToken;
                Axios({
                    method:"PUT" , 
                    url:"http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/CapNhatKhoaHoc" ,
                    data:values ,
                    headers:{ 'Authorization':'Bearer ' + token }
                }).then((res)=>{if(!_.isEmpty(res.data)){
                    this.setState({
                        cacKhoaHoc : JSON.parse(localStorage.getItem('Course'))
                    })   
                }}).catch((error)=>{
                    console.log(error)
                })
            };
        const {cacKhoaHoc} = this.state ;
        const renderKhoaHoc =    cacKhoaHoc.map((item,index)=>{
                return <tr key={index}>
                            <td><img src={item.hinhAnh} width={50} height={50}/><span style={{fontWeight:"bolder",marginLeft:"10px",position:"relative",left:"88px"}}>{item.tenKhoaHoc}
                            <br/><span style={{position:"relative",left:"62px",top:"-16px",fontWeight:"100"}}>{item.danhMucKhoaHoc.tenDanhMucKhoaHoc}</span></span>
                            </td>   
                            <td style={{textAlign:"center",paddingTop:"33px"}}>{item.nguoiTao.hoTen}</td>
                            <td style={{textAlign:"center",paddingTop:"33px"}}>{item.ngayTao}</td>
                            <td style={{textAlign:"center",paddingTop:"33px"}}>
                                <button type="button" style={{padding:"6px 10px"}} className="btn btn-primary" data-toggle="modal" data-target="#modelId" onClick={()=>{this.onEdit(item)}}><EditOutlined style={{position:"relative", top:"-4px"}} /></button>
                                <button type="button" style={{padding:"6px 10px"}} className="btn btn-danger" style={{marginLeft:"10px"}} onClick={()=>{
                                    this.onDelete(item.maKhoaHoc)
                                }}><DeleteOutlined style={{position:"relative", top:"-4px"}} /></button>    
                            </td>
                    </tr>
        })   ;
        const {danhSachNguoiDung}=this.state ; 
        const renderNguoiDung = danhSachNguoiDung.map((nd,index)=>{
            return <tr key={index}>
                            <td>
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                {nd.taiKhoan}
                                <br></br>
                          {nd.maLoaiNguoiDung == 'GV' ?  <span style={{background:"#c41c1c",color:"white",marginLeft:"-9px",padding:"0 16px",borderRadius:"13px",marginTop:"4px"}}>
                                {nd.maLoaiNguoiDung}
                                </span>: <span style={{background:"green",color:"white",marginLeft:"-9px",padding:"0 16px",borderRadius:"13px",marginTop:"4px"}}>
                                {nd.maLoaiNguoiDung}
                                </span>} 
                            </td>
                            <td>
                                {nd.hoTen}
                            </td>
                            <td>
                                {nd.soDt}
                            </td>
                            <td>
                                {nd.email}
                            </td>
                            <td>
                                 <button type="button" style={{padding:"6px 10px"}} data-toggle="modal" data-target="#modalUser" onClick={()=>{this.onCallEditND(nd)}} className="btn btn-primary" style={{marginLeft:"10px"}}>
                                 <EditOutlined style={{position:"relative", top:"-4px"}} />
                                </button>  
                                <button type="button" style={{padding:"6px 10px", marginLeft:"5px"}} className="btn btn-danger" onClick={()=>{this.onDeleteND(nd.taiKhoan)}} ><DeleteOutlined /></button>
                            </td>
                    </tr>
        })
        const  data= {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }
        const options = {
            annotation: {
                annotations: [{
                    drawTime: 'afterDatasetsDraw',
                    borderColor: 'red',
                    borderDash: [2, 2],
                    borderWidth: 2,
                    mode: 'vertical',
                    type: 'line',
                    value: 10,
                    scaleID: 'x-axis-0',
                }]
            },
            maintainAspectRation: false
        };

        return (
            <div className="container-fluid wrap-admin" style={{ padding: "0px" }}>
                <nav className="navbar navbar-expand-sm  bg-dark  ">
                    <a className="navbar-brand" style={{ color: "green", marginLeft: "40px" }}>Admin Panel</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" style={{ justifyContent: "flex-end" }} >
                        <ul className="navbar-nav mr-right mt-2 mt-lg-0" >
                            <li className="nav-item active">
                                <Link className="nav-link" to="/home" style={{ color: "white" }}>Trang Chủ <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: "white" }} onClick={this.onDangXuat} >Đăng Xuất</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Layout>
                    <Sider width={200} className="site-layout-background">

                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                            className="nav nav-tabs"
                        >
                            <Menu.Item key="1" className="nav-item">
                                <a className="nav-link active " data-toggle="tab" href="#home">Dashboard</a>
                            </Menu.Item>
                            <Menu.Item key="2" className="nav-item">
                                <a class="nav-link " data-toggle="tab" href="#menu1">Quản Lý Người Dùng</a>
                            </Menu.Item>
                            <Menu.Item key="3" className="nav-item">
                                <a class="nav-link " data-toggle="tab" href="#menu2">Các Khóa Học </a>
                            </Menu.Item>
                            <Menu.Item key="4" className="nav-item">
                                <a class="nav-link " data-toggle="tab" href="#menu3">Tin Nhắn Đến</a>
                            </Menu.Item>

                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px', height: "1000px", overflowY: "hidden" }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <div className="tab-content">
                                <div className="tab-pane container active" id="home">
                                    <div className="row">
                                        <div className="col-md-4 col-lg-6 col-xl">
                                            <div className="card card-stats">
                                                {/* Card body */}
                                                <div className="card-body">
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            {/* Title */}
                                                            <h6 className="card-title text-uppercase text-muted mb-2"> Budget </h6>
                                                            {/* Heading */}
                                                            <span className="h4 mb-0"> $24,50 </span>
                                                            {/* Badge */}
                                                            <span className="badge badge-soft-warning mt-n1"> +3.5% </span>
                                                        </div>
                                                        <div className="col-auto">
                                                            {/* Icon */}
                                                            <div className="icon bg-gradient-warning text-white rounded-circle icon-shape">
                                                                <DollarCircleOutlined style={{ fontSize: "24px", paddingTop: "13px" }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-lg-6 col-xl">
                                            <div className="card card-stats">
                                                {/* Card body */}
                                                <div className="card-body">
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            {/* Title */}
                                                            <h6 className="card-title text-uppercase text-muted mb-2"> Orders Received </h6>
                                                            {/* Heading */}
                                                            <span className="h4 mb-0"> 87.5K</span>
                                                            {/* Badge */}
                                                            <span className="badge badge-soft-primary mt-n1"> +5.5% </span>
                                                        </div>
                                                        <div className="col-auto">
                                                            {/* Icon */}
                                                            <div className="icon bg-gradient-primary text-white rounded-circle icon-shape">
                                                                <ContainerOutlined style={{ fontSize: "24px", paddingTop: "13px" }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-lg-6 col-xl">
                                            <div className="card card-stats">
                                                {/* Card body */}
                                                <div className="card-body">
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            {/* Title */}
                                                            <h6 className="card-title text-uppercase text-muted mb-2"> Subscribers Gained </h6>
                                                            {/* Heading */}
                                                            <span className="h4 mb-0"> 92.6k </span>
                                                        </div>
                                                        <div className="col-auto">
                                                            {/* Icon */}
                                                            <div className="icon bg-gradient-danger text-white rounded-circle icon-shape">
                                                                <CreditCardOutlined style={{ fontSize: "24px", paddingTop: "13px" }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row wrap-bar-chart" style={{ marginTop: "50px" }}>
                                        <Bar
                                            data={data}
                                            width={100}
                                            height={50}
                                            options={options}
                                        />
                                    </div>
                                </div>

                                {/* //quản lý khóa học */}
                                <div className="tab-pane container fade" id="menu1">
                                    <div className="container-fluid wrap-user">
                                        <div className="row row-user">
                                            <Button type="primary" data-toggle="modal" data-target="#modalUser" onClick={this.oncallThemND}>Thêm Người Dùng</Button>
                                            <div className="wrap-search-user">
                                                <Search placeholder="tìm kiếm tên tài khoản " name="iSearch" onChange={this.onSearchNull} onSearch={value => {
                                                    const mangTimKiemND = this.state.danhSachNguoiDung.filter((nd, index) => {
                                                        return nd.taiKhoan.indexOf(value) > -1
                                                    })
                                                    this.setState({
                                                        danhSachNguoiDung: mangTimKiemND
                                                    })
                                                }} enterButton />
                                            </div>
                                        </div>
                                        <div className="row row-table-user">
                                            <table className="table table-user">
                                                <thead>
                                                    <tr style={{ textAlign: "left" }}>
                                                        <th>Tài Khoản </th>
                                                        <th>Tên người dùng</th>
                                                        <th>Số điện thoại</th>
                                                        <th>Email</th>
                                                        <th>Chức năng</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {renderNguoiDung}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                {/* Quản lý user */}
                                <div className="tab-pane container fade" id="menu2">
                                    <div className="row row-wrap-button" style={{ justifyContent: "space-between" }}>
                                        <button type="button" className="btn btn-success" data-toggle="modal" data-target="#modelId" onClick={this.onThemKhoaHoc}>Thêm Khóa Học</button>
                                        <Search
                                            placeholder="Tìm kiếm khóa học"
                                            name="searchKhoaHoc"
                                            onChange={this.onSearchNullKH}
                                            onSearch={value => {
                                                const timKH = cacKhoaHoc.filter(item => {
                                                    return item.biDanh.indexOf(value) > -1
                                                })

                                                return this.setState({
                                                    cacKhoaHoc: timKH
                                                })
                                            }}
                                            style={{ width: 200 }}
                                        />
                                    </div>
                                    <div className="row row-wrap-tableCourse" style={{ marginTop: "50px" }}>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Tên Khóa Học</th>
                                                    <th>Người tạo</th>
                                                    <th>Ngày khởi tạo</th>
                                                    <th>Thao tác</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {renderKhoaHoc}
                                            </tbody>
                                        </table>

                                        {/* modal them khoa hoc */}
                                        <div>
                                            {/* Button trigger modal */}
                                            {/* Modal */}
                                            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            {this.state.isEdit === false ? <h5 className="modal-title">Thêm khóa học</h5> : <h5 className="modal-title">Cập nhật khóa học</h5>}
                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">×</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <Form
                                                                name="validate_other"
                                                                {...formItemLayout}
                                                                onFinish={this.state.isEdit === false ? (value) => { onFinish(value) } : onFinishEdit}
                                                                initialValues={{
                                                                    'luotXem': 0,
                                                                    'danhGia': 0,
                                                                    'maNhom': 'GP01',
                                                                    'taiKhoanNguoiTao': "string",
                                                                }
                                                                }

                                                            >

                                                                {/* //maKhoaHoc */}
                                                                <Form.Item >
                                                                    <Form.Item name="maKhoaHoc">
                                                                        {this.state.isEdit === false ? <Input placeholder="Hãy nhập mã khóa học" /> : <Input placeholder={this.state.maKhoaHoc} />}
                                                                    </Form.Item>
                                                                </Form.Item>
                                                                {/* /biDanh */}
                                                                <Form.Item >
                                                                    <Form.Item name="biDanh">
                                                                        {this.state.isEdit === false ? <Input placeholder="Hãy nhập tên bí danh" /> : <Input placeholder={this.state.biDanh} />}
                                                                    </Form.Item>
                                                                </Form.Item>
                                                                {/* /tenKhoaHoc */}
                                                                <Form.Item >
                                                                    <Form.Item name="tenKhoaHoc">
                                                                        {this.state.isEdit === false ? <Input placeholder="Hãy nhập tên khóa học" /> : <Input placeholder={this.state.tenKhoaHoc} />}

                                                                    </Form.Item>
                                                                </Form.Item>
                                                                {/* /moTa */}
                                                                <Form.Item >
                                                                    <Form.Item name="moTa">
                                                                        {this.state.isEdit === false ? <Input placeholder="Hãy nhập mô tả" /> : <Input placeholder={this.state.moTa} />}

                                                                    </Form.Item>
                                                                </Form.Item>
                                                                {/* /luotXem */}
                                                                <Form.Item style={{ display: "none" }} >
                                                                    <Form.Item name="luotXem">
                                                                        <Input />
                                                                    </Form.Item>
                                                                </Form.Item>
                                                                {/* /danhGia */}
                                                                <Form.Item style={{ display: "none" }} >
                                                                    <Form.Item name="danhGia">
                                                                        <Input />
                                                                    </Form.Item>
                                                                </Form.Item>
                                                                {/* /hinhAnh */}
                                                                <Form.Item>
                                                                    <Form.Item name="hinhAnh">
                                                                        {this.state.isEdit === false ? <Input placeholder="Hãy thêm source ảnh" /> : <Input placeholder={this.state.hinhAnh} />}

                                                                    </Form.Item>
                                                                </Form.Item>
                                                                {/* /maNhom */}
                                                                <Form.Item style={{ display: "none" }} >
                                                                    <Form.Item name="maNhom">
                                                                        <Input />
                                                                    </Form.Item>
                                                                </Form.Item>
                                                                {/* /ngayTao */}
                                                                <Form.Item  >
                                                                    <Form.Item name="ngayTao">
                                                                        {this.state.isEdit === false ? <Input placeholder="nhập ngày tạo" /> : <Input placeholder={this.state.ngayTao} />}

                                                                    </Form.Item>
                                                                </Form.Item>
                                                                {/* /maDanhMucKhoaHoc */}
                                                                <Form.Item
                                                                    name="maDanhMucKhoaHoc"
                                                                    hasFeedback
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                            message: 'Chọn mã danh mục khóa học !',
                                                                        },
                                                                    ]}
                                                                >
                                                                    <Select placeholder="Please select a country">
                                                                        <Option value="BackEnd">BackEnd</Option>
                                                                        <Option value="Design">Design</Option>
                                                                        <Option value="DiDong">DiDong</Option>
                                                                        <Option value="FrontEnd">FrontEnd</Option>
                                                                        <Option value="FullStack">FullStack</Option>
                                                                        <Option value="TuDuy">TuDuy</Option>
                                                                    </Select>
                                                                </Form.Item>
                                                                {/* /taiKhoanNguoiTao    */}
                                                                <Form.Item style={{ display: "none" }} >
                                                                    <Form.Item name="taiKhoanNguoiTao">
                                                                        <Input placeholder="nhập tài khoản người tạo" />
                                                                    </Form.Item>
                                                                </Form.Item>
                                                                <Form.Item
                                                                    wrapperCol={{
                                                                        span: 12,
                                                                        offset: 6,
                                                                    }}
                                                                >
                                                                    {this.state.isEdit === false ?
                                                                        <Button type="primary" htmlType="submit" style={{ marginTop: "30px" }}>
                                                                            Thêm Khóa Học
                                                                        </Button>
                                                                        : <Button type="primary" style={{ marginTop: "30px" }} htmlType="submit" >
                                                                            Cập nhật khóa học
                                                                        </Button>
                                                                    }
                                                                </Form.Item>
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane container fade" id="menu3">
                                    <button type="button" class="btn btn-primary" onClick={this.onTest}>test swt</button>
                                </div>
                            </div>
                            {/* //modal nguoi dung  */}
                            <div>
                                {/* Modal */}
                                <div className="modal fade" id="modalUser" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                {this.state.isEditND === false ? <h5 className="modal-title">Thêm người dùng </h5> : <h5 className="modal-title">Cập nhật người dùng </h5>}
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="row row-themND">
                                                    <div className="col-md-12">
                                                        <form>
                                                            <div className="form-group">
                                                                {this.state.isEditND === false ? <input type="text" name="taiKhoan" value={this.state.taiKhoan} onChange={this.onThemNguoiDung} id className="form-control" placeholder="Nhập tài khoản ..." /> : <input type="text" name="taiKhoan" value={this.state.taiKhoan} onChange={this.onThemNguoiDung} id className="form-control" placeholder="Nhập tài khoản ..." disabled />}
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" name="matKhau" value={this.state.matKhau} onChange={this.onThemNguoiDung} id className="form-control" placeholder="Nhập mật khẩu  ..." />
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" name="hoTen" value={this.state.hoTen} onChange={this.onThemNguoiDung} id className="form-control" placeholder="Nhập họ tên ..." />
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" name="soDT" value={this.state.soDT} onChange={this.onThemNguoiDung} id className="form-control" placeholder="Nhập sđt..." />
                                                            </div>
                                                            <div class="form-group">
                                                                <select className="form-control" onChange={this.onThemNguoiDung} value={this.state.maLoaiNguoiDung} name="maLoaiNguoiDung" id="maLoaiNguoiDung">
                                                                    <option value="GV">Giáo Viên</option>
                                                                    <option value="HV">Học Viên</option>
                                                                </ select>
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" name="email" onChange={this.onThemNguoiDung} value={this.state.email} className="form-control" placeholder="Nhập email ..." />
                                                            </div>
                                                            {this.state.isEditND === false ? <Fragment><button type="button" className="btn btn-success" onClick={this.onAdd}>Thêm</button>
                                                                <button type="button" style={{ marginLeft: "50px" }} className="btn btn-secondary" data-dismiss="modal">Close</button></Fragment>
                                                                : <Fragment>
                                                                    <button type="button" className="btn btn-success" onClick={this.onEditND}>Cập nhật</button>
                                                                    <button type="button" style={{ marginLeft: "50px" }} className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                                </Fragment>
                                                            }
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save</button>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
