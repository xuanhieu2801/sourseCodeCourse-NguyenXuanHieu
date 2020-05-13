import React, { Component } from 'react';
import './ComponentHourCss.css';
import { RocketOutlined  } from '@ant-design/icons';
import { Statistic, Row, Col } from "antd";
import WOW from 'wowjs';
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

export default class ComponentHour extends Component {
    componentDidMount(){
        new WOW.WOW({
            live: false
        }).init();
    }
    onFinish=()=>{
        console.log("finished!");
      }
    render() {
        return (
            <div className="container-fluid wrap-componentHour" style={{marginBottom:"50px",position:"relative" , bottom:"600px"}}>
                    <div className="row row-componentHour" style={{color:"white",paddingTop:"115px"}}>
                        <div className="col-md-7 col-Hour-left">
                            <div className="row row-left" >
                                <div className="col-md-4 col-hour" style={{paddingLeft: "112px"}}>
                                <RocketOutlined  style={{fontSize:"200px"}} />
                                </div>
                                <div className="col-md-8" style={{textAlign:"left",paddingTop:"30px"}}>
                                    <h3 className="title-hour" style={{color:"white"}}>Khóa học hướng nghiệp thần tốc</h3>
                                    <p>Chương trình giảm giá lên đến 30 % các khóa học</p>
                                    <span>Các khóa học này đình hướng chính xác nghề nghiệp bạn đã lựa chọn và cung cấp lộ trình đầy đủ và dễ hiểu nhất </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-hour-right">
                            <h4 style={{color:"white",marginTop:"35px"}}>Nhanh tay lên chỉ còn </h4>
                            <Row>
                                <Col span={12}>
                                <Countdown className="wow bounce"  value={deadline} onFinish={this.onFinish} />
                                </Col>
                             </Row>   
                        </div>
                    </div>
            </div>
        )
    }
}
