import { FormProvider, useForm } from "react-hook-form";

export const withUseFormHook = (Component) => {
  return (props) => {
    const methods = useForm({
      defaultValues: {
        firstname: "",
        lastname: "",
        email: "",
        languages: [],
        subscribed: false,
      },
    });

    const onSubmit = (e) => {
      console.log(e);
    };

    return (
      <FormProvider {...methods} onSubmit={methods.handleSubmit(onSubmit)}>
        <Component
          {...props}
          {...methods}
          onSubmit={methods.handleSubmit(onSubmit)}
        />
      </FormProvider>
    );
  };
};
