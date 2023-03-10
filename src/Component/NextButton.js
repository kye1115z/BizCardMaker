import React from "react";
import styled from "styled-components"
//import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import Info from "./Info";

const Btn = styled.button`
    width: 87%;
    height: 65px;
    background: ${(props) => props.color};
    border-radius: 50px;
    border: none;
    color: white;
    font-size: 16px;
    font-family: 'yg-jalnan';
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    &:active {
        position: relative;
        transform: scale(0.95);
      }
    `;



function NextButton({info, color, classN}) {
    const navigate = useNavigate();

    const Nav = () => {
        if(info.length >= 1) {
            navigate('/Info', {
                state: { name: info,
                },
            });
        }
        else {
            alert("정보을 입력하세요!");
        }
    }

    return (
        <>
            <Btn
                type="button"
                onClick={() => {
                    Nav();
                }}
                color = {color}
            >다음 단계</Btn>
        </>
    );
}

export default NextButton;