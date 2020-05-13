import React, { Component,Fragment } from 'react' ;
import './eventsCSS.css' ; 
import WOW from 'wowjs';
import Footer from '../../Layouts/FooterPages/index'

export default class Events extends Component {

    constructor(props){
        super(props);
        this.state = {
            dataNews:[
                {
                    img:"http://wpthemecube.com/eventr2/wp-content/uploads/2017/12/hotel-img1@2x.png" , 
                    title:"Không chỉ camera, Find X2 còn có màn hình ấn tượng" , 
                    moTa:"Không chỉ chinh phục người dùng với hệ thống camera, Oppo Find X2 còn mang đến trải nghiệm giải trí đã mắt với màn hình chất lượng.",
                    ngayTao:"16:00 03/04/2020"
                },
                {
                    img:"http://wpthemecube.com/eventr2/wp-content/uploads/2017/12/hotel-img2@2x.png" , 
                    title:"Không chỉ camera, Find X2 còn có màn hình ấn tượng" , 
                    moTa:"Không chỉ chinh phục người dùng với hệ thống camera, Oppo Find X2 còn mang đến trải nghiệm giải trí đã mắt với màn hình chất lượng.",
                    ngayTao:"16:00 03/04/2020"
                },
                {
                    img:"http://wpthemecube.com/eventr2/wp-content/uploads/2017/12/hotel-img3@2x.png" , 
                    title:"Không chỉ camera, Find X2 còn có màn hình ấn tượng" , 
                    moTa:"Không chỉ chinh phục người dùng với hệ thống camera, Oppo Find X2 còn mang đến trải nghiệm giải trí đã mắt với màn hình chất lượng.",
                    ngayTao:"16:00 03/04/2020"
                },{
                    img:"http://wpthemecube.com/eventr2/wp-content/uploads/2017/12/hotel-img1@2x.png" , 
                    title:"Không chỉ camera, Find X2 còn có màn hình ấn tượng" , 
                    moTa:"Không chỉ chinh phục người dùng với hệ thống camera, Oppo Find X2 còn mang đến trải nghiệm giải trí đã mắt với màn hình chất lượng.",
                    ngayTao:"16:00 03/04/2020"
                },{
                    img:"http://wpthemecube.com/eventr2/wp-content/uploads/2017/12/hotel-img2@2x.png" , 
                    title:"Không chỉ camera, Find X2 còn có màn hình ấn tượng" , 
                    moTa:"Không chỉ chinh phục người dùng với hệ thống camera, Oppo Find X2 còn mang đến trải nghiệm giải trí đã mắt với màn hình chất lượng.",
                    ngayTao:"16:00 03/04/2020"
                }
            ]
        }
    }


        componentDidMount(){
            new WOW.WOW({
                live: false
            }).init();
        }
    render() {
        const renderNews = this.state.dataNews.map((news,index)=>{
            return  <a className="link-news" >
                <div className="row row-tintuc wow fadeIn" style={{textAlign:"left",marginBottom:"30px"}}>
                <div className="col-md-3 col-xs-3 col-sm-3 col-left-news ">
                    <img src={news.img} alt="" width={268} height={166} />
                </div>
                <div className="col-md-9 col-xs-7 col-sm-7  col-right-news">
                    <h4>{news.title}</h4>
                    <span>{news.ngayTao}</span><br/>
                    <p>{news.moTa}</p>
                </div>
            </div>
            </a>
        })
        return (
            <Fragment>
            <div className="container-fluid wrap-eventpage">
            </div>
            <div className="container-fluid title-pageEvents">
            <h2 className="h2-eventsPage wow fadeIn">Tin Tức</h2>
            <h4 className="h4-eventsPage wow fadeIn"><div className="ant-breadcrumb"><span><span className="ant-breadcrumb-link" ><a href="/home" style={{color:"white"}}>Trang Chủ</a></span><span className="ant-breadcrumb-separator" style={{color:"white"}}>/</span></span><span><span className="ant-breadcrumb-link" style={{color:"white"}}>Tin Tức</span><span className="ant-breadcrumb-separator">/</span></span></div></h4>
            </div>
            <div className="container-fluid wrap-content-pageEvents" style={{marginBottom:"100px"}}>
                <div className="container">
                    <h1>Tin Mới </h1>
                    <div className="row events-row wow fadeIn">
                        <div className="column ">
                            <div className="img-events"> 
                            <img src="http://wpthemecube.com/eventr_html/img/thumb1@2x.png" style={{width: '100%'}} />
                            </div>
                            <div className="img-events"> 
                            <img src="http://wpthemecube.com/eventr_html/img/thumb5@2x.png" style={{width: '100%'}} />
                            </div>
                        </div>
                        <div className="column">
                            <div className="img-events"> 
                                    <img src="http://wpthemecube.com/eventr_html/img/thumb2@2x.png" style={{width: '100%'}} />
                            </div>
                            <div className="img-events"> 
                                    <img src="http://wpthemecube.com/eventr_html/img/thumb6@2x.png" style={{width: '100%'}} />  
                            </div>
                    
                        </div> 
                        <div className="column">
                            <div className="img-events"> 
                            <img src="http://wpthemecube.com/eventr_html/img/thumb9@2x.png"  style={{width: '100%'}} />
                            </div>
                            <div className="img-events"> 
                            <img src="http://wpthemecube.com/eventr_html/img/thumb13@2x.png" className="style-img" style={{width: '100%',height:"344px"}} />
                            </div>   
                        </div>
                        <div className="column">
                            <div className="img-events"> 
                                <img src="http://wpthemecube.com/eventr_html/img/thumb10@2x.png " className="style-img" style={{width: '100%',height:"344px"}} />
                            </div>
                            <div className="img-events"> 
                                <img src="http://wpthemecube.com/eventr_html/img/thumb14@2x.png" style={{width: '100%'}} />
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
            <div className="container wrap-content-news">
                    <h1 style={{textAlign:"left"}}>Dành Cho Bạn</h1>
                    {renderNews}
            </div>
            <Footer/>
            </Fragment>
        )
    }
}
