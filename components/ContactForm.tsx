"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/danolatunji25@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (!response.ok) throw new Error("Message could not be sent.");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return <form className="form" onSubmit={submit}>
    <input type="hidden" name="_subject" value="New portfolio enquiry" />
    <input type="hidden" name="_template" value="table" />
    <input type="hidden" name="_captcha" value="false" />
    <div><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" required /></div>
    <div><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
    <div><label htmlFor="message">Message</label><textarea id="message" name="message" required /></div>
    <button className="btn btn-primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send message"}</button>
    {status === "sent" && <p className="small" role="status">Message sent successfully.</p>}
    {status === "error" && <p className="small" role="alert">The message could not be sent. Please try again.</p>}
  </form>;
}
