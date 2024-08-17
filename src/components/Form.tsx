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

// バリーデーションルール
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
      headers: {
        "Content-Type": "application/json",
      },
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
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <section className="flex flex-col">
        <label className="">name</label>
        <input className="rounded-md border border-gray-500 px-2 py-1" {...register("name")} />
        {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
      </section>
      <section className="flex flex-col">
        <label className="">email</label>
        <input className="rounded-md border border-gray-500 px-2 py-1" {...register("email")} />
        {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
      </section>
      <section className="flex flex-col">
        <label className="">message</label>
        <textarea
          className="resize-none rounded-md border border-gray-500 px-2 py-1"
          rows={4}
          {...register("message")}
        />
        {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
      </section>
      <button
        type="submit"
        className="mt-5 rounded-sm bg-sky-200 px-2 py-2 font-bold hover:bg-sky-300"
      >
        send
      </button>
    </form>
  );
};

export default Form;
