const useRules = () => {
  const req = () => {
    return (v) => !!v || "Required";
  };
  const emailOnly = () => {
    return (v) => /.+@.+\..+/.test(v) || "Email not valid";
  };
  const nameLength = () => {
    return (v) => v && v.length >= 3 || "Name is too short";
  };
  return {
    emailOnly,
    required() {
      return [req()];
    },
    email() {
      return [req(), emailOnly()];
    },
    number() {
      return [
        req(),
        (v) => /^\d+$/.test(v) || "Should contain numbers only",
        (v) => v && v.length >= 9 || "Number is too short"
      ];
    },
    name() {
      return [req(), nameLength()];
    },
    fullName() {
      return [
        req(),
        nameLength(),
        (v) => /\s/g.test(v) || "Two names are required"
      ];
    },
    passwordRule() {
      return [req(), (v) => v && v.length >= 8 || "Password is too short"];
    },
    confirmPassword(pwd) {
      return [(v) => v && v == pwd || "Passwords do not match"];
    }
  };
};
export {
  useRules as u
};
//# sourceMappingURL=useRules-Lv1tnQPg.js.map
