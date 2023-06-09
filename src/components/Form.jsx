import React from "react";
import { Controller } from "react-hook-form";
import { withUseFormHook } from "../withUseHookForm";
import Checkbox from "./Checkbox";
import MultiSelect from "./MultiSelect";
import Options from "./Options";
import TextInput from "./TextInput";

// import Button from "./Button";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const languageList = ["English", "Spanish", "French", "German", "Japanese"];
    const { control, onSubmit, watch } = this.props;

    const languagesSelected = watch("languages");
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <Controller
          control={control}
          name="firstname"
          render={({ field, fieldState: { error } }) => (
            <>
              <TextInput
                labelFor="firstname"
                label="Firstname"
                id="firstname"
                {...field}
                className="form-control"
                type="text"
                data-testid="control-firstname"
              />
              {error && <p className="text-danger" data-testid="firstname-error">{error.message}</p>}
            </>
          )}
          rules={{
            required: {
              value: true,
              message: "Firstname is required",
            },
          }}
        />
        <Controller
          control={control}
          name="lastname"
          render={({ field, fieldState: { error } }) => (
            <>
              <TextInput
                labelFor="lastname"
                label="Lastname"
                {...field}
                className="form-control"
                type="text"
                id="lastname"
                data-testid="control-lastname"
              />
              {error && <p className="text-danger" data-testid="lastname-error">{error.message}</p>}
            </>
          )}
          rules={{
            required: {
              value: true,
              message: "Lastname is required",
            },
          }}
        />
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState: { error } }) => (
            <>
              <TextInput
                labelFor="email"
                label="E-mail"
                className="form-control"
                type="email"
                id="email"
                {...field}
                data-testid="control-email"
              />
              {error && <p className="text-danger" data-testid="email-error">{error.message}</p>}
            </>
          )}
          rules={{
            required: {
              value: true,
              message: "E-mail is required",
            },
            pattern: {
              value: emailRegex,
              message: 'E-mail format invalid'
            }
          }}
        />
        <Controller
          name="languages"
          control={control}
          render={({ field }) => (
            <MultiSelect
              labelFor="languages"
              label="Languages"
              className="form-control mb-3"
              {...field}
              onChange={(e) => {
                const value = e.target.value;
                if (languagesSelected.some((x) => x === value)) {
                  field.onChange(languagesSelected.filter((x) => x !== value));
                } else {
                  field.onChange([...languagesSelected, value]);
                }
              }}
            >
              <Options options={languageList} />
            </MultiSelect>
          )}
        />
        <Controller
          control={control}
          name="subscribed"
          render={({ field }) => (
            <Checkbox
              labelFor="subscribed"
              label="Subscribe"
              checked={field.value}
              className="form-check mb-3 text-right"
              {...field}
            />
          )}
        />

        <button
          type="submit"
          data-testid="btn-submit"
          onClick={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className="btn btn-primary form-control"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default withUseFormHook(Form);
