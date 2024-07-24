import { useState } from 'react';
import PntInput from '../Components/PntInput.jsx';
import PntButton from '../Components/PntButton.jsx';
import { FaLock, FaUser } from 'react-icons/fa';
import styled, { createGlobalStyle } from 'styled-components';
import config from './../config.jsx'



const SLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const Login = async () => {
        const loginData = {
            Username: username,
            Password: password
        };
        const data = { loginDto: loginData };
        

        fetch(config.apiUrl +'Auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => console.error('Error:', error));
    };

    const logoUrl = 'https://www.panteon.games/wp-content/uploads/2021/05/news03.png';

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRightIconClick = () => {
        alert('Right icon clicked!');
    };

    const handleButtonClick = () => {
         Login();
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
                        label="Username"
                        value={username}
                        onChange={handleUsernameChange}
                        leftIcon={<FaUser />}
                        onRightIconClick={handleRightIconClick}
                    />
                    <PntInput
                        label="Password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        leftIcon={<FaLock />}
                        onRightIconClick={handleRightIconClick}
                    />
                    <PntButton label="Login" onClick={handleButtonClick} />
                    <SignUp href="/signup">Don't have an account? Sign Up</SignUp>
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
  top: 22%;
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

export default SLogin;
