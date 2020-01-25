import React, { useState } from "react";
import { injectIntl, FormattedMessage } from "react-intl";
import { Form, Field } from "react-final-form";
import { withRouter } from "react-router-dom";

import { useTheme } from "../../ThemeContext";

import validator, { composeValidators } from "../Validation/";

import { voivodeships } from "../../assets/const/form";

import MyDropzone from "../Dropzone";

import {
  Paper,
  InputBox,
  FormBox,
  ButtonBox,
  Button,
  ErrorLabel
} from "./AddShelterForm.style";

import { TextField } from "../../assets/common/Input.style";

const AddShelterForm = ({ onSubmit = () => {}, intl, loading, history }) => {
  const theme = useTheme();
  const [currentImages, setCurrentImages] = useState([]);
  const [voivodeship, setVoivodeship] = useState("");

  const handleChange = event => {
    const value = event.target.value;

    setVoivodeship(value);
  };

  return (
    <Paper color="inherit">
      <Form
        onSubmit={(values, form) => {
          onSubmit(values, voivodeship, currentImages);
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
                <Field
                  name="phone"
                  validate={composeValidators(validator.mustBePhone)}
                >
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        theme={theme}
                        label={intl.formatMessage({ id: "APP_LABEL.PHONE" })}
                        type="text"
                        error={meta.touched && meta.error ? true : false}
                        variant="outlined"
                        margin="normal"
                        autoComplete="off"
                      />
                      {meta.touched && meta.error && (
                        <ErrorLabel theme={theme}>{meta.error}</ErrorLabel>
                      )}
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
                <Field name="address">
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        theme={theme}
                        label={intl.formatMessage({ id: "APP_LABEL.ADDRESS" })}
                        type="text"
                        variant="outlined"
                        margin="normal"
                        autoComplete="off"
                      />
                      {meta.touched && meta.error && (
                        <ErrorLabel theme={theme}>{meta.error}</ErrorLabel>
                      )}
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
                <Field name="files">
                  {({ input, meta }) => (
                    <MyDropzone
                      currentImages={currentImages}
                      setCurrentImages={setCurrentImages}
                    />
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
                status="cancel"
                theme={theme}
                onClick={() => history.goBack()}
              >
                <FormattedMessage id="APP_MODAL.CANCEL" />
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="inherit"
                theme={theme}
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

export default withRouter(injectIntl(AddShelterForm));
