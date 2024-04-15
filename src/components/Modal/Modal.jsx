import './Modal.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { initialValue, validationSchema } from '../../constant/constant';
import { useModal } from '../../context/openModal';

export default function Modal() {
  const { setIsOpen} = useModal(); 

  const handleSubmit = (values) => {
    console.log(values);
  };

  const closeModal = () => {
    setIsOpen(false); 
  };
  
  return (
    <div className="wrapper_modal">
      <div className='Modal'>
        <div className="Modal__CloseIcon">
          <h2><i onClick={closeModal} className="bi bi-x-circle"></i></h2>
        </div>
        <div className="Modal__Content">
          <h1>Concat</h1>
          <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className='Modal__Content-Form'>
                  <label className='label' htmlFor="username">Name</label>
                  <Field type='text' name="username" placeholder="Write your name"/>
                  <ErrorMessage component='h5' name='username' />
              </div>
              <div className='Modal__Content-Form'>
                  <label htmlFor="email">Email</label>
                  <Field type='email' id="email" name="email" placeholder='Write your email'/>
                  <ErrorMessage component='h5' name='email' />
              </div>
              <div className='Modal__Content-Form'>
                  <label htmlFor="password">Password</label>
                  <Field type='password' id="password" name="password" placeholder='Write your password' />
                  <ErrorMessage component='h5' name='password' />
              </div>
              <div className="Modal__Content-btn">
              <button type='submit'>Submit</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
     </div>
  );
}
