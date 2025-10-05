import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoCall } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { useState } from "react";

const ContactForm = () => {
  // const onViaCallSubmit = () => {
  //   console.log("via call");
  // };
  const [name , setName] = useState("A");
  const [email, setEmail] = useState("B");
  const [text, setText] = useState("C");

  // let name = "rjetn";
  // let email = "adi@gmail.com";
  // let text = "dflnkadn";

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("Name: ", e.target[0].value);
    // console.log("Email: ", e.target[1].value);
    // console.log("Text: ", e.target[2].value);
    // name = e.target[0].value;
    // email = e.target[1].value;
    // text = e.target[2].value; 

    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
    
    console.log({
      name,
      email,
      text
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA CHAT SUPPORT"
            icon={<LuMessageCircleMore fontSize={"20px"} />}
          />
          <Button
            // onClick={onViaCallSubmit}
            text="VIA CALL"
            icon={<IoCall fontSize={"20px"} />}
          />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdOutlineMailOutline fontSize={"20px"} />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" style={{ resize: "none", overflow: "auto"}} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button isOutline={false} text="Submit" />
          </div>
          <div>
            {name + " " + email + " " + text }
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/service.png" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
