import React, { useState } from "react";
import CustomTitle from "../custom/CustomTitle";
import { useTranslation } from "react-i18next";
import ButtonSend from "./../buttons/ButtonSend";
import { Mail } from "lucide-react";
import * as Yup from "yup";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import FormContact from "./FormContact";

const ContactMe = () => {
  const [loading, setLoading] = useState(false);

  const ValidSchema = Yup.object().shape({
    firstname: Yup.string().required("Votre prénom est obligatoire"),
    lastname: Yup.string().required("Votre nom est obligatoire"),
    mail: Yup.string()
      .email("Adresse email invalide")
      .required("Adresse email obligatoire"),
    message: Yup.string()
      .min(10, "Votre message est trop court")
      .max(500, "Votre message est trop long")
      .required("Le message est obligatoire"),
  });

  // Email parameters to contact us
  const yourServiceId = "service_plkipfn";
  const yourTemplateId = "template_ngcvdt8";
  const yourPublicId = "hIBcrSEQcNVxZU0im";

  const sendMail = (values, { resetForm }) => {
    setLoading(true);
    emailjs
      .send(yourServiceId, yourTemplateId, values, yourPublicId)
      .then((result) => {
        console.log("result", result);
        // notifyMailSend(); envoi ok notification
        setLoading(false);
        resetForm();
      })
      .catch(() => {
        // ErrorNotify(toastId); envoi error notification
        setLoading(false);
        console.log("error");
        resetForm();
      });
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      mail: "",
      message: "",
    },
    enableReinitialize: true,
    validationSchema: ValidSchema,
    onSubmit: (values, { resetForm }) => {
      setLoading(true);
      sendMail(values, { resetForm });
    },
  });

  return (
    <div
      id="contact"
      className="xs:w-[80%] sm:w-[65vw] flex flex-col justify-start gap-5 mt-10"
    >
      <CustomTitle className={"text-3xl mt-5 mb-10"}>Contact</CustomTitle>

      <form onSubmit={formik.handleSubmit}>
        <FormContact formik={formik} />

        <div className="flex xs:flex-wrap-reverse xs:gap-5 justify-between max-sm:justify-center items-center">
          <ButtonSend loading={loading} />
          <div className="flex items-center gap-2">
            <Mail className="dark:text-gray-200" />
            <p className="dark:text-gray-200">thomas.bartier59@gmail.com</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
