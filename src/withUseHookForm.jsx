import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";



export const withUseFormHook = (Component) => {
  return (props) => {

    const [data, setData] = useState({})

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
      console.log('data submit', e);
      setData(e)
    };

    return (
      <>
        <FormProvider {...methods} onSubmit={methods.handleSubmit(onSubmit)}>
          <Component
            {...props}
            {...methods}
            onSubmit={methods.handleSubmit(onSubmit)}
          />
        </FormProvider>
        <div>
          <b>Result</b>
          <div className="firstname">
            <span>Firstname:</span> <span className="data-firstname">{data?.firstname}</span> </div>

          <div className="lastname">
            <span>Lastname:</span> <span className="data-lastname">{data?.lastname}</span> </div>
          <div className="email">
            <span>E-mail:</span> <span className="data-email">{data?.email}</span> </div>
          <div className="languages">
            <span>Languages:</span> <span className="data-languages">{data?.languages?.toString()}</span> </div>
          <div className="subscribed">
            <span>subscribed:</span> <span className="data-subscribed">{data?.subscribed?.toString()}</span> </div>


        </div>

      </>

    );
  };
};
