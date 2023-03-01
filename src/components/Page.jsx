import React from "react";
import { useForm } from "react-hook-form";
import iconBrand from "../images/logo.svg";
import arrow from "../images/icon-arrow.svg";

const Page = ({setEmail}) => {
  const {register, formState: { errors }, handleSubmit, } = useForm();

    const onSubmit = (email) =>{
      setEmail(email)
    }

  return (
    <>
      <div className="container-fluid section-container-main">
        <div className="row section-reverse">
          <div className="col-12 col-lg-6 section-left">
            <div className="box-left">
              <img className="img-logo" src={iconBrand} />
              <h2 >WE'RE</h2>
              <h1>COMING</h1>
              <h1>SOON</h1>
              <p>
                Hello fellow shoppers! We're currently building our new fashion
                store. Add your email below to stay up-to-date with
                announcements and our launch deals.
              </p>

              <form onSubmit={handleSubmit(onSubmit)}>

                <input
                  className={errors.email?.type == "required" || errors.email?.type == "pattern" ? "input-error" : "nothing-here"}
                  type="text"
                  placeholder="Email Address"
                  {...register("email", {
                    required: true,
                    pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i,
                  })}
                />

                <button type="submit">
                  <img src={arrow} />
                </button>
              
                {errors.email?.type === "required" && <p > Please Provide a valid email.  </p> }
                {errors.email?.type === "pattern" && <p> invalid format please, try again  </p> }
               

               
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-6 section-right"></div>
        </div>
      </div>
    </>
  );
};

export default Page;
