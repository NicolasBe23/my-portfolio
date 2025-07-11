"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Send } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

export default function Message() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error(t("message.error"));

      toast.success(t("message.success"));
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      toast.error(t("message.error"));
    } finally {
      setIsLoading(false);
    }
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
          required
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
          required
        />
      </div>

      <div className="flex flex-col gap-4 w-full">
        <Label>{t("message.message")}</Label>
        <Textarea
          name="message"
          className="resize-none"
          placeholder={t("message.placeholder.message")}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <Button
        variant="outline"
        size="lg"
        className="text-lg font-medium flex items-center gap-2 w-fit transition cursor-pointer"
        type="submit"
        disabled={!name || !email || !message || isLoading}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-border border-t-transparent rounded-full animate-spin"></span>
            {t("message.sending")}
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
