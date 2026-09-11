// ============================================================
// DONACIONES
// Agregá una donación nueva copiando el bloque de ejemplo.
// Podés editar este archivo directamente desde GitHub Mobile.
//
// message es opcional: podés borrar esa línea si no la usás.
// ============================================================

export interface Donation {
  name: string;
  amount: number;
  message?: string;
}

export const donations: Donation[] = [
  {
    name: "Juan Ledesma",
    amount: 50000,
    message: "Mucha suerte",
  },
  // Ejemplo (descomentá y editá, o agregá nuevas líneas así):
  // { name: "Juan Pérez", amount: 50000, message: "Mucha suerte" },
  // { name: "María González", amount: 20000 },
  // { name: "Carlos", amount: 10000, message: "Vamos Argentina!" },
];
