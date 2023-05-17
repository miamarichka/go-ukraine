/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';
import { FormStyled, FieldStyled, FormContainer,
  FormHeader, SpanLine, SpanText,
  SpanWrap, ButtonSubmit, InnerWrapMedia } from './SignUpForm.styled';
import { SocialMediaEnter } from './SocialMediaEnter';
import { SelectField, TextareField } from './ReviewForm.styled';

export const ReviewForm = () => {
  const schema = yup.object().shape({
    title: yup.string().min(6).max(44).required(),
    description: yup.string().min(6).max(112).required(),
    rating: yup.string().required(),
  });

  const initialValues = {
    title: '',
    description: '',
    rating: '5',
  };

  const SubmitHandler = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <FormContainer>
      <FormHeader>Leave a review</FormHeader>
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={SubmitHandler}
      >
        <FormStyled>
          <SelectField
            as="select"
            name="rating"
            className="select"
          >
            <option value="5">Definitely worth a visit</option>
            <option value="4">Pleasant impressions</option>
            <option value="3">It could have been better</option>
            <option value="2">Unsatisfied</option>
            <option value="1">Don`t recommend</option>
          </SelectField>
          <label htmlFor="title">
            <FieldStyled
              id="title"
              type="text"
              name="title"
              placeholder="Title"
            />
            <ErrorMessage name="title" component="div" />
          </label>
          <label htmlFor="description">
            <TextareField
              id="description"
              as="textarea"
              name="description"
              onChange={e => console.log(e.target.value)}
              placeholder="Write your impression..."
            />
            <ErrorMessage name="description" component="div" />
          </label>
          <InnerWrapMedia>
            <SpanWrap>
              <SpanLine />
              <SpanText>Share your experience in</SpanText>
              <SpanLine />
            </SpanWrap>
            <SocialMediaEnter />
            <ButtonSubmit type="submit">
              Leave a review
            </ButtonSubmit>
          </InnerWrapMedia>
        </FormStyled>
      </Formik>
    </FormContainer>
  );
};
