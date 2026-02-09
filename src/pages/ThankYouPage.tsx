import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ThankYouPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <div className="fixed inset-0 -z-10 bg-radial-[at_50%_5%] from-black from-0% to-[#630000]" />
      <div className="w-full h-full flex items-center justify-center flex-col gap-10">
        <span className="relative text-5xl font-bold text-white">
          Thank you for your message!
        </span>
        <p className="text-xl text-white">
          You will be redirected to the home page in 5 seconds...
        </p>
      </div>
    </div>
  );
}

export default ThankYouPage;
