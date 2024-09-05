import PropTypes from "prop-types";

const SectionTitle = ({ text }) => {
  return (
    <div className="pb-5 border-b border-base-300">
      <h2 className="text-3xl font-medium capitalize">{text}</h2>
    </div>
  );
};

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionTitle;
