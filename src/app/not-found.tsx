

    "use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/components/store/store";
import { useRouter } from "next/navigation";
import Link from "next/link";


const NotFound = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) return null; // Return nothing while redirecting

  return (
    <div className="w-full md:text-4xl text-center mt-30 justify-center flex">
      <div className="border w-1/2 p-5 rounded-lg text-[#F863B2] shadow-xl shadow-[#ebc7da]">
        <h1>404 - Page not found</h1>
        <small className="flex justify-center mt-3 p-3 text-sm font-semibold ">
            <Link  href={'/home'} className="bg-[#0f7289] hover:bg-[#0089A7] p-2  text-white rounded">Go to Home</Link>
        </small>
      </div>
      
    </div>
  );
};

export default NotFound;


