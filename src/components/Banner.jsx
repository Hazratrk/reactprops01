import React from "react";
import Button from "./Button";

function Banner() {
  return (
    <section>
      <h2>We Keep Great Company</h2>
      <p></p>
      <img
        src="https://media.istockphoto.com/id/498301640/vector/big-sale-banner.jpg?s=612x612&w=0&k=20&c=fppPOZ3LZCyvtDUiy6tR52xDWofX52Fdu3a7Ltc_fVY="
        alt="Banner"
        style={{ width: "100%", maxWidth: "600px" }}
      />
      <br />
      <Button type="button" text="READ MORE" />
    </section>
  );
}

export default Banner;
