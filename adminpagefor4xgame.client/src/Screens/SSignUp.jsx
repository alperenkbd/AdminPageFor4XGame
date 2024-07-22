import { useState } from 'react';
import PntInput from '../Components/PntInput.jsx';
import PntButton from '../Components/PntButton.jsx';
import { FaLock, FaUser, FaEnvelope } from 'react-icons/fa';
import styled, { createGlobalStyle } from 'styled-components';

const SSignUp = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        passwordAgain: ''
    });

    const logoUrl = 'https://www.panteon.games/wp-content/uploads/2021/05/news03.png';

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);

        if (checkIsStringEmpty(event.target.value))
            setErrors(prevErrors => ({
                ...prevErrors,
                username: ''
            }));
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);

        if (checkIsStringEmpty(event.target.value))
            setErrors(prevErrors => ({
                ...prevErrors,
                email: ''
            }));
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);

        if (checkIsStringEmpty(event.target.value))
            setErrors(prevErrors => ({
                ...prevErrors,
                passwordAgain: ''
            }));
    };

    const handlePasswordAgainChange = (event) => {
        setPasswordAgain(event.target.value);

        if (checkIsStringEmpty(event.target.value))
            setErrors(prevErrors => ({
                ...prevErrors,
                email: ''
            }));
    };

    const checkIsStringEmpty = (value) =>{
        if (value)
            return true
        return false
    }

    const validateForm = () => {

        let valid = true;
        let newErrors = { username: '', email: '', password: '', passwordAgain: '' };

        if (!username) {
            valid = false;
            newErrors.username = 'Username is required';
        }

        if (!email) {
            valid = false;
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            valid = false;
            newErrors.email = 'Email address is invalid';
        }

        if (!password) {
            valid = false;
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            valid = false;
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (!passwordAgain) {
            valid = false;
            newErrors.passwordAgain = 'Confirm password is required';
        } else if (passwordAgain !== password) {
            valid = false;
            newErrors.passwordAgain = 'Passwords do not match';
        }

        setErrors(newErrors);
        return valid;
    }

    const handleButtonClick = () => {
        if (validateForm()) {
            alert('Form submitted successfully!');
        }
            
    };

    return (
        <>
            <GlobalStyle />
            <AppWrapper>
                <ImageWrapper>
                    <Image src={logoUrl} alt="Login Logo" />
                </ImageWrapper>
                <Container>
                    <PntInput
                        label="E-mail"
                        placeholder="alex@panteon.games"
                        value={email}
                        onChange={handleEmailChange}
                        leftIcon={<FaEnvelope />}
                        error={errors.email}
                    />
                    <PntInput
                        label="Username"
                        value={username}
                        onChange={handleUsernameChange}
                        leftIcon={<FaUser />}
                        error={errors.username}
                    />
                    <PntInput
                        label="Password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        leftIcon={<FaLock />}
                        error={errors.password}
                    />
                    <PntInput
                        label="Password Again"
                        type="password"
                        value={passwordAgain}
                        onChange={handlePasswordAgainChange}
                        leftIcon={<FaLock />}
                        error={errors.passwordAgain}
                    />
                    <PntButton label="SignUp" onClick={handleButtonClick} />
                    <SignUp href="/login">Already have an account? Login</SignUp>
                </Container>
            </AppWrapper>
        </>
    );
};

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden; 
  }
`;

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #F8EDED, #FF8225);
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100%; 
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  padding: 60px;
  border: 2px solid #454545;
  background: transparent;
  border-radius: 3px;
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 13%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  border-radius: 5px;
`;

const SignUp = styled.a`
  color: #454545;
  margin-top: 30px;
  transition: color 0.3s;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #FFFFFF;
  }
`;


export default SSignUp;
