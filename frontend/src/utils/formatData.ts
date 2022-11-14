export const formatData = {
  clearFormat(data = "") {
    return data.replace(/\D/g, "");
  },

  formatCPF(cpf: string) {
    const formatCPF = cpf.replace(/\D/g, "");

    return formatCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  },

  formatPhone(phone: string) {
    const formatPhone = phone.replace(/\D/g, "");

    return formatPhone.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4");
  },
};
