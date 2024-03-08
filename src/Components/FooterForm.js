import React from "react";
import "../Components/FooterformStyles.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstName: yup.string().required("Enter FirstName"),
  lastName: yup.string().required("Enter LastName"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Invalid mobile number")
    .required("Enter Phone.NO"),
  email: yup
    .string()
    .email("Please enter valid Email")
    .required("Enter Email Address"),
  gender: yup.string().required("Select Gender"),
  comment: yup.string().required("Type Comments"),
});

function FooterForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [data] = useState("");
  // const [data, setData] = useState("");

  console.log(errors);
  return (
    <div>
      <div className="form-control">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            reset();
          })}
        >
          <div className="form-names">
            <div className="f-name">
              <input
                {...register("firstName")}
                className="form-input"
                placeholder="Name"
              />
              <p className="error-msg">{errors.firstName?.message}</p>
            </div>
            {/* <div className="l-name">
      <input {...register("lastName")} className=''  placeholder="Last Name" />
      <p className='error-msg'>{errors.lastName?.message}</p>
      </div> */}
          </div>
          <input type={"Email"} {...register("email")} placeholder="Email" />
          <p className="error-msg">{errors.email?.message}</p>
          <input type={""} {...register("phone")} placeholder="Phone Number" />
          <p className="error-msg">{errors.phone?.message}</p>
          {/* <select {...register("gender", { required: true })}>
        <option value="">Select Gender...</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select> */}
          {/* <p className='error-msg'>{errors.gender?.message}</p> */}
          <textarea {...register("comment")} placeholder="Comment" />
          <p className="error-msg">{errors.comment?.message}</p>
          <p>{data}</p>
          <input className="sub-btn" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default FooterForm;

// const FooterForm = () => {

//     const { register, handleSubmit, formSates: {error} } = useForm();

//   return (
//     <div>
//         <div className="form-control">
//                     <div className="inputs">
//                         <form onSubmit={handleSubmit((data)=>{
//                             console.log(data)
//                         })}>
//                         <input placeholder='First Name...'/>
//                         <input placeholder='Last Name...'/>
//                         <input placeholder='Email...'/>
//                         <input placeholder='Phone Number...'/>
//                         <input placeholder='Comment...'/>
//                         <input type="submit" id="submit"/>
//                         </form>
//                     </div>
//                     </div>
//     </div>
//   )
// }

// export default FooterForm;
