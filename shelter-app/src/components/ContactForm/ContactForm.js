import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { injectIntl, FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

import { useTheme } from "../../ThemeContext";
import validator, { composeValidators } from "../Validation/";

import {
  Paper,
  InputBox,
  FormBox,
  ButtonBox,
  Button,
  ErrorLabel
} from "./ContactForm.style";
import { TextField } from "../../assets/common/Input.style";

const ContactForm = ({ intl, userEmail, handleSubmit }) => {
  const theme = useTheme();
  const [email] = useState(userEmail);

  return (
    <Paper color="default" theme={theme}>
      <Form
        onSubmit={(values, form) => {
          handleSubmit(values);
          setTimeout(() => {
            form.reset();
          }, 500);
        }}
        render={({
          handleSubmit,
          form,
          invalid,
          submitting,
          pristine,
          values
        }) => (
          <form onSubmit={handleSubmit}>
            <FormBox>
              <InputBox>
                <Field
                  name="userEmail"
                  validate={composeValidators(
                    validator.required,
                    validator.mustBeEmail
                  )}
                  initialValue={email}
                >
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        theme={theme}
                        label={intl.formatMessage({
                          id: "APP_LABEL.USER_EMAIL"
                        })}
                        type="email"
                        variant="outlined"
                        margin="normal"
                        error={meta.touched && meta.error ? true : false}
                      />
                      {meta.touched && meta.error && (
                        <ErrorLabel theme={theme}>{meta.error}</ErrorLabel>
                      )}
                    </>
                  )}
                </Field>
              </InputBox>
              <InputBox>
                <Field
                  name="subject"
                  validate={composeValidators(validator.required)}
                >
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        theme={theme}
                        label={intl.formatMessage({
                          id: "APP_LABEL.EMAIL_SUBJECT"
                        })}
                        type="text"
                        variant="outlined"
                        margin="normal"
                        error={meta.touched && meta.error ? true : false}
                      />
                      {meta.touched && meta.error && (
                        <ErrorLabel theme={theme}>{meta.error}</ErrorLabel>
                      )}
                    </>
                  )}
                </Field>
              </InputBox>
              <InputBox>
                <Field
                  name="message"
                  validate={composeValidators(validator.required)}
                >
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        theme={theme}
                        label={intl.formatMessage({
                          id: "APP_LABEL.MESSAGE"
                        })}
                        type="text"
                        variant="outlined"
                        margin="normal"
                        multiline
                        rows="4"
                        error={meta.touched && meta.error ? true : false}
                      />
                      {meta.touched && meta.error && (
                        <ErrorLabel theme={theme}>{meta.error}</ErrorLabel>
                      )}
                    </>
                  )}
                </Field>
              </InputBox>
              <ButtonBox>
                <Button
                  type="submit"
                  theme={theme}
                  disabled={submitting || pristine || invalid}
                >
                  <FormattedMessage id="APP_LABEL.SEND_MESSAGE" />
                </Button>
              </ButtonBox>
            </FormBox>
          </form>
        )}
      />
    </Paper>
  );
};

ContactForm.defaultProps = {
  userEmail: "",
  handleSubmit: () => {}
};

ContactForm.propTypes = {
  intl: PropTypes.object,
  userEmail: PropTypes.string,
  handleSubmit: PropTypes.func
};

export default injectIntl(ContactForm);
