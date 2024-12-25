import React, { useState } from 'react';
import { processLogin } from '../../api/login';
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';
import '../../styles/login.css';
import CustomHyperlink from '../common/CustomHyperlink';

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onClickLoginButton = () => {
        console.log(processLogin({username, password}));
    }

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    }

    const handleChangePassword = (event) => {
        if(event.target.value.length <= 10)
            setPassword(event.target.value);
    }

    return (
        <div className='container'>
            <h1>CYBERTIP</h1>
            <CustomInput 
                title="Username" 
                value={username} 
                onChange={handleChangeUsername} />
                
            <CustomInput 
                title="Password" 
                value={password} 
                onChange={handleChangePassword} />
            <CustomButton title="Login" onClick={onClickLoginButton} />
            <CustomHyperlink title="No Account? Register Now!" link="#"/>
        </div>
    );
}

export default LoginPage;
