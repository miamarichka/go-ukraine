/* eslint-disable no-unused-vars */
import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { shallow } from 'zustand/shallow';
import { useStore } from '../../api/zustand/authStore';
import { FormStyled, FieldStyled, FormContainer,
  FormHeader, LabelRememberMe, SpanLine, SpanText,
  SpanWrap, ButtonSubmit, InnerWrapMedia,
  InnerSpanQuestion, InnerButtonLink,
  InnerTextWrap } from './SignUpForm.styled';
import { SocialMediaEnter } from './SocialMediaEnter';

export const SignUpForm = () => {
  const [currentUser, registerUser] = useStore(
    state => [state.currentUser, state.registration],
    shallow,
  );
  const hasAccount = useStore(state => state.hasAccount);

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(16).required(),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const SubmitHandler = async(values) => {
    registerUser(values);
  };

  return (
    <FormContainer>
      <FormHeader>Create Account</FormHeader>
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={SubmitHandler}
      >
        <FormStyled>
          <label htmlFor="name">
            <FieldStyled
              id="name"
              type="text"
              name="name"
              placeholder="Name"
            />
            <ErrorMessage name="name" component="div" />
          </label>
          <label htmlFor="email">
            <FieldStyled
              id="email"
              type="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage name="email" component="div" />
          </label>

          <label htmlFor="password">
            <FieldStyled
              id="password"
              type="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage name="password" component="div" />
          </label>
          <LabelRememberMe htmlFor="rememberMe" className="rememberMe">
            <FieldStyled
              className="rememberMe"
              id="rememberMe"
              type="checkbox"
              name="rememberMe"
            />
            {' '}
            Remember me
            <ErrorMessage name="rememberMe" component="div" />
          </LabelRememberMe>
          <InnerWrapMedia>
            <SpanWrap>
              <SpanLine />
              <SpanText>Or Sign Up With</SpanText>
              <SpanLine />
            </SpanWrap>
            <SocialMediaEnter />
            <ButtonSubmit type="submit">
              Sign Up
            </ButtonSubmit>
            <InnerTextWrap>
              <InnerSpanQuestion>
                Already have an account?
              </InnerSpanQuestion>
              <InnerButtonLink
                type="button"
                onClick={() => hasAccount()}
              >
                Log In here
              </InnerButtonLink>
            </InnerTextWrap>
          </InnerWrapMedia>
        </FormStyled>
      </Formik>
    </FormContainer>
  );
};
