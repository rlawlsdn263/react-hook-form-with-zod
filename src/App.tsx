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

  const { register, handleSubmit } = useForm({ resolver: zodResolver(schema) });

  return (
    <div className="App">
      <form>
        <label htmlFor="first-name">First Name: </label>
        <input id="first-name" type="text" {...register("firstName")} />
        <label htmlFor="last-name">Last Name: </label>
        <input id="last-name" type="text" {...register("lastName")} />
        <label htmlFor="email">Email: </label>
        <input id="email" type="email" {...register("email")} />
        <label htmlFor="age">Age: </label>
        <input id="age" type="number" {...register("age")} />
        <label htmlFor="password">Password: </label>
        <input id="password" type="password" {...register("password")} />
        <label htmlFor="confirm-password">Confirm Password: </label>
        <input
          id="confirm-password"
          type="password"
          {...register("confirmPassword")}
        />

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
