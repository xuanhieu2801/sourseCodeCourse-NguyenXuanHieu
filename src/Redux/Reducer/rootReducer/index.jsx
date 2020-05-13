import React, { Component } from 'react'
import {combineReducers} from "redux";
import {CourseReducer} from '../CourseReducer/index';
import {GioHangReducer} from '../GioHangReducer/index'; 
import {XoaKhoaHoc} from '../XoaKhoaHocReducer/index';
const rootReducer = combineReducers({
    Courses : CourseReducer ,
    GioHang :GioHangReducer , 
    MaXoaKhoaHoc : XoaKhoaHoc ,
})

export default rootReducer ;