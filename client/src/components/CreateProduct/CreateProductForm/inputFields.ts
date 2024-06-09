interface InputField {
  label: string;
  name: string;
  placeholder: string;
  rules: {
    required?: string;
    minLength?: {value: number; message: string};
    maxLength?: {value: number; message: string};
    validate?: (
      value: string,
      allValues?: any,
    ) => Promise<string | boolean> | string | boolean;
  };
}

const inputFields: InputField[] = [
  {
    label: 'Ingrese el ID:',
    name: 'id',
    placeholder: 'Ej. nuevo-id',
    rules: {
      required: 'El ID es requerido',
      minLength: {value: 3, message: 'El ID debe tener al menos 3 caracteres'},
      maxLength: {
        value: 10,
        message: 'El ID no debe tener más de 10 caracteres',
      },
      validate: async (value: string) => {
        if (value === 'existente') {
          return 'Este ID ya existe';
        }
        return true;
      },
    },
  },
  {
    label: 'Ingresa el nombre del producto:',
    name: 'product',
    placeholder: 'Ej. Tarjeta Crédito',
    rules: {
      required: 'El nombre del producto es requerido',
      minLength: {
        value: 5,
        message: 'El nombre del producto debe tener al menos 5 caracteres',
      },
      maxLength: {
        value: 100,
        message: 'El nombre del producto no debe tener más de 100 caracteres',
      },
    },
  },
  {
    label: 'Ingrese la descripción:',
    name: 'description',
    placeholder: 'Ej. El producto es de color rojo',
    rules: {
      required: 'La descripción es requerida',
      minLength: {
        value: 10,
        message: 'La descripción debe tener al menos 10 caracteres',
      },
      maxLength: {
        value: 200,
        message: 'La descripción no debe tener más de 200 caracteres',
      },
    },
  },
  {
    label: 'Ingresa la imagen del producto:',
    name: 'image',
    placeholder: 'Ej. https://imagen.com',
    rules: {
      required: 'La URL de la imagen es requerida',
    },
  },
  {
    label: 'Ingrese la fecha de liberación:',
    name: 'release',
    placeholder: 'Ej. 22/02/2023',
    rules: {
      required: 'La fecha de liberación es requerida',
      validate: (value: string) => {
        const releaseDate = new Date(value);
        const currentDate = new Date();
        if (releaseDate < currentDate) {
          return 'La fecha de liberación debe ser igual o mayor a la fecha actual';
        }
        return true;
      },
    },
  },
  {
    label: 'Ingrese la fecha de revisión:',
    name: 'review',
    placeholder: 'Ej. 22/02/2024',
    rules: {
      required: 'La fecha de revisión es requerida',
      validate: (value: string, allValues: any) => {
        const releaseDate = new Date(allValues.release);
        const reviewDate = new Date(value);
        const oneYearLater = new Date(
          releaseDate.setFullYear(releaseDate.getFullYear() + 1),
        );
        if (reviewDate.getTime() !== oneYearLater.getTime()) {
          return 'La fecha de revisión debe ser exactamente un año posterior a la fecha de liberación';
        }
        return true;
      },
    },
  },
];

export default inputFields;
