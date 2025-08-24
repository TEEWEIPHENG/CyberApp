import React, { useState } from 'react';
import { processLogin } from '../../api/login';
//custom components
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';
import CustomHyperlink from '../common/CustomHyperlink';
import CustomText from '../common/CustomText';
//bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/login.css';

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const onClickLoginButton = async () => {
        setError(null);

        let missingFields = [];
        if (!username) missingFields.push("Username");
        if (!password) missingFields.push("Password");

        if (missingFields.length > 0) {
            setError(`${missingFields.join(", ")} is required.`);
            return;
        }
        
        const result = await processLogin({ username, password });
        if(result && result.data && result.data.success){
            console.log("Login successful:", result);
            // Redirect to home page or dashboard
        }else{
            console.error("Login failed:", result);
            setError(result?.data?.message || "Fail to login");
        }
    }

    return (
        <Container className="loginContainer">
            <div className="loginCard">
                <h1 className="loginHeader">CyberTIP</h1>
                <Row className="loginRow">
                    <Col>
                        <CustomInput 
                            title="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <div className="forgot-link">
                            <CustomHyperlink title="Forgot Username?" link="/forgotUsername" />
                        </div>
                    </Col>
                </Row>

                <Row className="loginRow">
                    <Col>
                        <CustomInput 
                            title="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="forgot-link">
                            <CustomHyperlink title="Forgot Password?" link="/forgotPassword" />
                        </div>
                    </Col>
                </Row>

                <Row className="loginRow">
                    <Col>
                        <CustomButton class="loginBtn" title="Login" onClick={onClickLoginButton} buttonType="primary" />
                    </Col>
                </Row>

                <Row className="loginRow">
                    <Col className="register-link">
                        <CustomHyperlink title="No Account? Register Now!" link="/register" />
                    </Col>
                </Row>
                { error && (
                    <div className="error-message">
                        <CustomText text={error} type="error" />
                    </div>
                )}
            </div>
             
        </Container>
    );
}

export default LoginPage;
