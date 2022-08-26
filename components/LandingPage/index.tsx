import type { NextComponentType, NextPageContext } from "next";
import { Container, Form, Label, SubmitRow, TextInput } from "../theme";
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
const url = "https://chxngelog.us14.list-manage.com/subscribe/post";
const Index: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
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

                <FormContainer>
                    <FormRow>
                        <FormLabel>Sign-up for updates</FormLabel>
                        <input
                            type="hidden"
                            name="u"
                            value="0f75b3711d3dfb5f9699d8e6b"
                        />
                        <input type="hidden" name="id" value="afca93fc51" />
                        <FormRowItem>
                            <EmailField
                                type="email"
                                placeholder="email@provider.com"
                            />
                            <SubmitButton type="submit" value="Sign-up" />
                        </FormRowItem>
                    </FormRow>
                </FormContainer>

                <ProductDescription>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                </ProductDescription>
            </Container>
        </Section>
    );
};

export default Index;
