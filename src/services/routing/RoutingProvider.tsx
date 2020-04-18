import React, { useEffect, useState } from 'react';
import history from 'services/routing/history';
import { Location } from 'history';
import router from './router';

type RoutingProviderProps = {};

export const RoutingProvider = (props: RoutingProviderProps) => {
  const [location, setLocation] = useState(history.location);
  const [componentToRender, setComponentToRender] = useState('Loading...');

  const onLocationChange = (newLocation: Location<any>, action?: any) => {
    setLocation(newLocation);
  };

  // on componentDidMount
  useEffect(() => {
    return history.listen(onLocationChange);
  });

  // on componentDidUpdate
  useEffect(() => {
    router.resolve(location).then((component) => {
      setComponentToRender(component);
    });
  }, [location]);

  return <div className="routing-root">{componentToRender}</div>;
};
