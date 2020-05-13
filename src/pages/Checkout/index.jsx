import React, { Component ,Fragment } from 'react';
import './checkoutCss.css';
import {connect} from 'react-redux';
import { Result, Button ,Radio } from 'antd';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import FooterPage from '../../Layouts/FooterPages/index';
import {   animateScroll as scroll } from 'react-scroll'

 class Checkout extends Component {
    state = {
        value: 1,
      }
    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        })}
        scrollToTop=()=> {
            scroll.scrollToTop();
          }
    render() {
        
        const GioHangKhachHang = Array.from(new Set(this.props.reducerGioHang.map(JSON.stringify))).map(JSON.parse);
        const renDerGioHang = GioHangKhachHang.map((item,index)=>{
            return <div className="row" style={{width:"90%",marginTop:"10px"}}>
                        <div className="col-md-4">
                            <img src={item.hinhAnh} width={50} height={50} alt=""/>
                        </div>
                        <div className="col-md-8 text-left" >
                        <p style={{fontWeight:"bolder" ,marginBottom:"0px"}}>{item.tenKhoaHoc}</p>
                        <span>{item.moTa.substr(0,30)}... </span>
                        <p style={{color:"red"}}>399000 vnd</p>
                        </div>
                    </div>
        })
        return (
            <Fragment>
                <div className="container-fluid wrap-checkout" >
                </div>
                <div className="container-fluid title-checkout"></div>
                <div className="container-fluid title-pageCourses">
                    <h2 className="h2-coursesPage">Thanh Toán</h2>
                    <h4 className="h4-coursePage"><div className="ant-breadcrumb">
                        <span>
                            <span className="ant-breadcrumb-link"><a href="/home">Trang Chủ</a></span>
                            <span className="ant-breadcrumb-separator">/</span>
                        </span>
                        <span>
                            <span className="ant-breadcrumb-link">Thanh Toán</span><span className="ant-breadcrumb-separator">/</span></span></div>
                    </h4>
                </div>
                <div className="container-fluid content-checkout">
                        <div className="row row-content">
                        <div className="col-8 col-checkout text-left">
                            <div className="row" style={{marginTop:"80px" ,justifyContent:"center"}}>
                                <div className="col-md-8">
                                    <div className="main">
                                        <div className="main-header">
                                            <a href="/" className="logo">
                                                <h1 className="logo-text">READING</h1>
                                            </a>
                                            <ul className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <Link to="/">Trang Chủ</Link>
                                                </li>
                                                <li className="breadcrumb-item">
                                                    Thanh Toán
                                                </li>
                                                <li className="breadcrumb-item breadcrumb-item-current">
                                                    Thông tin giao hàng
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tonggia row" style={{marginLeft:"4px"}}>
        <h3>Tổng Tiền : <span style={{color:"red"}}> {399000*(GioHangKhachHang.length)} </span> VNĐ</h3>
                                        </div>
                                        <div className="main-content">
                                            <div className="step">
                                                <div className="step-sections steps-onepage" step={1}>
                                                    <div className="section">
                                                        <div className="section-header">
                                                            <h2 className="section-title">Thông tin giao hàng</h2>
                                                        </div>
                                                        <div className="section-content section-customer-information no-mb">
                                                            
                                                            <div className="fieldset">
                                                                <div className="field field-required  ">
                                                                    <div className="field-input-wrapper">

                                                                        <input placeholder="Họ và tên" className="field-input" size={30} type="text" id="billing_address_full_name" name="billing_address[full_name]" />
                                                                    </div>
                                                                </div>
                                                                <div className="field field-required   ">
                                                                    <div className="field-input-wrapper">

                                                                        <input placeholder="Số điện thoại" className="field-input" size={30} maxLength={11} type="tel" id="billing_address_phone" name="billing_address[phone]" />
                                                                    </div>
                                                                </div>
                                                                <div className="field field-required  ">
                                                                    <div className="field-input-wrapper">

                                                                        <input placeholder="Địa chỉ" className="field-input" size={30} type="text" id="billing_address_address1" name="billing_address[address1]" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="section-content">
                                                            <div className="fieldset">
                                                                <form id="form_update_location" className="clearfix order-checkout__loading" acceptCharset="UTF-8" method="post">
                                                                    <input name="selected_customer_shipping_province" type="hidden" defaultValue />
                                                                    <input name="selected_customer_shipping_district" type="hidden" defaultValue />
                                                                    <input name="selected_customer_shipping_ward" type="hidden" defaultValue />
                                                                    <input name="utf8" type="hidden" defaultValue="✓" />
                                                                    <div className="order-checkout__loading--box">
                                                                        <div className="order-checkout__loading--circle" />
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-4">           <div className="field field-show-floating-label field-required field-third ">
                                                                            <div className="field-input-wrapper field-input-wrapper-select">

                                                                                <select className="field-input" id="customer_shipping_province" name="customer_shipping_province">
                                                                                    <option data-code="null" value="null" selected>  Chọn tỉnh / thành </option>
                                                                                    <option data-code="HC" value={50}>Hồ Chí Minh</option>
                                                                                    <option data-code="HI" value={1}>Hà Nội</option>
                                                                                    <option data-code="DA" value={32}>Đà Nẵng</option>
                                                                                    <option data-code="AG" value={57}>An Giang</option>
                                                                                    <option data-code="BV" value={49}>Bà Rịa - Vũng Tàu</option>
                                                                                    <option data-code="BG" value={15}>Bắc Giang</option>
                                                                                    <option data-code="BK" value={4}>Bắc Kạn</option>
                                                                                    <option data-code="BL" value={62}>Bạc Liêu</option>
                                                                                    <option data-code="BN" value={18}>Bắc Ninh</option>
                                                                                    <option data-code="BT" value={53}>Bến Tre</option>
                                                                                    <option data-code="BD" value={35}>Bình Định</option>
                                                                                    <option data-code="BI" value={47}>Bình Dương</option>
                                                                                    <option data-code="BP" value={45}>Bình Phước</option>
                                                                                    <option data-code="BU" value={39}>Bình Thuận</option>
                                                                                    <option data-code="CM" value={63}>Cà Mau</option>
                                                                                    <option data-code="CN" value={59}>Cần Thơ</option>
                                                                                    <option data-code="CB" value={3}>Cao Bằng</option>
                                                                                    <option data-code="DC" value={42}>Đắk Lắk</option>
                                                                                    <option data-code="DO" value={43}>Đắk Nông</option>
                                                                                    <option data-code="DB" value={7}>Điện Biên</option>
                                                                                    <option data-code="DN" value={48}>Đồng Nai</option>
                                                                                    <option data-code="DT" value={56}>Đồng Tháp</option>
                                                                                    <option data-code="GL" value={41}>Gia Lai</option>
                                                                                    <option data-code="HG" value={2}>Hà Giang</option>
                                                                                    <option data-code="HM" value={23}>Hà Nam</option>
                                                                                    <option data-code="HT" value={28}>Hà Tĩnh</option>
                                                                                    <option data-code="HD" value={19}>Hải Dương</option>
                                                                                    <option data-code="HP" value={20}>Hải Phòng</option>
                                                                                    <option data-code="HU" value={60}>Hậu Giang</option>
                                                                                    <option data-code="HO" value={11}>Hòa Bình</option>
                                                                                    <option data-code="HY" value={21}>Hưng Yên</option>
                                                                                    <option data-code="KH" value={37}>Khánh Hòa</option>
                                                                                    <option data-code="KG" value={58}>Kiên Giang</option>
                                                                                    <option data-code="KT" value={40}>Kon Tum</option>
                                                                                    <option data-code="LI" value={8}>Lai Châu</option>
                                                                                    <option data-code="LD" value={44}>Lâm Đồng</option>
                                                                                    <option data-code="LS" value={13}>Lạng Sơn</option>
                                                                                    <option data-code="LO" value={6}>Lào Cai</option>
                                                                                    <option data-code="LA" value={51}>Long An</option>
                                                                                    <option data-code="ND" value={24}>Nam Định</option>
                                                                                    <option data-code="NA" value={27}>Nghệ An</option>
                                                                                    <option data-code="NB" value={25}>Ninh Bình</option>
                                                                                    <option data-code="NT" value={38}>Ninh Thuận</option>
                                                                                    <option data-code="PT" value={16}>Phú Thọ</option>
                                                                                    <option data-code="PY" value={36}>Phú Yên</option>
                                                                                    <option data-code="QB" value={29}>Quảng Bình</option>
                                                                                    <option data-code="QM" value={33}>Quảng Nam</option>
                                                                                    <option data-code="QG" value={34}>Quảng Ngãi</option>
                                                                                    <option data-code="QN" value={14}>Quảng Ninh</option>
                                                                                    <option data-code="QT" value={30}>Quảng Trị</option>
                                                                                    <option data-code="ST" value={61}>Sóc Trăng</option>
                                                                                    <option data-code="SL" value={9}>Sơn La</option>
                                                                                    <option data-code="TN" value={46}>Tây Ninh</option>
                                                                                    <option data-code="TB" value={22}>Thái Bình</option>
                                                                                    <option data-code="TY" value={12}>Thái Nguyên</option>
                                                                                    <option data-code="TH" value={26}>Thanh Hóa</option>
                                                                                    <option data-code="TT" value={31}>Thừa Thiên Huế</option>
                                                                                    <option data-code="TG" value={52}>Tiền Giang</option>
                                                                                    <option data-code="TV" value={54}>Trà Vinh</option>
                                                                                    <option data-code="TQ" value={5}>Tuyên Quang</option>
                                                                                    <option data-code="VL" value={55}>Vĩnh Long</option>
                                                                                    <option data-code="VT" value={17}>Vĩnh Phúc</option>
                                                                                    <option data-code="YB" value={10}>Yên Bái</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        </div>
                                                                        <div className="col-md-4">         <div className="field field-show-floating-label field-required field-third ">
                                                                            <div className="field-input-wrapper field-input-wrapper-select">

                                                                                <select className="field-input" id="customer_shipping_district" name="customer_shipping_district">
                                                                                    <option data-code="null" value="null" selected>Chọn quận / huyện</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        </div>
                                                                        <div className="col-md-4">
                                                                            <div className="field field-show-floating-label field-required  field-third  ">
                                                                                <div className="field-input-wrapper field-input-wrapper-select">

                                                                                    <select className="field-input" id="customer_shipping_ward" name="customer_shipping_ward">
                                                                                        <option data-code="null" value="null" selected>Chọn phường / xã</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <div className="section-content section-customer-information fieldset" id="div_country_not_vietnam" style={{ display: 'none' }}>
                                                                <div className="field field-two-thirds">
                                                                    <div className="field-input-wrapper">

                                                                        <input placeholder="Thành phố" className="field-input" size={30} type="text" id="billing_address_city" name="billing_address[city]" defaultValue />
                                                                    </div>
                                                                </div>
                                                                <div className="field field-third">
                                                                    <div className="field-input-wrapper">

                                                                        <input placeholder="Mã bưu chính" className="field-input" size={30} type="text" id="billing_address_zip" name="billing_address[zip]" defaultValue />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="change_pick_location_or_shipping">
                                                            <div id="section-payment-method" className="section">
                                                                <div className="section-header">
                                                                    <h2 className="section-title">Phương thức thanh toán</h2>
                                                                </div>
                                                                <div className="section-content">
                                                                    <div className="content-box">
                                                                            <div className="row" style={{marginLeft:"4px"}}>
                                                                            <Radio.Group onChange={this.onChange} value={this.state.value}>
                                                                                        <Radio value={1}>Thanh toán khi giao hàng (COD)</Radio>
                                                                                        <Radio value={2}>	Chuyển khoản qua ngân hàng</Radio>
                                                                            </Radio.Group>
                                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="step-footer"style={{marginBottom:"100px"}}  >
                                                      <div className="div-wrap-icon" onClick={this.scrollToTop}>
                                                        <span className="span-wrap-icon">   
                                                        <svg   className="previous-link-icon icon-chevron icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 6.7 11.3"><path d="M6.7 1.1l-1-1.1-4.6 4.6-1.1 1.1 1.1 1 4.6 4.6 1-1-4.6-4.6z" /></svg>                                      
                                                            Giỏ hàng
                                                            </span> 
                                                        </div>
                                                    <button type="button" className="btn btn-primary btn-checkout" style={{float:"right"}}>Hoàn tất đơn hàng </button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>

                                </div>
                            </div>
                        </div>
                            <div className="col-4 col-checkout" style={{background:"#e9ecef"}}>
                                <div className="col-right-checkout">
                                <h3>Giỏ Hàng Của Bạn ({GioHangKhachHang.length})</h3>
                                <div  style={{width:"90%" , margin:"20px" , borderTop:"1px solid black",maxHeight:"400px" ,overflow:"auto"}}>
                                        {!_.isEmpty(GioHangKhachHang)?renDerGioHang: <Result
                                            title="Giỏ hàng của bạn không có khóa học nào !"
                                            extra={<Link to="../course/KhoaHoc"><Button className="btn btn-primary" style={{fontWeight:"600"}}>Quay Lại Trang Khóa Học</Button></Link>}
                                        />}
                                </div> 
                                </div>
                            </div>
                        </div>
                </div>
                <FooterPage />
            </Fragment>
        )
    }
}

const mapStateToProps =(state)=>{
    return {
        reducerGioHang : state.GioHang
    }
}

export default connect(mapStateToProps)(Checkout);