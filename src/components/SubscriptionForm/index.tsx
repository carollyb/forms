import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormData } from "./types";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../FormField";

const formSchema = z.object({
  moviename: z.string(),
  director: z.string(),
  year: z.coerce
    .number({ message: "Not a year" })
    .min(4, { message: "Invalid year" }), //TODO: consertar
});

export type FormSchema = z.infer<typeof formSchema>;

function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "8px",
      }}
    >
      <FormField
        name="moviename"
        register={register}
        error={errors.moviename}
        placeholder="Movie name"
      />
      <FormField
        name="year"
        register={register}
        error={errors.year}
        placeholder="Year"
        valueAsNumber
      />
      <FormField
        name="director"
        register={register}
        error={errors.director}
        placeholder="Director"
      />
      {/* <Typography>Watched?</Typography>
      <FormControlLabel control={<Checkbox />} label="Yes" />
      <FormControlLabel control={<Checkbox />} label="No" /> */}
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default SubscriptionForm;
