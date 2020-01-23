import React, { useState } from "react";
import { injectIntl, FormattedMessage } from "react-intl";
import { Form, Field } from "react-final-form";
import { withRouter } from "react-router-dom";

import validator, { composeValidators } from "../Validation/";

import { useTheme } from "../../ThemeContext";

import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import {
  Paper,
  InputBox,
  FormBox,
  ButtonBox,
  Button,
  ErrorBox,
  ErrorNotification,
  ErrorLabel
} from "./EditAccountPanel.style";
import { TextField } from "../../assets/common/Input.style";

const EditAccountPanel = ({
  onSubmit = () => {},
  // TODO: wprowadzić default propsy
  intl,
  history,
  loading,
  email = ""
}) => {
  const theme = useTheme();
  const [hideNewPassword, setHideNewPassword] = useState(true);
  const [hideOldPassword, setHideOldPassword] = useState(true);
  return (
    <Paper color="inherit">
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
          <form onSubmit={handleSubmit} autoComplete="off">
            <FormBox>
              <InputBox>
                <Field name="email">
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        theme={theme}
                        label={intl.formatMessage({ id: "APP_LABEL.EMAIL" })}
                        type="email"
                        value={email}
                        disabled
                        variant="outlined"
                        error={meta.touched && meta.error ? true : false}
                        margin="normal"
                      />
                    </>
                  )}
                </Field>
              </InputBox>
              <InputBox>
                <Field
                  name="newPassword"
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
                          id: "APP_LABEL.NEW_PASSWORD"
                        })}
                        type={hideNewPassword ? "password" : "text"}
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
                                  setHideNewPassword(!hideNewPassword)
                                }
                              >
                                {!hideNewPassword ? (
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
                  name="oldPassword"
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
                          id: "APP_LABEL.CONFIRM_PASSWORD"
                        })}
                        type={hideOldPassword ? "password" : "text"}
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
                                  setHideOldPassword(!hideOldPassword)
                                }
                              >
                                {!hideOldPassword ? (
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
                status="cancel"
                theme={theme}
                onClick={() => history.goBack()}
              >
                <FormattedMessage id="APP_MODAL.CANCEL" />
              </Button>
              <Button
                theme={theme}
                type="submit"
                variant="contained"
                color="inherit"
                disabled={submitting || pristine || invalid}
              >
                <FormattedMessage
                  id={
                    !loading ? "APP_BUTTONS.EDIT_PASSWORD" : "APP_STATE.LOADING"
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

export default withRouter(injectIntl(EditAccountPanel));
