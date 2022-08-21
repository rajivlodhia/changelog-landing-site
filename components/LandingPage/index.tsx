import type { NextComponentType, NextPageContext } from "next";
import {
  Form,
  FormRow,
  FormRowItem,
  Label,
  SubmitButton,
  SubmitRow,
  TextInput,
} from "../theme";
import { Section } from "./index.elements";

interface Props {}

const Index: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
  return (
    <Section>
      <h1>Chxngelog.com</h1>
      <p>A slogan for the website</p>

      <div>
        <Form>
          <FormRow>
            <FormRowItem>
              <Label>Email:</Label>
              <TextInput type="email" placeholder="email@provider.com" />
            </FormRowItem>
          </FormRow>
          <FormRow>
            <SubmitRow>
              <SubmitButton type="submit" value="Sign up" />
            </SubmitRow>
          </FormRow>
        </Form>
      </div>
    </Section>
  );
};

export default Index;
