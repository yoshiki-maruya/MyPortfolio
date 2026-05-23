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
  email: yup.string().required("必須項目です").email("正しいメールアドレス入力してください"),
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
      className="mx-auto flex w-full max-w-2xl flex-col gap-7 rounded-2xl border border-gray-100 bg-white p-10 shadow-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <section className="flex flex-col">
        <label className="mb-2 text-base font-semibold tracking-wide text-gray-800">Name</label>
        <input
          className="rounded-xl border-2 border-gray-200 bg-gray-50 px-5 py-3.5 text-gray-800 transition-all duration-200 placeholder:text-gray-400 focus:border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          placeholder="山田 太郎"
          {...register("name")}
        />
        {errors.name && (
          <span className="mt-2 text-sm font-medium text-red-500">{errors.name.message}</span>
        )}
      </section>

      <section className="flex flex-col">
        <label className="mb-2 text-base font-semibold tracking-wide text-gray-800">Email</label>
        <input
          type="email"
          className="rounded-xl border-2 border-gray-200 bg-gray-50 px-5 py-3.5 text-gray-800 transition-all duration-200 placeholder:text-gray-400 focus:border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          placeholder="example@email.com"
          {...register("email")}
        />
        {errors.email && (
          <span className="mt-2 text-sm font-medium text-red-500">{errors.email.message}</span>
        )}
      </section>

      <section className="flex flex-col">
        <label className="mb-2 text-base font-semibold tracking-wide text-gray-800">Message</label>
        <textarea
          className="resize-none rounded-xl border-2 border-gray-200 bg-gray-50 px-5 py-3.5 leading-relaxed text-gray-800 transition-all duration-200 placeholder:text-gray-400 focus:border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          rows={6}
          placeholder="お問い合わせ内容をご記入ください"
          {...register("message")}
        />
        {errors.message && (
          <span className="mt-2 text-sm font-medium text-red-500">{errors.message.message}</span>
        )}
      </section>

      <button
        type="submit"
        className="mt-4 transform rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:from-sky-600 hover:to-blue-700 hover:shadow-xl active:translate-y-0"
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
