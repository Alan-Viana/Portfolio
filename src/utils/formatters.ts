export const formatPhone = (value: string): string => {
  let cleaned = value.replace(/\D/g, "");
  if (cleaned.length > 11) cleaned = cleaned.slice(0, 11);

  if (cleaned.length > 10) {
    return cleaned.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1)$2-$3");
  } else if (cleaned.length > 6) {
    return cleaned.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1)$2-$3");
  } else if (cleaned.length > 2) {
    return cleaned.replace(/^(\d{2})(\d{0,5}).*/, "($1)$2");
  } else if (cleaned.length > 0) {
    return cleaned.replace(/^(\d*)/, "($1");
  }
  return cleaned;
};

export const isValidEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
