"use client";

import { ErrorMessage } from "@hookform/error-message";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Password from "antd/es/input/Password";

const schema = yup
  .object({
    name: yup.string().required("First Name is required"),
    username: yup.string().required("Last Name is required"),
    phonenumber: yup.string().required("Phone Number is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter valid email"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Atleast 6 characters"),
  })
  .required();

interface SignupRequest {
  name: string;
  username: string;
  phonenumber: string;
  email: string;
  password: string;
}

const Register = () => {
  const router = useRouter();
  const onLoginPress = () => {
    router.push("/account/login");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: SignupRequest) => {
    console.log("Submitted", data);
    const params = {
      name: data.name,
      username: data.username,
      email: data.email,
      password: data.password,
      phone: data.phonenumber,
    };
    axios
      .post(
        "https://5927-123-29-67-2.ngrok-free.app/api/v1/user/sign-up",
        params
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main>
      <div className="w-full h-full">
        <div className="h-full w-full justify-center grid grid-cols-3 px-80 py-10">
          <div className="w-full h-full bg-gray-300 py-10 col-span-2 border-solid border-2 border-black">
            <form
              className="flex flex-col px-10 gap-y-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1 className="text-center font-bold text-xl">Register</h1>

              <h2 className="font-bold text-sm">Name</h2>
              <input
                type="text"
                className="px-4 mx-2 py-1 outline-gray-400"
                placeholder="Name"
                {...register("name")}
              />
              <p className="text-red-500">{errors.name?.message}</p>

              <h2 className="font-bold text-sm">User Name</h2>
              <input
                type="text"
                className="px-4 mx-2 py-1 outline-gray-400"
                placeholder="User Name"
                {...register("username")}
              />
              <p className="text-red-500">{errors.username?.message}</p>

              <h2 className="font-bold text-sm">Phone Number</h2>
              <input
                type="text"
                className="px-4 mx-2 py-1 outline-gray-400"
                placeholder="Phone Number"
                {...register("phonenumber")}
              />
              <p className="text-red-500">{errors.phonenumber?.message}</p>

              <h2 className="font-bold text-sm">Email</h2>
              <input
                type="text"
                className="px-4 mx-2 py-1 outline-gray-400"
                placeholder="Email"
                {...register("email")}
              />

              <p className="text-red-500">{errors.email?.message}</p>

              <h2 className="font-bold text-sm">Password</h2>
              <input
                type="password"
                className="px-4 mx-2 py-1 outline-gray-400"
                placeholder="Password"
                {...register("password")}
              />
              <p className="text-red-500">{errors.password?.message}</p>

              <button
                type="submit"
                className="bg-gray-900 text-white font-bold text-xl py-1 hover:bg-yellow-500 duration-200"
              >
                REGISTER
              </button>
            </form>
          </div>
          <div className="w-full h-full bg-gray-700 py-10 text-white">
            <div className="h-full w-full px-6">
              <p className="font-bold pb-10">Membership</p>
              <ul className="flex flex-col gap-y-4 text-xs font-normal ">
                <li>Vận chuyển siêu tốc</li>
                <li>Sản phẩm đa dạng</li>
                <li>Đổi trả dễ dàng</li>
                <li>Tích điểm đổi quà</li>
                <li>Ưu đãi ngập tràn</li>
              </ul>
              <button
                className="w-full mt-10 py-1 border-solid border-white border-2 hover:bg-yellow-500 duration-200"
                onClick={onLoginPress}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
