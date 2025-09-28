import Image from "next/image";
import { FC } from "react";

const Benefits: FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl text-left md:text-center font-medium text-[#212121] mb-6 md:mb-10">
              Goals & Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-6">
              <div className="p-4 md:p-6 bg-[#F6FAFF] rounded-lg">
                <p className="text-[#4B4B4B] text-base font-light">
                  Ensure stability in developing and operating products with
                  real users.
                </p>
              </div>
              <div className="p-4 md:p-6 bg-[#F6FAFF] rounded-lg">
                <p className="text-[#4B4B4B] text-base font-light">
                  A dedicated team deeply understands your product and company
                  culture.
                </p>
              </div>
              <div className="p-4 md:p-6 bg-[#F6FAFF] rounded-lg">
                <p className="text-[#4B4B4B] text-base font-light">
                  Flexibly scale the team up or down as needed.
                </p>
              </div>
              <div className="p-4 md:p-6 bg-[#F6FAFF] rounded-lg">
                <p className="text-[#4B4B4B] text-base font-light">
                  Optimize costs, reduce risks in staffing and technology.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/goal-and-benifits.png"
              alt="Goals & Benefits"
              width={520}
              height={369}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
