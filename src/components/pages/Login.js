import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useLogin from '../../hooks/useLogin';
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
    const { handleLogin, loading, apiError } = useLogin();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(apiError);
    const navigate = useNavigate();

    const onClickLoginButton = async () => {
        let missingFields = [];
        if (!username) missingFields.push("Username");
        if (!password) missingFields.push("Password");

        if (missingFields.length > 0) {
            setError(`${missingFields.join(", ")} is required.`);
            return;
        }
        
        const result = await handleLogin({ username, password });
        if(result){
            navigate("/");
        }else{
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
                        {/* <div className="forgot-link">
                            <CustomHyperlink title="Forgot Username?" link="/forgotUsername" />
                        </div> */}
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
                        <CustomButton class="loginBtn" title={loading ? "Loading..." : "Login"} onClick={onClickLoginButton} buttonType="primary" disabled={loading} />
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
