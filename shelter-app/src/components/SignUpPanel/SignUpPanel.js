import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { injectIntl, FormattedMessage } from "react-intl";
import { useMutation } from "@apollo/react-hooks";

import { useTheme } from "../../ThemeContext";

import { CREATE_ACCOUNT } from "../../views/SignUpPage/SignUpPage.query.js";

import validator, { composeValidators } from "../Validation/";

import {
  Paper,
  InputBox,
  FormBox,
  ButtonBox,
  Button,
  ErrorBox,
  ErrorNotification,
  ErrorLabel
} from "./SignUpPanel.style";
import { TextField } from "../../assets/common/Input.style";

import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const SignUpPanel = ({ onSubmit = () => {}, intl }) => {
  const theme = useTheme();
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [createAccount, { loading, error, data }] = useMutation(CREATE_ACCOUNT);

  return (
    <Paper color="inherit" theme={theme}>
      {error && !data && (
        <ErrorBox theme={theme}>
          <ErrorNotification theme={theme}>{error.message}</ErrorNotification>
        </ErrorBox>
      )}
      {data && !error && (
        <ErrorBox success="true" theme={theme}>
          <ErrorNotification theme={theme}>
            {intl.formatMessage({
              id: "SNACKBAR.CREATE_ACCOUNT_SUCCESS"
            })}
          </ErrorNotification>
        </ErrorBox>
      )}
      <Form
        onSubmit={values => onSubmit(values, createAccount)}
        validate={values => {
          const errors = {};
          if (values) {
            const confirm_password = validator.mustBeRepeatedPassword(
              values.password,
              values.confirm_password
            );
            if (confirm_password) {
              errors.confirm_password = confirm_password;
            }
          }
          return Object.keys(errors).length ? errors : undefined;
        }}
        render={({
          handleSubmit,
          form,
          submitting,
          pristine,
          values,
          invalid
        }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <FormBox>
              <InputBox>
                <Field name="name">
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        theme={theme}
                        label={intl.formatMessage({ id: "LOG_IN_PAGE.NAME" })}
                        type="text"
                        variant="outlined"
                        error={meta.touched && meta.error ? true : false}
                        margin="normal"
                      />
                      {meta.touched && meta.error && (
                        <ErrorLabel theme={theme}>{meta.error}</ErrorLabel>
                      )}
                    </>
                  )}
                </Field>
              </InputBox>
              <InputBox>
                <Field name="surname">
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        theme={theme}
                        label={intl.formatMessage({
                          id: "LOG_IN_PAGE.SURNAME"
                        })}
                        type="text"
                        variant="outlined"
                        error={meta.touched && meta.error ? true : false}
                        margin="normal"
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
                        error={meta.touched && meta.error ? true : false}
                        margin="normal"
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
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                edge="end"
                                aria-label="toggle password visibility"
                                onClick={() => setHidePassword(!hidePassword)}
                              >
                                {!hidePassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          )
                        }}
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
                  name="confirm_password"
                  validate={composeValidators(validator.required)}
                >
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        theme={theme}
                        label={intl.formatMessage({
                          id: "LOG_IN_PAGE.CONFIRM_PASSWORD"
                        })}
                        type={hideConfirmPassword ? "password" : "text"}
                        variant="outlined"
                        margin="normal"
                        error={meta.touched && meta.error ? true : false}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                edge="end"
                                aria-label="toggle password visibility"
                                onClick={() =>
                                  setHideConfirmPassword(!hideConfirmPassword)
                                }
                              >
                                {!hideConfirmPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          )
                        }}
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
              <Button
                theme={theme}
                type="submit"
                onClick={() => {
                  if (!invalid) {
                    form.submit();
                    form.reset();
                  }
                }}
                variant="contained"
                color="inherit"
                disabled={submitting || pristine || invalid}
              >
                <FormattedMessage
                  id={
                    !loading ? "SIGN_UP_PAGE.SUBMIT_BTN" : "APP_STATE.LOADING"
                  }
                />
              </Button>
            </ButtonBox>
          </form>
        )}
      />
    </Paper>
  );
};

export default injectIntl(SignUpPanel);
