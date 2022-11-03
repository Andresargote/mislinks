interface SelectProps {
  shadow: boolean;
}

export function Select({ shadow }: SelectProps) {
  return (
    <select
      className={`w-full text-gray-500 bg-gray-100 rounded-md ${
        shadow && 'shadow border'
      } appearance-none px-12px py-6px h-12`}
    >
      <option value='0'>Selecciona una categoría:</option>
      <option value='1'>1</option>
    </select>
  );
}
