/**
 * Loading component.
 * Renders a loading spinner.
 *
 * @returns {JSX.Element} The loading component.
 */
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <span className="loading loading-ring loading-lg"></span>
    </div>
  );
};

export default Loading;
