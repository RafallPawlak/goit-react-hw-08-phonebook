import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import css from './Login.module.scss';

export default function Login() {
  return (
    <div className={css.container}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
      <div className={css.blob}></div>
    </div>
  );
}