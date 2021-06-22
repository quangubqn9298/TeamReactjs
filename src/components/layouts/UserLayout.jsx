import React from 'react';
import { connect } from "react-redux";
import BodyLayout from './bodyLayout';


function UserLayout({ dispatch, CurrrentUser }) {

    return (
        <div>
            {
                CurrrentUser === 'Phuong' ? <BodyLayout></BodyLayout> : <div>Chua dang nhap</div>
            }
        </div>
    );
}

export default connect((state) => ({
    CurrrentUser: state.user,
}))(UserLayout);