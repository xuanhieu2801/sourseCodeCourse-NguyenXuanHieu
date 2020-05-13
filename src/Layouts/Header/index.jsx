import React, { Component, Fragment } from 'react';
import './Header.css';
import {Link , NavLink ,Redirect } from 'react-router-dom';
import { Badge,Modal, Button ,Avatar, Popover,Result} from 'antd';
import {
    ShoppingCartOutlined, UserOutlined,LogoutOutlined,CloseOutlined,SettingOutlined 
} from '@ant-design/icons';
import { connect } from 'react-redux';
import { XoaKhoaHocAction ,MaKhoaHocVeRongAction } from '../../Redux/Action/CourseAction';
import _ from 'lodash';


    class Header extends Component {
        
        constructor(props){
            super(props);
            this.state = { visible: false,
                dangXuat : '' ,
                
            };
        }


        onDangXuat = ()=>{
            this.setState({
                dangXuat:null
            })
            localStorage.setItem("taiKhoanND" , JSON.stringify(this.state.dangXuat));
            
        }

        showModal = () => {
            this.setState({
                visible: true,
            });
        };

        handleOk = e => {
    
            this.setState({
                visible: false,
            });
        };

        handleCancel = e => {
            console.log(e);
            this.setState({
                visible: false,
            });
        };

        XoaKhoaHoc=(maKhoaHoc)=>{
            this.props.dispatch(XoaKhoaHocAction(maKhoaHoc))
        
        }
    render() {
        const GioHang = this.props.reducerGioHang ; 
        var GioHangTong = Array.from(new Set(GioHang.map(JSON.stringify))).map(JSON.parse);
        const gia = 399000 ; 
        const getLocal = localStorage.getItem('taiKhoanND') ; 
        const giaTriLocal = JSON.parse(getLocal) ; 
        const content = (
            <div style={{height:"auto"}}>
                <p><Link to="/profile"><Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Link></p>
                <p><LogoutOutlined style={{color:"red",marginRight:"1px"}} /> <Link to="/home" style={{color:"green",padding:"0px"}}  onClick={this.onDangXuat}>Đăng xuất </Link></p>
            </div>
        );
        return (
                    <nav className="navbar navbar-expand-sm navbar-light ">
                    <Link className="navbar-brand" to="/" style={{fontSize:"30px"}}>A+</Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav  mt-2 mt-lg-0" style={{marginLeft:"23%",flexDirection: "row"}} >
                            <li className="nav-item ">
                                <Link className="nav-link" to="/home">TRANG CHỦ </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/course/KhoaHoc">KHÓA HỌC</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">BLOG</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/events">TIN TỨC</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">GIỚI THIỆU</Link>
                            </li>
                        </ul>
                        <div>
                            <button onClick={this.showModal} className="wrap-shopping btn btn-default" data-toggle="modal" data-target="#modelId" style={{background:"transparent",marginRight:"4px",paddingTop:"18px",boxShadow:"none"}}>
                                <Badge count={GioHangTong.length} showZero >
                                    <ShoppingCartOutlined style={{fontSize:"30px",paddingTop:"4px"}} />
                                </Badge>
                            </button>
                        <button  type="button" className="btn btn-default" style={{ marginTop: "1rem", boxShadow: "none" }} >
                            { _.isEmpty(giaTriLocal)?<Avatar icon={<UserOutlined />} />
                                : <Fragment> <Link to="../admin" style={{color:"black"}}><SettingOutlined className="settingAdmin"  /></Link>  <Popover content={content}  trigger="focus">
                                <Button className="avatar-btn"> <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Button>
                                </Popover>
                                </Fragment>
                                
                                }
                        </button>
                            {_.isEmpty(giaTriLocal) 
                            ?
                            <Fragment>
                            <Link to="../signin" type="button" className="btn btn-outline-success"style={{marginTop:"1rem"}} > Đăng nhập</Link>
                            <Link to="../signup" type="button" className="btn btn-outline-danger" style={{ marginLeft:"2px",marginTop:"1rem"}}> Đăng Ký</Link>
                            </Fragment>
                            :null}
                
                        </div>
                        <Modal
                            title="Giỏ Hàng Của Bạn "
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            >
                            <table class="table">
                                <thead>
                                    {!_.isEmpty(this.props.reducerGioHang) ? <tr>
                                        <th></th>
                                        <th>Tên Khóa Học</th>
                                        {/* <th>Ngày tạo</th> */}
                                        <th>Giá</th>
                                        <th></th>
                                    </tr> : null }
                                </thead>
                            <tbody>
                                {!_.isEmpty(this.props.reducerGioHang) ? GioHangTong.map((item, index) => {
                                    return <Fragment>
                                        <tr>
                                            <td><img src={item.hinhAnh} width={50} height={50} /></td>
                                            <td>{item.tenKhoaHoc}</td>
                                            {/* <td>{item.moTa.substr(0, 20) + "..."}</td> */}
                                            {/* <td>{item.ngayTao}</td> */}
                                            <td>{gia + " vnđ"}</td>
                                            <td><CloseOutlined className="xoa-btn" onClick={() => this.XoaKhoaHoc(item.maKhoaHoc)} /> </td>
                                        </tr>
                                    </Fragment>
                                }) : <Fragment>
                                        <Result
                                            style={{ width: "473px" }}
                                            subTitle="Không Có Khóa học nào ,hãy đến trang khóa học."
                                            extra={<Link to="/course/KhoaHoc" onClick={this.handleOk} >Trở về Trang Khóa Học</Link>}
                                        />
                                    </Fragment>}
                                {!_.isEmpty(this.props.reducerGioHang) ?
                                    <tr>
                                        <td style={{ paddingTop: "20px" }} colspan="2">Tổng tiền : <span style={{ color: "green" }}>{GioHangTong.length * gia}</span>  Vnđ</td>
                                        <td></td>
                                        <td colspan="2"><Link to="../checkout"><button  onClick={this.handleCancel} style={{ fontSize: "15px", padding: "9px", width: "140%" }} type="button" className="btn btn-primary">Thanh Toán</button></Link></td>
                                        <td>
                                        </td>
                                    </tr> : null}
                            </tbody>
                            </table>
                            </Modal>
                    </div>
                </nav>
        
        )
    }
}


const mapStateToProps=(state)=>{
    return { reducerGioHang : state.GioHang}
}
export default connect(mapStateToProps)(Header) ;
