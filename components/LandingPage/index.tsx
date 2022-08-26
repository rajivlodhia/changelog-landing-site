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

                <FormContainer
                    action="https://elielrom.us2.list-manage.com/subscribe/post"
                    method="POST"
                    noValidate
                >
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

                <h2>Never write your changelog more than once</h2>
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
                    changelog to show change
                </ProductDescription>
            </Container>
        </Section>
    );
};

export default Index;
