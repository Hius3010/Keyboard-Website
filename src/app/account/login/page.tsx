"use client";
import { ErrorMessage } from "@hookform/error-message";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState } from "react";

const schema = yup
  .object({
    username: yup
      .string()
      .required("User Name is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Atleast 6 characters"),
  })
  .required();

interface LoginRequest {
  username: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const onRegisterPress = () => {
    router.push("/account/register");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: LoginRequest) => {
    console.log("data", data);
    const params = {
      username: data.username,
      password: data.password
    }
    axios
      .post(
        "https://5927-123-29-67-2.ngrok-free.app/api/v1/user/login",
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
              <h1 className="text-center font-bold text-xl">Login</h1>
              <h2 className="font-bold text-sm">User Name</h2>
              <input
                type="text"
                className="px-4 mx-2 py-1 outline-gray-400"
                placeholder="User Name"
                {...register("username")}
              />
              <p className="text-red-500">{errors.username?.message}</p>

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
                LOGIN
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
                onClick={onRegisterPress}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
