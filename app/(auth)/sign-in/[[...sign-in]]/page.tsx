import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return ( 
    <div className="items-center bg-center">
    <SignIn />
    </div>
   );
}
 
export default SignInPage;