import React, { useState } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { injectIntl, FormattedMessage } from "react-intl";
import { Form, Field } from "react-final-form";

import { useTheme } from "../../ThemeContext";

import { voivodeships } from "../../assets/const/form";

import ChipWrapper from "../../components/Chip";

import {
  Paper,
  InputBox,
  FormBox,
  ButtonBox,
  Button,
  ChipsBox
} from "./Search.style";
import { TextField } from "../../assets/common/Input.style";

const Search = ({
  onSubmit,
  clearFilter,
  version,
  handleDelete,
  variables,
  intl
}) => {
  const theme = useTheme();
  const [genre, setGenre] = useState("");
  const [voivodeship, setVoivodeship] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");

  const ages = [
    { label: `${intl.formatMessage({ id: "APP_LABEL.LESS_1" })}`, value: 1 },
    { label: `${intl.formatMessage({ id: "APP_LABEL.LESS_3" })}`, value: 3 },
    { label: `${intl.formatMessage({ id: "APP_LABEL.LESS_5" })}`, value: 5 },
    { label: `${intl.formatMessage({ id: "APP_LABEL.LESS_8" })}`, value: 8 },
    { label: `${intl.formatMessage({ id: "APP_LABEL.LESS_10" })}`, value: 10 },
    { label: `${intl.formatMessage({ id: "APP_LABEL.MORE_10" })}`, value: 25 }
  ];

  const renderFilterChips = () => {
    const values = [];
    for (let element in variables) {
      if (variables[element] !== undefined) {
        values.push({ prop: element, value: variables[element] });
      }
    }

    return values.map((value, index) => {
      return (
        <ChipWrapper
          label={value.value}
          prop={value.prop}
          handleDelete={handleDelete}
        />
      );
    });
  };

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "genre") {
      setGenre(value);
    } else if (name === "voivodeship") {
      setVoivodeship(value);
    } else if (name === "city") {
      setCity(value);
    } else if (name === "age") {
      setAge(value);
    }
  };

  const handleClearFilter = form => {
    setCity("");
    setGenre("");
    setVoivodeship("");
    setAge("");
    form.reset();
    clearFilter();
  };

  return (
    <Paper color="inherit">
      <Form
        onSubmit={(values, form) => {
          onSubmit(values, city, voivodeship, genre, age);
          setTimeout(() => {
            form.reset();
            setCity("");
            setVoivodeship("");
            setGenre("");
            setAge("");
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
              {version !== 3 && (
                <InputBox>
                  <Field name="genre" initialValue={genre}>
                    {({ input, meta }) => (
                      <>
                        <TextField
                          {...input}
                          theme={theme}
                          select
                          label={intl.formatMessage({
                            id: "APP_LABEL.GENRE"
                          })}
                          value={genre}
                          onChange={handleChange}
                          SelectProps={{
                            native: true
                          }}
                          variant="outlined"
                          margin="normal"
                        >
                          <option value=""></option>
                          <option value="Pies">
                            {intl.formatMessage({ id: "APP_LABEL.DOG" })}
                          </option>
                          <option value="Kot">
                            {intl.formatMessage({ id: "APP_LABEL.CAT" })}
                          </option>
                        </TextField>
                      </>
                    )}
                  </Field>
                </InputBox>
              )}
              {version !== 2 && (
                <InputBox>
                  <Field name="voivodeship" initialValue={voivodeship}>
                    {({ input, meta }) => (
                      <>
                        <TextField
                          {...input}
                          theme={theme}
                          select
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
              )}
              {version !== 2 && (
                <InputBox>
                  <Field name="city" initialValue={city}>
                    {({ input, meta }) => (
                      <>
                        <TextField
                          {...input}
                          theme={theme}
                          select
                          label={intl.formatMessage({
                            id: "APP_LABEL.CITY"
                          })}
                          value={city}
                          onChange={handleChange}
                          SelectProps={{
                            native: true
                          }}
                          variant="outlined"
                          margin="normal"
                        >
                          <option value=""></option>
                          <option value="Olsztyn">Olsztyn</option>
                          <option value="Elbląg">Elbląg</option>
                          <option value="Wrocław">Wrocław</option>
                          <option value="Mysłowice">Mysłowice</option>
                        </TextField>
                      </>
                    )}
                  </Field>
                </InputBox>
              )}
              {version !== 3 && (
                <InputBox>
                  <Field name="age" initialValue={age}>
                    {({ input, meta }) => (
                      <>
                        <TextField
                          {...input}
                          theme={theme}
                          select
                          label={intl.formatMessage({
                            id: "APP_LABEL.AGE"
                          })}
                          value={age}
                          onChange={handleChange}
                          SelectProps={{
                            native: true
                          }}
                          variant="outlined"
                          margin="normal"
                        >
                          <option value=""></option>
                          {ages.map((element, index) => {
                            return (
                              <option key={element.value} value={element.value}>
                                {element.label}
                              </option>
                            );
                          })}
                        </TextField>
                      </>
                    )}
                  </Field>
                </InputBox>
              )}
              <InputBox>
                <Field name="name">
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        theme={theme}
                        label={intl.formatMessage({
                          id:
                            version !== 3
                              ? "APP_LABEL.NAME"
                              : "APP_LABEL.SHELTER_NAME"
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
            </FormBox>
            <ButtonBox>
              <Button
                type="button"
                variant="contained"
                color="inherit"
                status="clear"
                theme={theme}
                onClick={() => handleClearFilter(form)}
              >
                <FormattedMessage id="APP_BUTTONS.CLEAR_FILTER" />
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="inherit"
                theme={theme}
                disabled={
                  !values.name && !genre && !city && !age && !voivodeship
                }
              >
                <FormattedMessage id="APP_BUTTONS.SEARCH" />
              </Button>
            </ButtonBox>
          </form>
        )}
      />
      <ChipsBox>{renderFilterChips()}</ChipsBox>
    </Paper>
  );
};

Search.defaultProps = {
  onSubmit: () => {},
  version: 1,
  variables: {}
};

Search.propTypes = {
  onSubmit: PropTypes.func,
  clearFilter: PropTypes.func,
  version: PropTypes.number,
  handleDelete: PropTypes.func,
  variables: PropTypes.object,
  intl: PropTypes.object
};

export default withRouter(injectIntl(Search));
