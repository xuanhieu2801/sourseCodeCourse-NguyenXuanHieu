import React, { Component, isValidElement } from 'react';
import './SignInCss.css';
import { Form, Input, Button, Checkbox } from 'antd';
import Axios from 'axios';
import UserService from '../../Service/UserService/index';
import {Link,NavLink, Route} from "react-router-dom";
import _ from 'lodash';
import Header from '../../Layouts/Header/index'

export default class SignIn extends Component {

    constructor(props){
        super(props) ; 
        this.state = {
            taiKhoanND :{} ,
        }
    }

    componentDidUpdate(){
        if(!_.isEmpty(this.state.taiKhoanND.accessToken)){
            this.props.history.push("/home")
            localStorage.setItem('taiKhoanND',JSON.stringify(this.state.taiKhoanND))
        }
    }




    render() {
        console.log(this.state.isDangNhap)
        const layout = {
            labelCol: {
                span: 8,
            },
            wrapperCol: {
                span: 16,
            },
        };
        const tailLayout = {
            wrapperCol: {
                offset: 8,
                span: 16,
            },
        };
        const onFinish = values => {
            const value = {
                taiKhoan: values.username,
                matKhau: values.password,
            }
            UserService.PostDangNhap(value)
                .then(res => {
                    const data =res.data;
                        return this.setState({
                            taiKhoanND:data
                        })
                            })
                .catch(error => {
                    console.log(error)
                })
        };
        
            const onFinishFailed = errorInfo => {
                console.log('Failed:', errorInfo);
            };
        return (
            <div className="container-fluid wrap-signin">
                <Route component={Header} />
                <div className="space-div"></div>
                <div className="car-wrap container-fluid" >
                <svg width="887" height="492" viewBox="0 0 887 492" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="undraw_navigator_a479 1">
                    <g clip-path="url(#clip0)">
                    <g id="area">
                    <path id="Vector" d="M198 222H12.6925C12.4604 222.003 12.2287 221.983 12 221.942L99.6419 61.2961C100.177 60.2956 100.953 59.4633 101.891 58.8842C102.83 58.3051 103.897 58 104.983 58C106.069 58 107.136 58.3051 108.074 58.8842C109.013 59.4633 109.789 60.2956 110.324 61.2961L169.143 169.102L171.96 174.26L198 222Z" fill="#3F3D56"/>
                    <path id="Vector_2" opacity="0.2" d="M228 222H169L197.963 159.728L200.047 155.242L201.09 153L203.718 159.728L228 222Z" fill="black"/>
                    <path id="Vector_3" d="M225 222H128L146.797 174.938L148.149 171.547L172.643 110.216C174.249 106.196 178.112 105.946 180 109.458C180.127 109.697 180.245 109.951 180.353 110.216L225 222Z" fill="#3F3D56"/>
                    <path id="Vector_4" d="M641.046 226.342L645.571 221.574L640.984 227.522L640.489 226.861L641.046 226.342Z" fill="#3F3D56"/>
                    <path id="Vector_5" d="M640.551 231.156L636.026 226.389L640.613 232.336L641.108 231.675L640.551 231.156Z" fill="#3F3D56"/>
                    <path id="Vector_6" d="M128.178 282.907H82.8037V285.137H128.178V282.907Z" fill="black"/>
                    <path id="Vector_7" d="M256.981 282.907H211.607V285.137H256.981V282.907Z" fill="black"/>
                    <path id="Vector_8" d="M385.785 282.907H340.411V285.137H385.785V282.907Z" fill="black"/>
                    <path id="Vector_9" d="M514.589 282.907H469.215V285.137H514.589V282.907Z" fill="black"/>
                    <path id="Vector_10" d="M643.393 282.907H598.019V285.137H643.393V282.907Z" fill="black"/>
                    <path id="Vector_11" d="M772.196 282.907H726.822V285.137H772.196V282.907Z" fill="black"/>
                    <path id="Vector_12" d="M901 282.907H855.626V285.137H901V282.907Z" fill="black"/>
                    <path id="Vector_13" d="M128.178 383.243H82.8037V385.472H128.178V383.243Z" fill="black"/>
                    <path id="Vector_14" d="M256.981 383.243H211.607V385.472H256.981V383.243Z" fill="black"/>
                    <path id="Vector_15" d="M385.785 383.243H340.411V385.472H385.785V383.243Z" fill="black"/>
                    <path id="Vector_16" d="M514.589 383.243H469.215V385.472H514.589V383.243Z" fill="black"/>
                    <path id="Vector_17" d="M643.393 383.243H598.019V385.472H643.393V383.243Z" fill="black"/>
                    <path id="Vector_18" d="M128.178 483.578H82.8037V485.807H128.178V483.578Z" fill="black"/>
                    <path id="Vector_19" d="M256.981 483.578H211.607V485.807H256.981V483.578Z" fill="black"/>
                    <path id="Vector_20" d="M385.785 483.578H340.411V485.807H385.785V483.578Z" fill="black"/>
                    <path id="Vector_21" d="M510.882 483.804H465.508V486.034H510.882V483.804Z" fill="black"/>
                    <path id="Vector_22" d="M635.969 484.829H590.595V487.058H635.969V484.829Z" fill="black"/>
                    <path id="Vector_23" d="M772.196 483.578H726.822V485.807H772.196V483.578Z" fill="black"/>
                    <path id="Vector_24" d="M901 483.578H855.626V485.807H901V483.578Z" fill="black"/>
                    <path id="Vector_25" d="M638.838 91.8192C643.605 91.8158 648.295 92.7387 652.463 94.5006H625.249C629.405 92.7392 634.083 91.8162 638.838 91.8192V91.8192Z" fill="#E6E6E6"/>
                    <path id="Vector_26" d="M586.031 89.1377C593.994 89.1307 601.764 91.0043 608.27 94.5006H563.823C570.32 91.0084 578.079 89.1349 586.031 89.1377Z" fill="#E6E6E6"/>
                    <path id="Vector_27" d="M655.265 131.953C650.498 131.95 645.809 132.873 641.641 134.635H668.854C664.699 132.873 660.021 131.95 655.265 131.953Z" fill="#E6E6E6"/>
                    <path id="Vector_28" d="M708.072 129.272C700.11 129.265 692.34 131.138 685.834 134.635H730.281C723.783 131.142 716.025 129.269 708.072 129.272Z" fill="#E6E6E6"/>
                    <path id="Vector_29" d="M741.901 423.929C756.757 423.929 768.801 415.215 768.801 404.465C768.801 393.715 756.757 385 741.901 385C727.044 385 715 393.715 715 404.465C715 415.215 727.044 423.929 741.901 423.929Z" fill="#3F3D56"/>
                    <path id="Vector_30" d="M741.795 414.489C749.967 414.489 756.591 409.903 756.591 404.245C756.591 398.587 749.967 394 741.795 394C733.624 394 727 398.587 727 404.245C727 409.903 733.624 414.489 741.795 414.489Z" fill="#CCCCCC"/>
                    <path id="Vector_31" d="M839.573 423.929C854.801 423.929 867.146 415.215 867.146 404.465C867.146 393.715 854.801 385 839.573 385C824.345 385 812 393.715 812 404.465C812 415.215 824.345 423.929 839.573 423.929Z" fill="#3F3D56"/>
                    <path id="Vector_32" d="M840.123 414.489C847.923 414.489 854.246 409.903 854.246 404.245C854.246 398.587 847.923 394 840.123 394C832.323 394 826 398.587 826 404.245C826 409.903 832.323 414.489 840.123 414.489Z" fill="#CCCCCC"/>
                    </g>
                    <g id="Car">
                    <path id="Vector_33" d="M860.762 399.212L885.487 399.223L885.489 396.135L860.764 396.125L860.762 399.212Z" fill="#3F3D56"/>
                    <path id="Vector_34" d="M682 396.984L687.098 397.918L880.838 398L882.58 394.787C885.619 389.275 886.661 383.202 885.592 377.248C884.758 372.81 882.667 368.401 877.918 366.485L869.32 321.152L762.134 321L720.664 347.48C720.664 347.48 701.102 347.201 690.474 357.675C686.641 361.57 684.377 366.288 683.978 371.216L683.559 376.664L682 396.984Z" fill="#6C63FF"/>
                    <path id="Vector_35" d="M737.744 344.973L794.883 344.993H801.858L813.634 345V344.286L813.642 335.682L813.651 326.021H805.816L798.841 326.015L786.486 326.007H779.511L765.247 326L737.744 344.973Z" fill="white"/>
                    <path id="Vector_36" d="M823.14 344.986L853.96 345L853.968 340.075V331.467L853.977 326.014H849.464L842.345 326.006L823.149 326L823.14 344.986Z" fill="white"/>
                    <path id="Vector_37" d="M810.159 363.991L814.084 363.993L814.088 358.126L810.163 358.124L810.159 363.991Z" fill="#3F3D56"/>
                    <path id="Vector_38" d="M752.868 352.851L752.87 349.764L745.413 349.76L745.411 352.848L752.868 352.851Z" fill="#3F3D56"/>
                    <path id="Vector_39" d="M750.122 351.121L749.69 351.121C748.613 351.12 747.547 350.953 746.552 350.628C745.557 350.303 744.653 349.828 743.892 349.228C743.131 348.629 742.527 347.917 742.115 347.134C741.704 346.351 741.492 345.511 741.492 344.664V344.664C741.493 343.817 741.706 342.977 742.119 342.195C742.531 341.412 743.136 340.701 743.898 340.102C744.66 339.503 745.565 339.028 746.56 338.704C747.555 338.38 748.622 338.214 749.699 338.214L750.131 338.214L750.122 351.121Z" fill="#3F3D56"/>
                    <g id="light">
                    <path id="Vector_40" d="M683.186 376.941C686.193 377.196 689.218 376.616 691.73 375.304C694.242 373.991 696.078 372.03 696.916 369.767C697.754 367.503 697.539 365.082 696.31 362.929C695.081 360.777 692.916 359.031 690.197 358C686.31 361.885 684.015 366.591 683.611 371.506L683.186 376.941Z" fill="#3F3D56"/>
                    </g>
                    <path id="Vector_41" d="M799.419 326L813.643 344L813.651 335.523L806.125 326.006L799.419 326Z" fill="#F2F2F2"/>
                    <path id="Vector_42" d="M845.501 326.335L856.272 339.832V331.574L852.098 326.342L845.501 326.335Z" fill="#F2F2F2"/>
                    <path id="Vector_43" d="M779.256 326L794.757 345H801.791L786.289 326H779.256Z" fill="#F2F2F2"/>
                    </g>
                    </g>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="886.351" height="491.631" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>

              </div>
                <div className="container" style={{position:"absolute",top:"105px",left:"14%"}}>
                    <div className="row row-signin">
                        <div className="col-5 col-signin">
                            <h1 style={{color:"Green",padding:"50px 0"}}>ĐĂNG NHẬP</h1>
                        <Form
                                {...layout}
                                name="basic"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Hãy điền tài khoản của bạn!',
                                        },
                                    ]}
                                >
                                    <Input style={{
                                        height: "40px",
                                        boxShadow: " 0 0 0 0.2rem white",
                                        border: " 1px solid black", paddingLeft: "30px"
                                    }} placeholder="Nhập tài khoản" />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Hãy điền mật khẩu của bạn!',
                                        },
                                    ]}
                                >
                                    <Input.Password style={{
                                        height: "40px",
                                        boxShadow: " 0 0 0 0.2rem white",
                                        border: " 1px solid black", paddingLeft: "30px"
                                    }} placeholder="Nhập mật khẩu" />
                                </Form.Item>

                                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                    <Checkbox style={{color:"white"}}>Remember me</Checkbox>
                                </Form.Item>

                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit" onClick={this.onIsDangNhap}>
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>

          
            </div>
        )
    }
}
