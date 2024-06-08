import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {Form} from './Form';
import {FormData} from '../../types';
import {FormActions} from './FormActions';

const defaultValues = {
  id: '',
  product: '',
  description: '',
  image: '',
  release: '',
  review: '',
};

export const CreateProductForm = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<FormData>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormData> = data => console.log(data);
  const handleSubmitForm = handleSubmit(onSubmit);
  const handleReset = () => reset(defaultValues);
  return (
    <React.Fragment>
      <Form control={control} errors={errors} />
      <FormActions handleReset={handleReset} handleSubmit={handleSubmitForm} />
    </React.Fragment>
  );
};
