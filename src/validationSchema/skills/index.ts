import * as yup from 'yup';

export const skillValidationSchema = yup.object().shape({
  name: yup.string().required(),
  category_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
