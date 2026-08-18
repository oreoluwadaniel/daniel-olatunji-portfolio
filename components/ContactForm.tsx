"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [opened, setOpened] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
    window.location.href = `mailto:danolatunji25@gmail.com?subject=${subject}&body=${body}`;
    setOpened(true);
  }
  return <form className="form" onSubmit={submit}>
    <div><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" required /></div>
    <div><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
    <div><label htmlFor="message">Message</label><textarea id="message" name="message" required /></div>
    <button className="btn btn-primary" type="submit">Open Email</button>
    {opened && <p className="small">Your email app should now open with the message prepared. If it does not, email danolatunji25@gmail.com directly.</p>}
  </form>;
}
