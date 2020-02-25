import React, { useState } from "react";
import { injectIntl, FormattedMessage } from "react-intl";
import { Form, Field } from "react-final-form";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { useTheme } from "../../ThemeContext";

import MyDropzone from "../Dropzone";

import {
  Paper,
  InputBox,
  FormBox,
  ButtonBox,
  Button
} from "./AddPetForm.style";

import { TextField } from "../../assets/common/Input.style";

const AddPetForm = ({ onSubmit, intl, shelters, loading, history }) => {
  const [currentImages, setCurrentImages] = useState({
    name: "",
    file: null
  });
  const [shelter, setShelter] = useState("");
  const [petSex, setPetSex] = useState("");
  const theme = useTheme();

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "shelter") {
      setShelter(value);
    } else if (name === "sex") {
      setPetSex(value);
    }
  };

  return (
    <Paper color="inherit">
      <Form
        onSubmit={(values, form) => {
          onSubmit(values, shelter, petSex, currentImages, setCurrentImages);
          setTimeout(() => {
            form.reset();
            setShelter("");
            setPetSex("");
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
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            encType="multipart/form-data"
          >
            <FormBox>
              <InputBox>
                <Field name="type">
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        theme={theme}
                        label={intl.formatMessage({
                          id: "APP_LABEL.GENRE"
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
                <Field name="sex" initialValue={petSex}>
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        theme={theme}
                        select
                        label={intl.formatMessage({
                          id: "APP_LABEL.SEX"
                        })}
                        value={petSex}
                        onChange={handleChange}
                        SelectProps={{
                          native: true
                        }}
                        variant="outlined"
                        margin="normal"
                      >
                        <option value=""></option>

                        <option value="female">
                          {intl.formatMessage({ id: "APP_LABEL.FEMALE" })}
                        </option>
                        <option value="male">
                          {intl.formatMessage({ id: "APP_LABEL.MALE" })}
                        </option>
                      </TextField>
                    </>
                  )}
                </Field>
              </InputBox>
              <InputBox>
                <Field name="name">
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        theme={theme}
                        label={intl.formatMessage({
                          id: "APP_LABEL.NAME"
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
                <Field name="age">
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        theme={theme}
                        label={intl.formatMessage({
                          id: "APP_LABEL.AGE"
                        })}
                        type="number"
                        variant="outlined"
                        margin="normal"
                      />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </>
                  )}
                </Field>
              </InputBox>
              <InputBox>
                <Field name="shelter" initialValue={shelter}>
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        theme={theme}
                        select
                        label={intl.formatMessage({
                          id: "APP_LABEL.SHELTERS"
                        })}
                        value={shelter}
                        onChange={handleChange}
                        SelectProps={{
                          native: true
                        }}
                        variant="outlined"
                        margin="normal"
                      >
                        <option value=""></option>
                        {shelters.map(option => (
                          <option key={option._id} value={option._id}>
                            {option.name}
                          </option>
                        ))}
                      </TextField>
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
                disabled={
                  submitting ||
                  pristine ||
                  invalid ||
                  currentImages.file === null
                }
              >
                <FormattedMessage
                  id={!loading ? "ADD_PAGE.ADD_PET_BTN" : "APP_STATE.LOADING"}
                />
              </Button>
            </ButtonBox>
          </form>
        )}
      />
    </Paper>
  );
};

AddPetForm.defaultProps = {
  onSubmit: () => {},
  shelters: []
};

AddPetForm.propTypes = {
  onSubmit: PropTypes.func,
  intl: PropTypes.object,
  loading: PropTypes.bool,
  shelters: PropTypes.array,
  history: PropTypes.object
};

export default withRouter(injectIntl(AddPetForm));
