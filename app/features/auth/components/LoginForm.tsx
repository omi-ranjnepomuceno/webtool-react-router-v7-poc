import { Button, Input } from "@material-tailwind/react";
import { Form } from "react-router";

export default function LoginForm() {
  return (
    <Form method="post" className="flex flex-col justify-center gap-4">
      <Input
        required
        type="email"
        name="email"
        label="Email Address"
        color="blue"
        size="lg"
      />
      <Input
        required
        type="password"
        name="password"
        label="Password"
        color="blue"
        size="lg"
      />
      <div className="flex justify-end">
        <Button
          type="submit"
          className="bg-secondary text-primary font-semibold shadow-none px-12"
        >
          LOGIN
        </Button>
      </div>
    </Form>
  );
}
