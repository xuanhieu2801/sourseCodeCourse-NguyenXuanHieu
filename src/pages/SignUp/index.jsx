import React, { Component, Fragment } from 'react';
import "./SignUpCSS.css";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import UserService from '../../Service/UserService/index';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { Result, Button } from 'antd';

const SignupSchema = Yup.object().shape({
    taiKhoan: Yup.string()
        .matches("^[a-z0-9_-]{3,16}$", 'tài khoản không hợp lệ !')
        .required('Hãy điền tài khoản'),
    matKhau: Yup.string()
        .min(2, 'quá ngắn!')
        .max(50, 'quá dài!')
        // .matches("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$", 'Mật khẩu không hợp lệ')
        .required('Hãy điền mật khẩu'),
    hoTen: Yup.string()
        .matches("^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$", 'Họ và tên không hợp lệ !')
        .required('Hãy điền họ và tên '),
    soDT: Yup.string()
        .matches('^[0-9]+$', 'Số điện thoại không hợp lệ !')
        .min(10, 'quá ngắn !')
        .max(11, 'quá dài !')
        .required('Hãy điền số điện thoại '),
    email: Yup.string()
        .email('email không hợp lệ !')
        .required('Hãy điền địa chỉ email'),
});

export default class SignUp extends Component {


    constructor(props) {
        super(props);
        this.state = {
            value: {}
        }
    }

    render() {
        return (
            <div className="container-fluid wrap-sign-up">
                <div className="container form-signup" >
                    <div className="row form-row">
                        <div className="col-6 form-col">
                            {!_.isEmpty(this.state.value) ? <Result 
                                status="success"
                                extra={[<h4 style={{color:"green"}}>ĐĂNG KÝ THÀNH CÔNG</h4>,
                                    <Link to="/signin">Đăng Nhập</Link>
                                ]}
                            /> :
                                <Fragment>
                                    <h1 className="h1-signup">Đăng Ký</h1>
                                    <Formik
                                        initialValues={{
                                            taiKhoan: '',
                                            matKhau: '',
                                            hoTen: '',
                                            soDT: '',
                                            maNhom: 'GP06',
                                            email: '',
                                        

                                        }}
                                        validationSchema={SignupSchema}
                                        onSubmit={values => {
                                            // same shape as initial values
                                            UserService.PostDangKy(values).then(res => {
                                                console.log(res.data)
                                                if (!_.isEmpty(res.data)) {
                                                    // return  this.props.history.push("/signin")
                                                    this.setState({
                                                        value: res.data
                                                    })
                                                }
                                            }).catch((error) => {
                                                console.log(error)
                                            })
                                        }}
                                    >
                                        {({ errors, touched }) => (
                                            <Form className="form-inline">
                                                <div className="container-fluid wrap-signup">
                                                    <div className="row row-signup">
                                                        <div className="col-md-12 col-signup-top">
                                                            <div className="row">
                                                                <div className="col-md-6  col-signup">
                                                                    <Field placeholder="Nhập tài khoản" name="taiKhoan" className="form-control" />
                                                                    {errors.taiKhoan && touched.taiKhoan ? (
                                                                        <div className="div-error">{errors.taiKhoan}</div>
                                                                    ) : null}
                                                                </div>
                                                                <div className="col-md-6  col-signup">
                                                                    <Field placeholder="Nhập mật khẩu" type="password" name="matKhau" className="form-control" />
                                                                    {errors.matKhau && touched.matKhau ? (
                                                                        <div className="div-error">{errors.matKhau}</div>
                                                                    ) : null}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 col-signup-top ">
                                                            <div className="row">
                                                                <div className="col-md-6  col-signup">
                                                                    <Field placeholder="Nhập họ và tên" name="hoTen" className="form-control" />
                                                                    {errors.hoTen && touched.hoTen ? (
                                                                        <div className="div-error">{errors.hoTen}</div>
                                                                    ) : null}
                                                                </div>
                                                                <div className="col-md-6  col-signup">
                                                                    <Field placeholder="Nhập số điện thoại" name="soDT" className="form-control" />
                                                                    {errors.soDT && touched.soDT ? (
                                                                        <div className="div-error">{errors.soDT}</div>
                                                                    ) : null}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12  col-signup">
                                                        <Field placeholder="Nhập Email" name="email" className="form-control" type="email" />
                                                        {errors.email && touched.email ? (
                                                            <div className="div-error">{errors.email}</div>
                                                        ) : null}
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button type="submit" className="btn btn-danger" style={{ marginBottom: "40px" }}>Đăng ký </button>
                                                    </div>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik></Fragment>
                            }         </div>
                    </div>
                </div>
            </div>
        )
    }
}
