
const WithDataFetching = (WrappedComponent) => {
  const EnhancedComponent = (props) => {
    return <WrappedComponent {...props} />;
  };

  return EnhancedComponent;
};

export default WithDataFetching;
