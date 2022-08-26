import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    height: 100vh;
    background-color: #edede9;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.7px;
    @media screen and (max-width: 600px) {
        padding: 0 10px;
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MainHeading = styled.h1`
    font-size: 4rem;
    font-family: "Tajawal-Light", sans-serif;
    letter-spacing: 8px;
    text-transform: lowercase;
    position: relative;
    :after {
        content: "";
        display: block;
        bottom: 0;
        width: 115%;
        position: absolute;
        transform: translate(-50%, 0);
        left: 50%;
        top: 53%;
        z-index: -1;
        border-top: 7px solid #fbd73d;
        @media screen and (max-width: 600px) {
            border-width: 3px;
        }
    }
    @media screen and (min-width: 600px) {
        font-size: 8rem;
    }
`;

export const SubText = styled.p`
    font-size: 1.8rem;
    text-align: center;
`;

export const ProductDescription = styled.p`
    font-size: 1.3rem;
    text-align: center;
    margin: 50px auto 0;
    @media screen and (min-width: 600px) {
        width: 60%;
    }
`;

export const FormContainer = styled.form`
    width: 100%;
    @media screen and (max-width: 600px) {
        margin-top: 40px;
    }
`;

export const FormRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: hsl(211, 67%, 21%);
    padding: 60px 0;
`;
export const FormRowItem = styled.div`
    display: flex;
    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 80%;
    }
`;

export const FormLabel = styled.p`
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--white-pure);
`;

export const EmailField = styled.input`
    outline: none;
    border: 2px solid white;
    width: 350px;
    height: 4rem;
    padding: 1rem 1.5rem;
    border-radius: 50px 0 0 50px;

    font-size: 1.4rem;
    :focus {
        border: 2px solid black;
    }
    @media screen and (max-width: 600px) {
        width: 100%;
        border-radius: 30px 30px 0 0;
    }
`;

export const SubmitButton = styled.input`
    outline: none;
    border: none;
    padding: 1rem 3rem;
    height: 4rem;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: inherit;
    border-radius: 0 50px 50px 0;
    background-color: hsl(47, 100%, 65%);
    color: black;
    transition: all 0.15s ease-in-out;
    cursor: pointer;
    &:hover {
        background-color: hsl(47, 100%, 70%);
        color: black;
    }
    @media screen and (max-width: 600px) {
        width: 100%;
        border-radius: 0 0 30px 30px;
    }
`;
