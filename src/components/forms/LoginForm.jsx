import React, { useEffect } from "react";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import {
  FormStyled,
  FieldStyled,
  FormContainer,
  FormHeader,
  LabelRememberMe,
  SpanLine,
  SpanText,
  SpanWrap,
  ButtonSubmit,
  InnerWrapMedia,
  InnerSpanQuestion,
  InnerButtonLink,
  InnerTextWrap,
} from "./SignUpForm.styled";
import { SocialMediaEnter } from "./SocialMediaEnter";
import { useStore } from "../../api/zustand/authStore";
import { useAuth } from "../../api/zustand/useAuth";
import { NotificationFailed } from "../Notification/Notifications";

export const LoginForm = () => {
  const logIn = useStore((state) => state.logIn);
  const hasntAccount = useStore((state) => state.hasntAccount);
  const reset = useStore((state) => state.reset);
  const { isExist, isLoggedIn} = useAuth();

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(16).required(),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const SubmitHandler = async (values) => {
    logIn(values);
  };

  return (
    <FormContainer>
      <FormHeader>Welcome Back</FormHeader>
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={SubmitHandler}>
        <FormStyled>
          <label htmlFor='email'>
            <FieldStyled
              id='email'
              type='email'
              name='email'
              placeholder='Email'
            />
            <ErrorMessage name='email' component='div' />
          </label>

          <label htmlFor='password'>
            <FieldStyled
              id='password'
              type='password'
              name='password'
              placeholder='Password'
            />
            {isExist && (
                <NotificationFailed message={"Wrong password"} />)}
            <ErrorMessage name='password' component='div' />
          </label>
          <LabelRememberMe htmlFor='rememberMe' className='rememberMe'>
            <FieldStyled
              className='rememberMe'
              id='rememberMe'
              type='checkbox'
              name='rememberMe'
            />{" "}
            Remember me
            <ErrorMessage name='rememberMe' component='div' />
          </LabelRememberMe>
          <InnerWrapMedia>
            <SpanWrap>
              <SpanLine />
              <SpanText>Or Log In With</SpanText>
              <SpanLine />
            </SpanWrap>
            <SocialMediaEnter />
            <ButtonSubmit type='submit'>Log In</ButtonSubmit>
            <InnerTextWrap>
              <InnerSpanQuestion>Don`t have an account?</InnerSpanQuestion>
              <InnerButtonLink type='button' onClick={() => hasntAccount()}>
                Sign Up here
              </InnerButtonLink>
            </InnerTextWrap>
          </InnerWrapMedia>
        </FormStyled>
      </Formik>
    </FormContainer>
  );
};
