"use client"
import { useEffect, useRef } from 'react';

const WithLogger = (WrappedComponent) => {
  const ComponentWithLogger = (props) => {
    const isFirstRender = useRef(true);

    useEffect(() => {
      console.log(`[withLogger] ${WrappedComponent.name} mounted`);

      return () => {
        console.log(`[withLogger] ${WrappedComponent.name} unmounted`);
      };
    }, []);

    useEffect(() => {
      if (!isFirstRender.current) {
        console.log(`[withLogger] ${WrappedComponent.name} updated`);
      } else {
        isFirstRender.current = false;
      }
    });

    return <WrappedComponent {...props} />;
  };

  return ComponentWithLogger;
};

export default WithLogger;
