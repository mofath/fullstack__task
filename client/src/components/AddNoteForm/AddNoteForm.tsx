import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { shallowEqual } from 'react-redux';
import { useActions } from '../../hooks/useAction';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { ICategory } from '../../interfaces';
import { Input, Button, Select } from '../../patterns';
import createSchema from '../../utils/validations';
import './add-note-form.scss';

interface Props {
  submit: () => void;
}

const AddNoteForm: React.FC<Props> = ({ submit }) => {
  /* local state */
  const [selectedCateory, setSelectedCategory] = useState<ICategory>({
    id: '',
    name: '',
  });

  /* redux state */
  const { data: categories } = useTypeSelector(
    (state) => state.categories,
    shallowEqual
  );

  const noteSchema = createSchema('title', 'description');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(noteSchema) });

  const handleSelectChange = (value: string) => {
    const category = categories.find(
      (option: ICategory) => option.name === value
    );
    setSelectedCategory(category as ICategory);
  };

  const onSubmit = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    // submit()
  };

  const { fetchCategories } = useActions();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='add-note-form'>
      <div className='add-note-form__group'>
        <Input
          type='text'
          name='title'
          placeholder='title'
          register={register}
          error={errors['title']}
        />
      </div>
      <div className='add-note-form__group add-note-form__group--wide'>
        <Input
          type='text'
          name='description'
          placeholder='description'
          register={register}
          error={errors['description']}
          className='add-note-form__input--wide'
        />
      </div>
      <div className='add-note-form__group'>
        <Select
          name='category_id'
          label='Category'
          options={categories.map((cat) => cat.name)}
          onselect={handleSelectChange}
          selected={selectedCateory.name}
        />
      </div>

      <div className='add-note-form__group--submit'>
        <Button type='submit' className='add-note-form__submit-btn'>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default AddNoteForm;
