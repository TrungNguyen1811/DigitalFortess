import LoginForm from '@/components/auth/login-form';
import { Icons } from '@/components/icons';

function LoginPage() {
  return (
    <div className='bg-[#131619] flex h-full w-full'>
        <div className='flex flex-row  w-1/2 items-center justify-center'>
            <div className='w-[496px]'>
                <div>
                  <h1 className='text-white text-4xl leading-[2.75rem] mb-6'>Hello, {" "}<span className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... text-transparent bg-clip-text'>Digital Fortress</span></h1>
                  <h2 className='text-[#6F767E] text-lg -tracking-tighter'>Log in to platform to start creating magic.</h2>
                </div>
                <LoginForm />
            </div>
        </div>
        <div className='w-[720px] relative'>
                <img className="ml-[2.5rem] w-[720px] h-[1024px] rounded-l-[2.5rem]" src={Icons.illustration} alt='illustrations' />
                <div className='absolute top-[36rem] text-4xl leading-10 text-white font-jakarta font-semibold ml-24'>
                  <h1 className='space-y-12'>
                  <p>Digital Fortress has been a game-changer for our content creation process.</p>
                  <p>The AI-powered tools are incredibly user-friendly and have saved us countless hours of work.</p>
                  </h1>
                  <div className='mt-12'>
                    <p className='text-xl leading-8'>Lily Alisson</p>
                    <p className='text-[#B6F09C] text-sm leading-3 mt-2'>CMO at Digital Fortress</p>
                  </div>
                </div>
            </div>
    </div>
  );
}
export default LoginPage;
