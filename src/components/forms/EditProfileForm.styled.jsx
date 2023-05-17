import styled from 'styled-components';
import { Form } from 'formik';
import { ButtonSubmit, FieldStyled } from './SignUpForm.styled';
import { ReactComponent as EyeIcon } from '../Icons/eye.svg';
import { ReactComponent as EyeIconSlashed } from '../Icons/eye-off.svg';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const FormContainer = styled.div`
  text-align: center;
`;

export const ButtonSubmitCentered = styled(ButtonSubmit)`
margin: auto;
margin-top: 62px;
margin-bottom: 62px;
`;

export const FieldStyledBorder = styled(FieldStyled)`
border: solid 2px black;
border-radius: 5px;
`;

export const LabelPSW = styled.label`
position: relative;
`;

export const IconPSW = styled(EyeIcon)`
position: absolute;
top: 50%;
right: 33%;
transform: translate(-50%, -50%);
`;

export const IconPSWSlashed = styled(EyeIconSlashed)`
position: absolute;
top: 50%;
right: 33%;
transform: translate(-50%, -50%);
`;
