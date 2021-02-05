import React from 'react';
import { useHistory } from 'react-router-dom';
import { routerPath } from '@/router/common';

const PageNotFound = (): React.ReactElement => {
  const history = useHistory();

  return (
    <div className="page-not-found-container container text-center">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h4>404 | Page Not Found</h4>
          <a
            className="btn btn-primary mt-5"
            href={routerPath.HOME}
            onClick={(event): void => {
              event.preventDefault();
              history.push(routerPath.HOME);
            }}
            role="button"
            tabIndex={1}>
            Go Back
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
