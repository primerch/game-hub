import { isRouteErrorResponse, useRouteError } from 'react-router';

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <h1 className="text-error text-3xl">Oops</h1>

      <p>
        {isRouteErrorResponse(error)
          ? 'This page does not exists.'
          : 'Sorry, an unexpected error has occurred.'}
      </p>
    </>
  );
}

export default ErrorPage;
