import React, { FC, FormEvent, useState } from "react";
import cx from "classnames";
import Input from "@/components/atoms/Input";
import TextArea from "@/components/atoms/TextArea";
import SlidingButton from "@/components/atoms/SlidingButton";

interface ContactFormProps {
  className?: string;
}

const ContactForm: FC<ContactFormProps> = ({ className }) => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState<{ message?: string; success?: boolean }>({});

  const onFormUpdate = (category: string, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonText("Sending...");
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(formDetails)
    });
    setButtonText("Send");
    const result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "Message sent successfully" });
    } else {
      setStatus({ success: false, message: "Something went wrong, please try again later." });
    }
  };

  return (
    <form className={cx("flex flex-col px-1 gap-2", className)} onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Input
            type="text"
            value={formDetails.firstName}
            placeholder="First Name"
            onChange={(e) => onFormUpdate("firstName", e.target.value)}
          />
          <Input
            type="text"
            value={formDetails.lastName}
            placeholder="Last Name"
            onChange={(e) => onFormUpdate("lastName", e.target.value)}
          />
        </div>
        <div className="gap-2 flex">
          <Input
            type="email"
            value={formDetails.email}
            placeholder="Email Address"
            onChange={(e) => onFormUpdate("email", e.target.value)}
          />
          <Input
            type="tel"
            value={formDetails.phone}
            placeholder="Phone No."
            onChange={(e) => onFormUpdate("phone", e.target.value)}
          />
        </div>
        <div>
          <TextArea
            rows={6}
            value={formDetails.message}
            placeholder="Message"
            onChange={(e) => onFormUpdate("message", e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-between">
        {status.message && (
          <p
            className={cx("text-right", {
              "text-danger-300": !status.success,
              "text-success-300": status.success
            })}
          >
            {status.message}
          </p>
        )}
        <SlidingButton type="submit" color="light" className="ml-auto">
          {buttonText}
        </SlidingButton>
      </div>
    </form>
  );
};

export default ContactForm;
