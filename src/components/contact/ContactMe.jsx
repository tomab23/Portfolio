import React, { useState } from "react";
import CustomTitle from "../custom/CustomTitle";
import { useTranslation } from "react-i18next";
import ButtonSend from "./../buttons/ButtonSend";
import { Mail } from "lucide-react";
import * as Yup from "yup";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import FormContact from "./FormContact";
import { Toaster, toast } from 'sonner'
import { X } from 'lucide-react';

const ContactMe = () => {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);


  const toastSuccess = () => {
    toast.success(t("contactme.success"), {
      cancel: {
        label: <X />
      },
    })
  }

  const toastCancel = () => {
    toast.cancel(t("contactme.error"), {
      cancel: {
        label: <X />
      },
    })
  }

  const ValidSchema = Yup.object().shape({
    firstname: Yup.string().required(t("contactError.firstname")),
    lastname: Yup.string().required(t("contactError.lastname")),
    mail: Yup.string()
      .email(t("contactError.valid"))
      .required(t("contactError.mail")),
    message: Yup.string()
      .min(10, t("contactError.short"))
      .max(800, t("contactError.long"))
      .required(t("contactError.message")),
  });

  // Email parameters to contact us
  const yourServiceId = "service_ywrarm8";
  const yourTemplateId = "template_ngcvdt8";
  const yourPublicId = "hIBcrSEQcNVxZU0im";

  const sendMail = (values, { resetForm }) => {
    setLoading(true);
    emailjs
      .send(yourServiceId, yourTemplateId, values, yourPublicId)
      .then(() => {
        toastSuccess();
        setLoading(false);
        resetForm();
      })
      .catch(() => {
        toastCancel();
        setLoading(false);
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
        <Toaster position="bottom-left" richColors duration={3000} className="max-sm:mb-20" />
      </form>
    </div>
  );
};

export default ContactMe;
