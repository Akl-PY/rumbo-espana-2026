import { singleton, fields } from '@keystatic/core';

export const donationsSingleton = singleton({
  label: 'Donaciones',
  path: 'src/data/donations',
  format: { data: 'json' },

  schema: {
    minAmount: fields.number({
      label: 'Monto mínimo para mostrar',
      description:
        'Solo se mostrarán donaciones con un monto mayor o igual a este valor.',
      defaultValue: 0,
    }),

    initialLimit: fields.number({
      label: 'Donaciones visibles inicialmente',
      description:
        "Cantidad de donaciones visibles antes de mostrar 'Cargar más'.",
      defaultValue: 4,
    }),

    loadMoreAmount: fields.number({
      label: "Donaciones por 'Cargar más'",
      description:
        'Cantidad de donaciones adicionales que se muestran al presionar el botón.',
      defaultValue: 4,
    }),

    items: fields.array(
      fields.object({
        id: fields.text({
          label: 'ID',
          description: 'Identificador único. Ejemplo: juan-perez-40000',
        }),

        name: fields.text({
          label: 'Nombre del donante',
        }),

        amount: fields.number({
          label: 'Monto (ARS)',
        }),

        message: fields.text({
          label: 'Mensaje (Opcional)',
        }),

        show: fields.checkbox({
          label: 'Mostrar públicamente',
          defaultValue: true,
        }),
      }),
      {
        label: 'Lista de Donaciones',

        itemLabel: (props) =>
          `${props.fields.name.value || 'Sin nombre'} - $${
            props.fields.amount.value || 0
          }`,
      },
    ),
  },
});
