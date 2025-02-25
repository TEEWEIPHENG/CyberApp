import React, { useState } from 'react';
import { processLogin } from '../../api/login';
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';
import CustomHyperlink from '../common/CustomHyperlink';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../styles/login.css';

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onClickLoginButton = () => {
        console.log(processLogin({ username, password }));
    }

    return (
        <Container className="loginContainer">
            <div className="loginCard">
                <h1 className="loginHeader">CyberTIP</h1>

                <Row>
                    <Col>
                        <CustomInput 
                            title="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <div className="forgot-link">
                            <CustomHyperlink title="Forgot Username?" link="#" />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <CustomInput 
                            title="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="forgot-link">
                            <CustomHyperlink title="Forgot Password?" link="#" />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <CustomButton class="loginBtn" title="Login" onClick={onClickLoginButton} buttonType="primary" />
                    </Col>
                </Row>

                <Row>
                    <Col className="register-link">
                        <CustomHyperlink title="No Account? Register Now!" link="#" />
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default LoginPage;
