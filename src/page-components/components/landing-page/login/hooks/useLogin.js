import { useNavigate } from "react-router-dom";

const useLogin = ({ formData }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "formadata");
    navigate("/welcome");
  };

  return { handleSubmit };
};

export default useLogin;
