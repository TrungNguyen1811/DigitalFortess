import { Link, useNavigate } from "react-router-dom";
import { Icons } from "../icons";
import { Input } from "../ui/input";

function LoginForm() {
    const navigate = useNavigate()

  return (
  <div>
    <div className="space-y-12 my-12">
        <div className=" bg-gray-600 px-4 py-2 items-center rounded-xl">
            <Input placeholder="Email" icon={Icons.email}/>
        </div>
        <div className=" bg-gray-600 px-4 py-2 items-center rounded-xl">
            <Input placeholder="Password" type="password" icon={Icons.passwords}/>
        </div>
        <div className="flex flex-row justify-between text-lg">
            <div className="flex gap-3 items-center my-2">
                <Input type="checkbox" className="h-6 w-6"/>
                <p className="text-white">Remember me</p>
            </div>
            <Link to={'#'} className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... text-transparent bg-clip-text">Forgot Password?</Link>
        </div>
        <button className="rounded-xl bg-[#B6F09C] w-full py-2"
        onClick={() => navigate("/dashboard")}>Log in</button>
    </div>
    <p className="text-lg text-gray-600 text-center">Don’t have an account?{" "} <Link to={'#'} className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... text-transparent bg-clip-text">Sign Up</Link></p>
  </div>
  )
}
export default LoginForm;
