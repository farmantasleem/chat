const TextInput = ({
  placeholder,
  label,
  onChange
}: {
  placeholder: string;
  label: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <label className="font-medium text-sm">{label}</label>
      <input
      onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder={placeholder}
        className="bg-[#f4f4f4] text-sm outline-none px-2 py-2 w-full h-10 rounded-[8px]"
      />
    </div>
  );
};

export default TextInput;