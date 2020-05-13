import React, { Component, Fragment } from 'react' ; 
import './aboutCSS.css';
import {SyncOutlined ,AudioOutlined ,BranchesOutlined  } from '@ant-design/icons';
import WOW from 'wowjs';
import Footer from '../../Layouts/FooterPages/index'
export default class About extends Component {


    componentDidMount(){
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <Fragment>
            <div className="container-fluid page-about">
            </div>
            <div className="container-fluid title-pageAbout">
                <h2 className="h2-aboutPage wow fadeIn">Giới Thiệu</h2>
                <h4 className="h4-aboutPage wow fadeIn" style={{color:"white"}}>
                        <div className="ant-breadcrumb"><span><span className="ant-breadcrumb-link"><a href="/home" style={{color: 'white'}}>Trang Chủ</a></span><span className="ant-breadcrumb-separator" style={{color: 'white'}}>/</span></span><span><span className="ant-breadcrumb-link" style={{color: 'white'}}>Giới Thiệu</span><span className="ant-breadcrumb-separator">/</span></span></div></h4>
            </div>
            <div className="container wrap-content-pageAbout" style={{marginBottom: '100px'}}>
                        <div className="row row-header-page">
                            <div className="jumbotron" style={{width:"100%" , background:"white"}}>
                                <h1 className="display-3 wow fadeIn">Chúng tôi làm được những gì ? </h1>
                                <p className="lead wow fadeIn">Chúng tôi ở đây để giúp kiến thức của bạn cải thiện tốt hơn. Mục tiêu của chúng tôi là tạo ra sự khác biệt có ý nghĩa cho chất lượng, chiến lược, nền tản của bạn .</p>
                            </div>
                            <div className="container-fluid row-infor-about wow fadeIn">
                                <div className="row">
                                <div className="col-md-4">
                                <div className="wpb_wrapper"><div className="infobox text-center ">
                                    <div className="icon-box">
                                    <SyncOutlined style={{fontSize:"4em" ,color: "#ffcd00"}} />
                                    </div>
                                    <h4 style={{ color: '#262626' ,marginTop:"20px" }}>Chủ đề mới</h4>
                                    <p style={{ color: '#666666' }}>Cập nhật nhanh chóng chủ đề mới , khóa học hay .</p>
                                </div>
                                </div>
                                </div>
                                <div className="col-md-4">
                                <div className="wpb_wrapper"><div className="infobox text-center ">
                                    <div className="icon-box">
                                    <AudioOutlined  style={{fontSize:"4em" ,color: "#ffcd00"}}/>
                                    </div>
                                    <h4 style={{ color: '#262626',marginTop:"20px" }}>Diễn giả chính</h4>
                                    <p style={{ color: '#666666' }}>Tập hợp đội ngũ giảng viên nhiệt huyết , trình độ cao , có kinh nghiệm nhiều năm với từng lĩnh vực.</p>
                                </div></div>

                                </div>
                                <div className="col-md-4">
                                <div className="wpb_wrapper"><div className="infobox text-center ">
                                    <div className="icon-box">
                                    <BranchesOutlined  style={{fontSize:"4em" ,color: "#ffcd00"}}/>
                                    </div>
                                    <h4 style={{ color: '#262626' ,marginTop:"20px"}}>Hỗ trợ </h4>
                                    <p style={{ color: '#666666' }}>Hỗ trợ tối đa nhiều công cụ học tập mới lạ , đỡ nhàm chán .</p>
                                </div></div>
                                </div>
                                </div>
                            </div>
                        </div>
           </div>
           <div className="container wrap-speakers">
                <h2 style={{color: '#262626', textAlign: 'left'}} className="vc_custom_heading">Đội Ngũ giáo viên</h2>
                <p style={{color: '#999999', textAlign: 'left'}}>Đội ngũ giáo viên xuất sắc với nhiều năm kinh nghiệm trong nghề .</p>
                <div className="row" style={{marginBottom:"50px"}}>
                    <div className="col-md-3 content-speaker wow fadeIn">
                        <img className="img-responsive" src="http://wpthemecube.com/eventr2/wp-content/uploads/2017/12/speaker1@2x.png" alt="Stanley Willis" width={262} height={262} />
                            <div className="caption text-center" style={{padding:"10px"}}>
                                <h4>Nguyễn Văn A</h4>
                                <p className="company">Fermentum Co.</p>
                            </div>
                    </div>
                    <div className="col-md-3 content-speaker wow fadeIn">
                        <img className="img-responsive" src="http://wpthemecube.com/eventr2/wp-content/uploads/2017/12/speaker2@2x.png" alt="Jane Richards" width={262} height={262} />
                        <div className="caption text-center" style={{padding:"10px"}}>
                                <h4>Nguyễn Thị B</h4>
                                <p className="company">Fermentum Co.</p>
                        </div>
                    </div>
                    <div className="col-md-3 content-speaker wow fadeIn">
                        <img className="img-responsive" src="http://wpthemecube.com/eventr2/wp-content/uploads/2017/12/speaker3@2x.png" alt="Martin Pearson" width={262} height={262} />
                        <div className="caption text-center" style={{padding:"10px"}}>
                                <h4>Nguyễn Văn C</h4>
                                <p className="company">Fermentum Co.</p>
                        </div>
                    </div>
                    <div className="col-md-3 content-speaker wow fadeIn">
                        <img className="img-responsive" src="http://wpthemecube.com/eventr2/wp-content/uploads/2017/12/speaker4@2x.png" alt="Jessica Green" width={262} height={262} />
                        <div className="caption text-center" style={{padding:"10px"}}>
                                <h4>Nguyễn Thị D</h4>
                                <p className="company">Fermentum Co.</p>
                        </div>
                    </div>
                    <div className="col-md-3 content-speaker wow fadeIn">
                        <img className="img-responsive" src="http://wpthemecube.com/eventr2/wp-content/uploads/2017/12/speaker5@2x.png" alt="Jessica Green" width={262} height={262} />
                        <div className="caption text-center" style={{padding:"10px"}}>
                                <h4>Nguyễn Văn E</h4>
                                <p className="company">Fermentum Co.</p>
                        </div>
                    </div>
                    <div className="col-md-3 content-speaker wow fadeIn">
                        <img className="img-responsive" src="http://wpthemecube.com/eventr2/wp-content/uploads/2017/12/speaker6@2x.png" alt="Jessica Green" width={262} height={262} />
                        <div className="caption text-center" style={{padding:"10px"}}>
                                <h4>Nguyễn Thị F</h4>
                                <p className="company">Fermentum Co.</p>
                        </div>
                    </div>
                    <div className="col-md-3 content-speaker wow fadeIn">
                        <img className="img-responsive" src="http://wpthemecube.com/eventr2/wp-content/uploads/2017/12/speaker7@2x.png" alt="Jessica Green" width={262} height={262} />
                        <div className="caption text-center" style={{padding:"10px"}}>
                                <h4>Nguyễn Văn G</h4>
                                <p className="company">Fermentum Co.</p>
                        </div>
                    </div>
                    <div className="col-md-3 content-speaker wow fadeIn">
                        <img className="img-responsive" src="http://wpthemecube.com/eventr2/wp-content/uploads/2017/12/speaker8@2x.png" alt="Jessica Green" width={262} height={262} />
                        <div className="caption text-center" style={{padding:"10px"}}>
                                <h4>Nguyễn Thị H</h4>
                                <p className="company">Fermentum Co.</p>
                        </div>
                    </div>
                </div>
           </div>
           <Footer />
            </Fragment>
        )
    }
}
