import React, { useState } from "react";
import { injectIntl, FormattedMessage } from "react-intl";
import { Form, Field } from "react-final-form";

import { useTheme } from "../../ThemeContext";

import { voivodeships } from "../../assets/const/form";

import {
  Paper,
  InputBox,
  FormBox,
  ButtonBox,
  Button
} from "./AddShelterForm.style";

import { TextField } from "../../assets/common/Input.style";

const AddShelterForm = ({ onSubmit = () => {}, intl, loading }) => {
  const theme = useTheme();
  const [voivodeship, setVoivodeship] = useState("");

  const handleChange = event => {
    const value = event.target.value;

    setVoivodeship(value);
  };

  return (
    <Paper color="inherit">
      <Form
        onSubmit={(values, form) => {
          onSubmit(values);
          setTimeout(() => {
            form.reset();
            setVoivodeship("");
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
                <Field name="name">
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        theme={theme}
                        label={intl.formatMessage({
                          id: "APP_LABEL.SHELTER_NAME"
                        })}
                        type="text"
                        variant="outlined"
                        margin="normal"
                      />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </>
                  )}
                </Field>
              </InputBox>
              <InputBox>
                <Field name="voivodeship" initialValue={voivodeship}>
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        theme={theme}
                        select
                        name="voivodeship"
                        label={intl.formatMessage({
                          id: "APP_LABEL.VOIVODESHIP"
                        })}
                        value={voivodeship}
                        onChange={handleChange}
                        SelectProps={{
                          native: true
                        }}
                        variant="outlined"
                        margin="normal"
                      >
                        <option value=""></option>
                        {voivodeships.map((element, index) => {
                          return (
                            <option key={index} value={element.value}>
                              {element.value}
                            </option>
                          );
                        })}
                      </TextField>
                    </>
                  )}
                </Field>
              </InputBox>
              <InputBox>
                <Field name="city">
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        theme={theme}
                        label={intl.formatMessage({ id: "APP_LABEL.CITY" })}
                        type="text"
                        variant="outlined"
                        margin="normal"
                        autoComplete="off"
                      />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </>
                  )}
                </Field>
              </InputBox>
              <InputBox>
                <Field name="lat">
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        theme={theme}
                        label={intl.formatMessage({ id: "APP_LABEL.LATITUDE" })}
                        type="text"
                        variant="outlined"
                        margin="normal"
                      />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </>
                  )}
                </Field>
              </InputBox>
              <InputBox>
                <Field name="lng">
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        theme={theme}
                        label={intl.formatMessage({
                          id: "APP_LABEL.LONGITUDE"
                        })}
                        type="text"
                        variant="outlined"
                        margin="normal"
                      />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </>
                  )}
                </Field>
              </InputBox>
              <InputBox>
                <Field name="description">
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        theme={theme}
                        label={intl.formatMessage({
                          id: "APP_LABEL.DESCRIPTION"
                        })}
                        type="text"
                        variant="outlined"
                        margin="normal"
                        multiline
                        rows="4"
                      />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </>
                  )}
                </Field>
              </InputBox>
            </FormBox>
            <ButtonBox>
              <Button
                type="submit"
                variant="contained"
                color="inherit"
                theme={theme.palette}
                disabled={submitting || pristine || invalid}
              >
                <FormattedMessage
                  id={
                    !loading ? "ADD_PAGE.ADD_SHELTER_BTN" : "APP_STATE.LOADING"
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

export default injectIntl(AddShelterForm);
