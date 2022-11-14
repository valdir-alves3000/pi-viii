import Swal from "sweetalert2";
import { SweetalertProps } from "../data/@types";

export const sweetalert = ({ icon, text, title }: SweetalertProps) => {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    background: "#1C212C",
    color: "#f5f5f0",
    confirmButtonColor: "#4B80C8",
  });
};
