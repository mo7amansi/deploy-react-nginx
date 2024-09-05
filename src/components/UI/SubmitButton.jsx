import { useNavigation } from "react-router-dom";

const SubmitButton = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <button
      type="submit"
      className="btn-block btn btn-secondary capitalize"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner loading-sm"></span>
          sending...
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
};

export default SubmitButton;
