import RegisterView from 'views/RegisterView';
import { getCsrfToken } from 'next-auth/react';
import { GetServerSideProps } from 'next';

const RegisterPage = ({ csrfToken }): JSX.Element => {
	return <RegisterView csrfToken={csrfToken} />;
};

export default RegisterPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
	return {
		props: {
			csrfToken: await getCsrfToken(context),
		},
	};
};
