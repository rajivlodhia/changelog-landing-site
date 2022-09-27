import type { NextComponentType, NextPageContext } from "next";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import {
    Container,
    Form,
    Label,
    SubmitRow,
    TextInput,
    ValidationError,
} from "../theme";

import {
    useForm,
    SubmitHandler,
    useFieldArray,
    Controller,
} from "react-hook-form";

import {
    EmailField,
    FormRow,
    MainHeading,
    Section,
    SubmitButton,
    SubText,
    FormRowItem,
    FormLabel,
    ProductDescription,
    HeaderContainer,
    FormContainer,
} from "./index.elements";

interface Props {}

interface IFormInputs {
    email: string;
}

const schema = z.object({
    email: z.string().email({ message: "Please enter a valid email address." }),
});

const Index: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
    const [formStep, setFormStep] = useState(0);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const {
        register,
        handleSubmit,
        control,
        watch,
        reset,
        formState: { errors },
    } = useForm<IFormInputs>({
        resolver: zodResolver(schema),
    });

    const formSubmitHandler: SubmitHandler<IFormInputs> = async (data) => {
        console.log("Submitted Data: ", data);
        setFormStep(1);
        const token = await recaptchaRef.current?.getValue();
        const templateParams = {
            email: data.email,
            "g-recaptcha-response": token,
        };
        const adminEmail = await emailjs
            .send(
                "service_0kops2r",
                "template_blx6rdb",
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_KEY
            )
            .then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                    setFormStep(2);
                },
                function (error) {
                    console.log("FAILED...", error);
                    setFormStep(3);
                }
            );
        console.log("Email: ", adminEmail);

        const userEmail = await emailjs
            .send(
                "service_0kops2r",
                "template_2wpdirt",
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_KEY
            )
            .then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                    setFormStep(2);
                },
                function (error) {
                    console.log("FAILED...", error);
                    setFormStep(3);
                }
            );
        console.log("Email: ", userEmail);
    };
    return (
        <Section>
            <Container
                alignItems="space-between"
                justifyContent="space-between"
            >
                <HeaderContainer>
                    <MainHeading>Chxngelog</MainHeading>
                    <SubText>
                        All your changelogs managed from one place
                    </SubText>
                </HeaderContainer>

                <FormContainer onSubmit={handleSubmit(formSubmitHandler)}>
                    <FormRow>
                        <FormLabel>Sign-up for updates</FormLabel>
                        <FormRowItem>
                            <EmailField
                                type="email"
                                placeholder="email@provider.com"
                                defaultValue=""
                                {...register("email")}
                            />
                            {formStep === 0 && (
                                <SubmitButton type="submit" value="Sign-up" />
                            )}
                            {formStep === 1 && (
                                <SubmitButton
                                    type="submit"
                                    value="Loading..."
                                />
                            )}
                            {formStep === 2 && (
                                <SubmitButton type="submit" value="Complete" />
                            )}
                        </FormRowItem>
                    </FormRow>
                    <ValidationError>
                        {errors.email && errors.email.message}
                    </ValidationError>

                    <FormRow>
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={
                                process.env
                                    .NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string
                            }
                        />
                    </FormRow>
                </FormContainer>

                {/* <h2>Never write your changelog more than once</h2> */}
                <ProductDescription>
                    It's common for a company to show off a changelog in more
                    than one place to as many people as possible. The problem is
                    that you'd need to work to create the consistency between
                    changelogs. This is a new a new software that allows you to
                    create, manage and host your projects' changelogs all in one
                    place. Create your changelog here and use it whereever you
                    need it.
                </ProductDescription>
                <ProductDescription>
                    Let's say you're releasing a new version of your software
                    and you want to share the changelog with your users. You'll
                    want the changelog on your website, you might want to send
                    an email out about the update and maybe you'll want the
                    changelog to show on your software itself. In this case, you
                    could use chxngelog.com to avoid having three separately
                    written changelogs. That would also give you the power to
                    make adjustments to your changelog that would impact all
                    three locations.
                </ProductDescription>
            </Container>
        </Section>
    );
};

export default Index;
