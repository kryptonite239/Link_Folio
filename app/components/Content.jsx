"use client";
import pic from "../../public/pic_1.png";
import Image from "next/image";
import pic2 from "../../public/pic_2.jpg";
const Content = () => {
  return (
    <>
      <div className="first_sec flex w-full mt-[200px] p-20 items-center justify-between h-[500px]">
        <div className="text flex flex-col  place-items-start justify-between w-1/2">
          <div className="main_text text-6xl font-bold text-sec">
            Everything you are.
            <br /> In one, simple link in <br /> bio.
          </div>
          <div className="sec_text text-text text-[17px] mt-3 font-semibold">
            One link to help you share everything you create, curate and sell
            from your Instagram, TikTok, Twitter, YouTube and other social media
            profiles.
          </div>
          <div className="button">
            <button className="w-[270px] h-[70px] rounded-full border-text hover:border-none border-4 text-sec text-xl mt-10 font-semibold hover:underline hover:bg-sec ease-in-out duration-300 hover:text-text">
              Claim Your Link Folio!
            </button>
          </div>
        </div>
        <div className="pictures w-1/2 flex place-content-center">
          <Image src={pic} width={250} height={250} />
        </div>
      </div>
      <div className="second_sec flex w-full mt-[20px] bg-sec p-20 items-center justify-between h-[500px]">
        <div className="pictures w-1/2 flex place-content-center">
          <Image src={pic2} width={400} height={250} />
        </div>
        <div className="text flex flex-col  place-items-start justify-between w-1/2">
          <div className="main_text text-6xl font-bold text-main">
            Create and customize <br /> your LinkFolio in <br /> minutes
          </div>
          <div className="sec_text text-text text-[17px] mt-3 font-semibold">
            Connect your TikTok, Instagram, Twitter, website, store, videos,
            music, podcast, events and more. It all comes together in a link in
            bio landing page designed to convert.
          </div>
          <div className="button">
            <button className="w-[200px] h-[70px] rounded-full border-text hover:border-none border-4 text-main text-xl mt-10 font-semibold hover:underline hover:bg-main ease-in-out duration-300 hover:text-sec">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
