import "./App.css";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
};

function App() {
  const schema: ZodType<FormData> = z
    .object({
      firstName: z.string().min(2).max(30),
      lastName: z.string().min(2).max(30),
      email: z.string().email(),
      age: z.number().min(18).max(70),
      password: z.string().min(5).max(20),
      confirmPassword: z.string().min(5).max(20),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password do not match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function submitData(data: FormData) {
    console.log("전송 완료", data);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(submitData)}>
        <label htmlFor="first-name">First Name: </label>
        <input id="first-name" type="text" {...register("firstName")} />
        {errors.firstName && <span>{errors.firstName.message}</span>}

        <label htmlFor="last-name">Last Name: </label>
        <input id="last-name" type="text" {...register("lastName")} />
        {errors.lastName && <span>{errors.lastName.message}</span>}

        <label htmlFor="email">Email: </label>
        <input id="email" type="email" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}

        <label htmlFor="age">Age: </label>
        <input
          id="age"
          type="number"
          {...register("age", { valueAsNumber: true })}
        />
        {errors.age && <span>{errors.age.message}</span>}

        <label htmlFor="password">Password: </label>
        <input id="password" type="password" {...register("password")} />
        {errors.password && <span>{errors.password.message}</span>}

        <label htmlFor="confirm-password">Confirm Password: </label>
        <input
          id="confirm-password"
          type="password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
