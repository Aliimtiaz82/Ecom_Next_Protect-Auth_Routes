export const dynamic = "force-dynamic";
import Link from "next/link";

const getCompanyData =  () => {
  return {
    companyName: "ShopEase",
    mission: "To make online shopping easy, fast, and reliable.",
    yearFounded: 2025,
    values: [
      "Customer Satisfaction",
      "Fast Delivery",
      "Quality Products",
      "24/7 Support",
    ],
  };
};

const AboutUsPage = async () => {
  const data = await getCompanyData();

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 sm:px-12">
      <div className=' bottom-10 fixed  right-15 hidden md:block'>
              <Link href={'/home'} className='bg-[#0089A7] p-2 rounded font-bold mt-5 text-white ' >Go to Home</Link>
            </div>
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        <h1 className="text-5xl font-extrabold text-[#0089A7] mb-6">
          About {data.companyName}
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          <span className="font-semibold">Founded:</span> {data.yearFounded}
        </p>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          <span className="font-semibold">Our Mission:</span> {data.mission}
        </p>

        <h2 className="text-2xl font-semibold text-[#0089A7] mb-2">
          Our Core Values
        </h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-6">
          {data.values.map((value, i) => (
            <li key={i}>{value}</li>
          ))}
        </ul>


        <div className="mt-10 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {data.companyName}. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
