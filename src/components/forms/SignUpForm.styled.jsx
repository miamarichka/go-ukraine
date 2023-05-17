import styled from 'styled-components';
import { Form, Field } from 'formik';
import { BtnStyled } from '../../utils/buttonStyled';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LabelRememberMe = styled.label`
display: flex;
justify-content: flex-start;
align-items: center;
margin-left: -4px;
margin-bottom: 40px;
font-size: 16px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
color: ${props => props.theme.colors.black};
`;

export const FieldStyled = styled(Field)`
width:450px;
height: 62px;
padding-left: 20px;
&.rememberMe{
margin-right:16px;
width:24px;
height: 24px;
}
`;

export const FormContainer = styled.div`
  margin: 16px 120px 0px 120px;
`;

export const FormHeader = styled.h2`
font-family: Inter;
font-weight: 400;
font-size: 36px;
line-height: 54px;
display: block;
margin-bottom: 16px;
text-align: center;
`;

export const SpanLine = styled.span`
width: 119px;
border: 2px solid ${props => props.theme.colors.gray}
`;

export const SpanText = styled.span`
font-size: 16px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: center;
`;

export const SpanWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 32px;
`;

export const ButtonSubmit = styled(BtnStyled)`
margin-bottom: 20px;
`;

export const InnerWrapMedia = styled.div`
text-align: center;
`;

export const InnerSpanQuestion = styled.span`
font-size: 16px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
color: ${props => props.theme.colors.gray};
display: block;
`;

export const InnerButtonLink = styled.button`
border: none;
border-bottom: 2px solid ${props => props.theme.colors.black};;
background-color: ${props => props.theme.colors.white};
color: ${props => props.theme.colors.black};
font-family: MacPaw Fixel;
font-size: 16px;
font-weight: 600;
line-height: 22px;
letter-spacing: 0em;
`;

export const InnerTextWrap = styled.div`
display: flex;
justify-content: center;
gap: 8px;
margin-bottom: 58px;
`;
