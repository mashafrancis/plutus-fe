import ServerError from '@views/ServerError';

const ErrorPage = ({ statusCode }): JSX.Element => {
	return <ServerError statusCode={statusCode} />;
};

ErrorPage.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default ErrorPage;
