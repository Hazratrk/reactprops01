import React from "react";
import Input from "./Input";
import Button from "./Button";

function SubscriptionForm() {
  return (
    <form style={{ textAlign: "center", marginTop: "20px" }}>
      <Input type="text" placeholder="first name" />
      <Input type="text" placeholder="last name" />
      <Input type="email" placeholder="email" />
      <Button type="button" text="SUBSCRIBE NOW" />
    </form>
  );
}

export default SubscriptionForm;
