import styled from 'styled-components';
import { Field } from 'formik';

export const SelectField = styled(Field)`
font-family: MacPaw Fixel;
font-size: 16px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
width: 476px;
border: none;
border-bottom: 1px solid black;
height: 40px;
color: ${props => props.theme.colors.gray};
`;

export const TextareField = styled(Field)`
font-family: MacPaw Fixel;
width:452px;
height: 180px;
padding-left: 20px;
padding-top: 20px;
font-size: 16px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
`;
