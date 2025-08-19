import React, { useState } from 'react';
//styles
import '../styles/register.css';
import CustomInput from '../common/CustomInput';
import { Col, Row } from 'react-bootstrap';
import CustomButton from '../common/CustomButton';
import CustomHyperlink from '../common/CustomHyperlink';
import CustomText from '../common/CustomText';
import Container from 'react-bootstrap/Container';
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
    const { handleRegister, loading, error } = useRegister();

    const onClickRegisterButton = async () => {
        if (loading) {
            console.error("Registration in progress, please wait...");
            return;
        }

        if(error) {
            console.error("Error occurred during registration:", error);
            return;
        }

        if (password !== confirmPassword) {
            console.error("Passwords do not match");
            return;
        }
        
        if (!email || !username || !password || !confirmPassword || !mobileNo || !lastName || !firstName) {
            console.error("All fields are required");
            return;
        }

        const result = await handleRegister({ email, username, password, confirmPassword, mobileNo, lastName, firstName });
        if(result && result.statusText === "OK"){
            console.log(result.data);
        }else{
            console.error("Registration failed:", result);
        }
    }

    return (
        <div className="registerContainer">
            <CustomText text="CyberTIP" type="title" />
            <Container fluid >
                <Row className="g-4">
                    <Col>
                        <CustomInput
                            type="text"
                            title="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Col>
                    <Col>
                    <CustomInput
                        type="text"
                        title="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    </Col>
                </Row>

                <Row className="g-4">
                    <Col>
                    <CustomInput
                        type="email"
                        title="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </Col>
                    <Col>
                    <CustomInput
                        type="text"
                        title="Mobile Number"
                        value={mobileNo}
                        onChange={(e) => setmobileNo(e.target.value)}
                    />
                    </Col>
                </Row>

                <Row className="g-4">
                    <Col>
                    <CustomInput
                        type="text"
                        title="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    </Col>
                </Row>

                <Row className="g-4">
                    <Col>
                    <CustomInput
                        type="password"
                        title="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </Col>
                </Row>

                <Row className="g-4">
                    <Col>
                    <CustomInput
                        type="password"
                        title="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    </Col>
                </Row>

                <Row className="g-4">
                    <Col>
                    <CustomButton title="Register" buttonType="primary" onClick={onClickRegisterButton} />
                    </Col>
                </Row>

                <Row className="login-link">
                    <Col>
                    <CustomHyperlink title="Already have an account? Login" link="/login" />
                    </Col>
                </Row>
            </Container>
        </div>
    );

    
}

export default RegisterPage;