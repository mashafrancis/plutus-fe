/* eslint-disable react/no-unescaped-entities */
import { signIn, getCsrfToken } from 'next-auth/react';
import { Box, Grid, TextField, InputAdornment } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFormState from '@hooks/useFormState';
import validate from 'validate.js';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { useRouter } from 'next/router';
import { AppDispatch, OurStore } from '../../../../lib/store';
import { displaySnackMessage } from '../../../../lib/slices/snack';

interface Props {
	csrfToken: any;
	handleAuthModal: () => void;
}

const schema = {
	username: {
		presence: { allowEmpty: false, message: 'is required' },
	},
	password: {
		presence: { allowEmpty: false, message: 'is required' },
	},
};

const Form = ({ csrfToken, handleAuthModal }: Props): JSX.Element => {
	const { push, prefetch } = useRouter();
	const dispatch: AppDispatch = useDispatch();
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [isPasswordHidden, showPassword] = useState<boolean>(false);
	const togglePassword = () => showPassword((prevState) => !prevState);

	const { values, isValid, errors, hasError, handleFormChange, handleSubmit } =
		useFormState({
			onSubmit: async ({ username, password }) => {
				setIsLoading(true);
				const res = await signIn('credentials', {
					username,
					password,
					redirect: false,
					// callbackUrl: `${window.location.origin}`,
				});
				if (res?.error) {
					setError(res.error);
					dispatch(displaySnackMessage({ message: error, severity: 'error' }));
				} else {
					setError(null);
				}
				setIsLoading(false);
				handleAuthModal();
				await push('dashboard/open-problems');
			},
			formErrors: (formValues) => validate(formValues, schema),
		});

	useEffect(() => {
		prefetch('dashboard/open-problems');
	}, []);

	return (
		<Box>
			<form name="email-login" onSubmit={handleSubmit}>
				<Grid container spacing={2}>
					<input name="csrfToken" type="hidden" defaultValue={csrfToken} />

					<Grid item xs={12}>
						<TextField
							label="Username *"
							variant="outlined"
							size="medium"
							name="username"
							fullWidth
							helperText={hasError('username') ? errors.username[0] : null}
							error={hasError('username')}
							onChange={handleFormChange}
							type="text"
							value={values.username || ''}
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							label="Password *"
							variant="outlined"
							size="medium"
							name="password"
							fullWidth
							helperText={hasError('password') ? errors.password[0] : null}
							error={hasError('password')}
							onChange={handleFormChange}
							type={isPasswordHidden ? 'text' : 'password'}
							value={values.password || ''}
							InputProps={{
								endAdornment: (
									<InputAdornment
										style={{ cursor: 'pointer' }}
										onClick={togglePassword}
										position="end"
									>
										{isPasswordHidden ? <Visibility /> : <VisibilityOff />}
									</InputAdornment>
								),
							}}
						/>
					</Grid>

					<Grid item container xs={12}>
						<Box
							display="flex"
							flexDirection={{ xs: 'column', sm: 'row' }}
							alignItems={{ xs: 'stretched', sm: 'center' }}
							justifyContent={'space-between'}
							width={1}
							maxWidth={600}
							margin={'0 auto'}
						>
							<LoadingButton
								autoFocus
								fullWidth
								variant="contained"
								type="submit"
								color="primary"
								size="large"
								disabled={!isValid}
								loading={isLoading}
								loadingIndicator="Please wait..."
							>
								Login
							</LoadingButton>
						</Box>
					</Grid>
				</Grid>
			</form>
		</Box>
	);
};

export default Form;
