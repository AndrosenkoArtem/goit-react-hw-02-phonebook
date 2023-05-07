import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
const contactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Некорректное имя'
    )
    .required('обязательное поле'),
  number: Yup.string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Некорректный формат номера телефона'
    )
    .required('обязательное поле'),
});
export const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, actions) =>
        onSubmit({ ...values, id: nanoid() }, actions.resetForm())
      }
      validationSchema={contactSchema}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name"></Field>
          <ErrorMessage name="name" />
        </label>
        <label>
          Number
          <Field type="tel" name="number"></Field>
          <ErrorMessage name="number" />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
