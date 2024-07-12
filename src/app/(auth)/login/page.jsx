import LogInSlider from "./_features/login-slider";
import { LogInForm } from "./_features/login-form";

export default function LogIn() {
  return (
    <div className="h-screen overflow-hidden flex">
      <LogInSlider/>
      <LogInForm />
    </div>
  );
}
