"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Icon from "./atoms/Icon";
import useSnackbar from "@/hooks/useSnackbar";

export type ContactForm = {
  name: string;
  email: string;
  message: string;
};

const schema = yup.object({
  name: yup.string().required("必須項目です"),
  email: yup
    .string()
    .required("必須項目です")
    .email("正しいメールアドレス入力してください"),
  message: yup.string().required("必須項目です"),
});

const Form: React.FC = () => {
  const router = useRouter();
  const addSnackbar = useSnackbar();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    const response = await fetch("api/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      router.push("/");
      addSnackbar({
        key: "success",
        text: "送信成功！",
        variant: "success",
        icon: <Icon name="XCircle" />,
      });
    } else {
      addSnackbar({
        key: "error",
        text: "送信失敗。再試行してください。",
        variant: "error",
        icon: <Icon name="XCircle" />,
      });
    }
  };

  return (
    <form
      className="flex flex-col mx-auto gap-7 bg-white p-10 rounded-2xl shadow-lg max-w-2xl w-full border border-gray-100"
      onSubmit={handleSubmit(onSubmit)}
    >
      <section className="flex flex-col">
        <label className="text-base font-semibold text-gray-800 mb-2 tracking-wide">
          Name
        </label>
        <input
          className="rounded-xl border-2 border-gray-200 px-5 py-3.5 text-gray-800 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 placeholder:text-gray-400"
          placeholder="山田 太郎"
          {...register("name")}
        />
        {errors.name && (
          <span className="text-sm text-red-500 mt-2 font-medium">
            {errors.name.message}
          </span>
        )}
      </section>

      <section className="flex flex-col">
        <label className="text-base font-semibold text-gray-800 mb-2 tracking-wide">
          Email
        </label>
        <input
          type="email"
          className="rounded-xl border-2 border-gray-200 px-5 py-3.5 text-gray-800 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 placeholder:text-gray-400"
          placeholder="example@email.com"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-sm text-red-500 mt-2 font-medium">
            {errors.email.message}
          </span>
        )}
      </section>

      <section className="flex flex-col">
        <label className="text-base font-semibold text-gray-800 mb-2 tracking-wide">
          Message
        </label>
        <textarea
          className="resize-none rounded-xl border-2 border-gray-200 px-5 py-3.5 text-gray-800 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 placeholder:text-gray-400 leading-relaxed"
          rows={6}
          placeholder="お問い合わせ内容をご記入ください"
          {...register("message")}
        />
        {errors.message && (
          <span className="text-sm text-red-500 mt-2 font-medium">
            {errors.message.message}
          </span>
        )}
      </section>

      <button
        type="submit"
        className="mt-4 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 text-white font-semibold text-lg px-8 py-4 shadow-md hover:shadow-xl hover:from-sky-600 hover:to-blue-700 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
