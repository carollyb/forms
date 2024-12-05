import { FieldError, UseFormRegister } from "react-hook-form";
import { FormSchema } from "../SubscriptionForm";

type FormFieldProps = {
  name: ValidFieldNames;
  placeholder: string;
  register: UseFormRegister<FormSchema>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export type ValidFieldNames = "moviename" | "year" | "director";

function FormField({
  register,
  error,
  placeholder,
  name,
  valueAsNumber,
}: FormFieldProps) {
  return (
    <>
      <input
        placeholder={placeholder}
        style={{
          padding: "4px",
          height: "40px",
          border: "solid",
          borderColor: "gray",
          borderRadius: "10px",
          color: "white",
        }}
        {...register(name, { valueAsNumber })}
      />
      {error && <span style={{ color: "red" }}>{error?.message}</span>}
    </>
  );
}

export default FormField;
