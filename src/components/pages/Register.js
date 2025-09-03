import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//styles
import '../styles/register.css';
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';
import CustomHyperlink from '../common/CustomHyperlink';
import CustomText from '../common/CustomText';
//mui
import { Container } from '@mui/material';

// API
import useRegister from '../../hooks/useRegister';

function RegisterPage() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [mobileNo, setmobileNo] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const { handleRegister, isLoading, apiError } = useRegister();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const onClickRegisterButton = async () => {
        setError(null);
        let missingFields = [];

        if (!email) missingFields.push("Email");
        if (!username) missingFields.push("Username");
        if (!password) missingFields.push("Password");
        if (!confirmPassword) missingFields.push("Confirm Password");
        if (!mobileNo) missingFields.push("Mobile No");
        if (!lastName) missingFields.push("Last Name");
        if (!firstName) missingFields.push("First Name");

        if (missingFields.length > 0) {
            setError(`${missingFields.join(", ")} is required.`);
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        const result = await handleRegister({ email, username, password, confirmPassword, mobileNo, lastName, firstName });

        if (result && result.statusText === "OK") {
            if(result.data && result.data.success) {
                navigate("/login");
            }else{
                setError(result.data.message);
            }
        } else {
            setError("Fail to register");
            console.error("Registration failed:", apiError);
        }
    }

    return (
        <div className="registerContainer">
            <CustomText text="CyberTIP" type="title" />
            <Container maxWidth="sm" >
                <CustomInput
                    type="text"
                    title="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <CustomInput
                    type="text"
                    title="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <CustomInput
                    type="email"
                    title="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <CustomInput
                    type="text"
                    title="Mobile Number"
                    value={mobileNo}
                    onChange={(e) => setmobileNo(e.target.value)}
                />

                <CustomInput
                    type="text"
                    title="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <CustomInput
                    type="password"
                    title="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <CustomInput
                    type="password"
                    title="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <CustomButton title={isLoading ? "Registering..." : "Register"} buttonType="primary" onClick={onClickRegisterButton} disabled={isLoading}/>
                <CustomHyperlink title="Already have an account? Login" link="/login" textAlign="center"/>
                { error && (
                    <div className="error-message">
                        <CustomText text={error} type="error" />
                    </div>
                )}
                
            </Container>
        </div>
    );


}

export default RegisterPage;