import React from 'react';
import { UserAccount, Orders, UserAccountEdit, Login, Signup } from '../pages';

const Option = ({ type, data, setType }) => {
    if (type === "UserAccount") {
        return <UserAccount />;
    } else if (type === "Orders"){
        return <Orders />;
    }else if( type === "UserAccountEdit") {
        return <UserAccountEdit data={data} setType={setType} />
    }else if( type === "Login") {
        return <Login />
    }else if(type === "Signup") {
        return <Signup />
    }
    else {
        return false;
    }
};

export default Option;