import React, { useState } from 'react';
import styled from 'styled-components';

const Modal = (props) => {
    

    const { content, label, leftIcon, openModal, isOpen, closeModal } = props;

    

    return (
        <div>
            <OpenButton onClick={openModal}>{label}{leftIcon && <IconLeft>{leftIcon}</IconLeft>}</OpenButton>

            {isOpen && (
                <ModalOverlay>
                    <ModalContent>
                        <CloseButton onClick={closeModal}>&times;</CloseButton>
                        {content }
                    </ModalContent>
                </ModalOverlay>
            )}
        </div>
    );
};




const OpenButton = styled.button`
  padding: 20px 20px;
  margin-top:10px;
  margin-bottom:10px;
  background-color: #FF6000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #454545;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: linear-gradient(180deg, #F8EDED, #FF8225);
  padding-top: 100px;
  padding-bottom: 100px;
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 5px;
  position: relative;
  width: 80%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #f00;
  }
`;


const IconLeft = styled.span`
    display: flex;
    align-items: center;
    justify-content:center;
    padding:8px;
`;

export default Modal;
