/* eslint-disable no-console */
import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  ButtonSubmitCentered, FieldStyledBorder, FormContainer,
  FormStyled,
  IconPSW,
  IconPSWSlashed,
  LabelPSW,
} from './EditProfileForm.styled';
import { useAuth } from '../../api/zustand/useAuth';
import { useStore } from '../../api/zustand/authStore';

export const EditProfileForm = () => {
  const { user } = useAuth();
  const setNewValues = useStore(state => state.editData);

  const [isVisiblePSW, setIsVisiblePSW] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(16).required(),
  });

  const initialValues = {
    name: user.name,
    email: user.email,
    password: user.password,
  };

  const SubmitHandler = async(values) => {
    setNewValues(values);
    
  };

  return (
    <FormContainer>
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={SubmitHandler}
      >
        <FormStyled>
          <label htmlFor="name">
            <FieldStyledBorder
              id="name"
              type="name"
              name="name"
              placeholder={user.name}
            />
            <ErrorMessage name="name" component="div" />
          </label>
          <label htmlFor="email">
            <FieldStyledBorder
              id="email"
              type="email"
              name="email"
              placeholder={user.email}
            />
            <ErrorMessage name="email" component="div" />
          </label>

          <LabelPSW htmlFor="password">
            <FieldStyledBorder
              id="password"
              type={isVisiblePSW ? 'text' : 'password'}
              name="password"
              placeholder={user.password}
            />
            {isVisiblePSW
              ? <IconPSWSlashed onClick={() => setIsVisiblePSW(false)} />
              : <IconPSW onClick={() => setIsVisiblePSW(true)} />
            }
            <ErrorMessage name="password" component="div" />
          </LabelPSW>

          <ButtonSubmitCentered type="submit">
            Save
          </ButtonSubmitCentered>

        </FormStyled>
      </Formik>
    </FormContainer>
  );
};
