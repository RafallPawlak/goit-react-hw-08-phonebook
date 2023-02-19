import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import css from './Register.module.scss';

export default function Register() {
  return (
    <div className={css.container}>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
      <div className={css.blob}></div>
    </div>
  );
}