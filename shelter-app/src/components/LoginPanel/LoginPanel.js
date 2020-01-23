import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { injectIntl, FormattedMessage } from "react-intl";

import { useTheme } from "../../ThemeContext";
import validator, { composeValidators } from "../Validation/";

import { signUpUrl } from "../../assets/const/url";

import {
  Paper,
  InputBox,
  FormBox,
  ButtonBox,
  Button,
  ExtraText,
  ErrorBox,
  ErrorNotification,
  ErrorLabel,
  Link
} from "./LoginPanel.style";
import { TextField } from "../../assets/common/Input.style";

const LoginPanel = ({ onSubmit = () => {}, error, intl }) => {
  const [hidePassword] = useState(true);
  const theme = useTheme();

  return (
    <Paper color="inherit" theme={theme}>
      {error && (
        <ErrorBox theme={theme}>
          <ErrorNotification theme={theme}>{error.message}</ErrorNotification>
        </ErrorBox>
      )}
      <Form
        onSubmit={(values, form) => {
          onSubmit(values);
          setTimeout(() => {
            form.reset();
          }, 500);
        }}
        render={({
          handleSubmit,
          form,
          submitting,
          pristine,
          values,
          invalid
        }) => (
          <form onSubmit={handleSubmit}>
            <FormBox>
              <InputBox>
                <Field
                  name="email"
                  validate={composeValidators(
                    validator.required,
                    validator.mustBeEmail
                  )}
                >
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        theme={theme}
                        label={intl.formatMessage({ id: "LOG_IN_PAGE.EMAIL" })}
                        type="email"
                        variant="outlined"
                        margin="normal"
                        autoComplete="off"
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
                  name="password"
                  validate={composeValidators(
                    validator.required,
                    validator.mustBePassword
                  )}
                >
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        theme={theme}
                        label={intl.formatMessage({
                          id: "LOG_IN_PAGE.PASSWORD"
                        })}
                        type={hidePassword ? "password" : "text"}
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
            </FormBox>
            <ButtonBox>
              <ExtraText>
                <FormattedMessage id="LOG_IN_PAGE.REDIRECT" />
                <Link to={signUpUrl} theme={theme}>
                  <FormattedMessage id="HEADER.REGISTRATION" />!
                </Link>
              </ExtraText>
              <Button
                type="submit"
                variant="contained"
                color="inherit"
                theme={theme}
                disabled={submitting || pristine || invalid}
              >
                <FormattedMessage id="LOG_IN_PAGE.SUBMIT_BTN" />
              </Button>
            </ButtonBox>
          </form>
        )}
      />
    </Paper>
  );
};

export default injectIntl(LoginPanel);
