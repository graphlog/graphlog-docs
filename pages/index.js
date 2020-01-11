export default () => {
  if (typeof window !== "undefined") {
    window.location = "/docs";
  }
  return <span>Redirecting to docs...</span>;
};
