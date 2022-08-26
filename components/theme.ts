import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: "Tajawal-Light";
      src: url("/fonts/Tajawal-Light.ttf");
      font-style: normal;
      font-weight: 100;
      font-display: swap;
    }
    @font-face {
      font-family: "Tajawal-Regular";
      src: url("/fonts/Tajawal-Regular.ttf");
      font-style: normal;
      font-weight: 100;
      font-display: swap;
    }
    @font-face {
      font-family: "Tajawal-Bold";
      src: url("/fonts/Tajawal-Bold.ttf");
      font-style: normal;
      font-weight: 100;
      font-display: swap;
    }
    
    :root {
      --gray-lighter: hsla(0, 0%, 46%, 1);
      --gray-light: hsla(0, 0%, 33%, 1);
      --gray-normal: hsla(0, 0%, 27%, 1);
      --gray-dark: hsla(0, 0%, 15%, 1);
      --gray-darker: hsla(0, 0%, 9%, 1);
      --white-off: hsla(0, 0%, 85%, 1);
      --white-pure: hsla(0, 0%, 98%, 1);
      --black-off: hsla(0, 0%, 5%, 1);
      --black-pure: hsla(0, 0%, 1%, 1);
      /* Other CSS Variables */
      --section-padding: 4rem 3rem;
      --extra-section-padding: 8rem 3rem;
      --section-extra-top-padding: 8rem 3rem 4rem 3rem;
      --container-max-width: 1800px;
      --header-height:10vh;
      @media screen and (max-width: 600px) {
        --section-padding: 3rem 1.5rem;
      }
    }
    body {
      height: 100%;
    }
    html {
    scroll-behavior: smooth;
    background-color: var(--white-pure);
    color: black;
    height: 100%;
    }   
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Tajawal-Regular', sans-serif;
        text-decoration: none;
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Tajawal-Bold', sans-serif;
    }
`;

interface ContainerProps {
    flexDirection?: string;
    alignItems?: string;
    justifyContent?: string;
}

export const Container = styled.div<ContainerProps>`
    z-index: 1;
    width: 100%;
    max-width: var(--container-max-width);
    height: 65%;
    display: flex;
    flex-direction: ${({ flexDirection }) =>
        flexDirection ? flexDirection : "column"};
    align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
    justify-content: ${({ justifyContent }) =>
        justifyContent ? justifyContent : "center"};
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 991px) {
        padding-left: 1rem;
        padding-right: 1rem;
        justify-content: center;
        align-items: center;
    }
`;

export const Section = styled.section`
    background-color: var(--white-pure);
    color: black;
    height: 100%;
    padding: var(--section-padding);
`;

export const Form = styled.form`
    width: 80%;
    color: black;
    font-weight: 600;
    @media screen and (max-width: 1100px) {
        width: 100%;
    }
`;
export const FormRow = styled.div`
    display: flex;
    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`;

interface FormRowItem {
    halfWidth?: boolean;
}

export const FormRowItem = styled.div<FormRowItem>`
    display: flex;
    flex-direction: column;
    width: ${({ halfWidth }) => (halfWidth ? "50%" : "100%")};
    padding: 0.4rem;
    @media screen and (max-width: 700px) {
        width: 100%;
    }
`;
export const Label = styled.label`
    padding-left: 0.5rem;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
`;
export const TextInput = styled.input`
    width: 100%;
    padding: 1rem 1.5rem;
    border-radius: 50px;
    font-size: 1.2rem;
`;
export const TextAreaInput = styled.textarea`
    width: 100%;
    padding: 12px 20px;
    border-radius: 6px;
    font-size: 1.2rem;
`;
export const SelectInput = styled.select`
    width: 100%;
    padding: 12px 20px;
    border-radius: 6px;
    font-size: 1.2rem;
`;
export const SelectOption = styled.option`
    width: 100%;
    font-size: 1rem;
`;

export const SubmitRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SubmitButton = styled.input`
    outline: none;
    border: none;
    padding: 1rem 3rem;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 50px;
    background-color: #a20c89;
    color: var(--white-pure);
    cursor: pointer;
    &:hover {
        background-color: var(--light-blue-hover);
    }
`;

export const FormProgressButton = styled.button`
    outline: none;
    border: none;
    padding: 1rem 1.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
`;

export const FormControlsDiv = styled.div`
    display: flex;
    width: 50%;
`;

export const NextButton = styled(FormProgressButton)`
    background-color: orange;
    &:hover {
        background-color: green;
    }
`;
export const PrevButton = styled(FormProgressButton)`
    background-color: purple;
    &:hover {
        background-color: green;
    }
`;
export const ReviewFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const FormReviewHeading = styled.h3``;
export const FormReviewTitle = styled.p`
    font-weight: 600;
    font-size: 1.2rem;
    margin: 0.5rem 0;
`;
export const FormReviewTextLink = styled.a`
    font-weight: 400;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
        color: var(--light-blue-hover);
    }
`;

export const ValidationError = styled.p`
    padding-left: 0.5rem;
    height: 2rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: red;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
`;

export const FormCheckItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1rem;
`;

export const FormSubHeading = styled.h3`
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
`;
export const CheckboxInput = styled.input`
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
`;
export const CheckboxLabel = styled.label``;
export const CheckboxError = styled.span`
    color: red;
`;

export default GlobalStyles;
