"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Message() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setIsLoading(true);
    await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );
    setIsLoading(false);
    window.location.reload();
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-10 justify-center items-center"
    >
      <h1 className="text-2xl font-bold">{t("message.title")}</h1>
      <p className="text-zinc-300">{t("message.description")}</p>
      <div className="flex flex-col gap-4 w-full">
        <Label>{t("message.name")}</Label>
        <Input
          name="name"
          type="text"
          placeholder={t("message.placeholder.name")}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <Label>{t("message.email")}</Label>
        <Input
          name="email"
          type="email"
          placeholder={t("message.placeholder.email")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <Label>{t("message.message")}</Label>
        <Textarea
          name="message"
          className="resize-none"
          placeholder={t("message.placeholder.message")}
        />
      </div>
      <Button
        variant="outline"
        size="lg"
        className="text-black text-lg font-medium flex items-center gap-2 w-fit transition hover:text-gray-600 cursor-pointer"
        type="submit"
        disabled={isLoading || !name || !email}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-zinc-800 border-t-transparent rounded-full animate-spin"></span>
            {t("message.send")}
          </span>
        ) : (
          <>
            {t("message.send")}
            <Send className="w-4 h-4" />
          </>
        )}
      </Button>
    </form>
  );
}
