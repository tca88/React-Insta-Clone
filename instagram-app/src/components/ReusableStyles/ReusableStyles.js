import React, { Component } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  ${props =>
    props.logout &&
    css`
      font-size: 1rem;
      background: white;
      border-radius: 10px;
      border: 0;
      color: gray;
      font-weight: bold;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      width: 100%;
      padding-right: 9rem;
      margin-top: 4rem;
      padding-top: 2rem;
      margin-bottom: -2rem;

      &:hover {
        cursor: pointer;
        color: #0267d6;
      }

      &:focus {
        outline: 0;
      }
    `};
`;

const UsernameText = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 1rem;
  ${props =>
    props.timestamp &&
    css`
      padding-left: 1rem;
      color: grey;
      margin-bottom: 2rem;
    `};
`;

export { Button, UsernameText, Text };
