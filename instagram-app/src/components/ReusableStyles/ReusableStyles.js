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

  ${props =>
    props.post &&
    css`
      border: 0;
      background: white;
      color: #0267d6;
      font-size: 1rem;
    `};

  ${props =>
    props.login &&
    css`
      padding: 1rem;
      padding-left: 3rem;
      padding-right: 3rem;
      font-size: 2rem;
      border-radius: 5px;

      &:hover {
        cursor: pointer;
      }

      &:focus {
        outline: 0;
      }
    `};
`;

const Text = styled.span`
  font-size: 1rem;
  ${props =>
    props.username &&
    css`
      font-weight: bold;
    `};

  ${props =>
    props.timestamp &&
    css`
      padding-left: 1rem;
      color: grey;
      margin-bottom: 2rem;
    `};

  ${props =>
    props.likes &&
    css`
      font-weight: bold;
      padding-left: 1rem;
      margin-bottom: 1rem;
      margin-top: 0.5rem;
    `};
`;

const Form = styled.form`
  ${props =>
    props.commentForm &&
    css`
      display: flex;
      flex-direction: row;
      margin-bottom: 1rem;
      padding-right: 1rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-top: 1px solid #e7e7e7;
      width: 95%;
      margin-left: 1rem;
    `};

  ${props =>
    props.loginForm &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: center;
      height: 100vh;
      align-items: center;
    `};
`;

const InputField = styled.input`
  ${props =>
    props.comment &&
    css`
      border: 0;
      width: 100%;
      background: white;
      text-align: left;
    `};

  ${props =>
    props.login &&
    css`
      padding: 1rem;
      margin-right: 1rem;
      font-size: 2rem;
      border-radius: 5px;
      text-align: left;
    `};
`;

export { Button, Text, Form, InputField };
