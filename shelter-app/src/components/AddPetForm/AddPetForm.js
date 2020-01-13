import React, { useState } from "react";
import { injectIntl, FormattedMessage } from "react-intl";
import { Form, Field } from "react-final-form";

import { useTheme } from "../../ThemeContext";

import {
  Paper,
  InputBox,
  FormBox,
  ButtonBox,
  Button
} from "./AddPetForm.style";

import { TextField } from "../../assets/common/Input.style";

const AddPetForm = ({
  onSubmit = () => {},
  // TODO: wprowadzić default propsy
  intl,
  shelters = [],
  loading
}) => {
  const [shelter, setShelter] = useState("");
  const theme = useTheme();

  const handleChange = event => {
    setShelter(event.target.value);
  };

  return (
    <Paper color="inherit">
      <Form
        onSubmit={(values, form) => {
          onSubmit(values);
          setTimeout(() => {
            form.reset();
            setShelter("");
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
                <FormattedMessage id={!loading ? "ADD_PAGE.ADD_PET_BTN" : "APP_STATE.LOADING"} />
              </Button>
            </ButtonBox>
          </form>
        )}
      />
    </Paper>
  );
};

export default injectIntl(AddPetForm);
