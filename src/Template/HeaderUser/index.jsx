import React,{Fragment} from 'react';
import {Route} from 'react-router-dom';
import Header from '../../Layouts/Header/index';
const HomeLayout = (props) => {
    return (
        <Fragment>
            <Header />
            {props.children}
        </Fragment>
    )
};

export const HeaderUser = ({Component,...rest}) =>{ 
    return (
        <Route {...rest} render={(props) => {
            return (
                <HomeLayout>
                    <Component  {...props}/>
                </HomeLayout>
            )
        }} />
    )
}