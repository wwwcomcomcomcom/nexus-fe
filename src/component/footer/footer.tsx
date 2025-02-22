import DiscordIcon from "../icons/DiscordIcon";
import InstagramIcon from "../icons/InstagramIcon";

export default function Footer() {
  const InquiryInstagram = () => {
    window.location.href = "https://www.instagram.com/sem.__2/";
  };

  return (
    <footer className="flex items-center justify-center w-full  pb-2 xs:px-10 z-50">
      <div className="border-t border-[#E4E4E4] w-full flex place-content-between">
        <div className="flex max-xs:px-4">
          <p className="text-xl pt-2 pr-10">NEXUS</p>
          <p className="text-sm text-center text-[#565656] pt-3 max-md:hidden">
            Copyright 2024 NEXUS. All Rights Reserved
          </p>
        </div>
        <div className="flex ">
          <a className="flex">
            <DiscordIcon className="w-8 mt-2" />
            <p className="pr-10 text-sm mt-2.5 ml-1 text-[#565656]">
              @depressedpatient
            </p>
          </a>
          <a
            className="cursor-pointer flex max-sm:hidden"
            onClick={InquiryInstagram}
          >
            <InstagramIcon className="w-8 mt-2" />
            <p className="text-sm mt-2.5 ml-1 text-[#565656]">@semin._2</p>
          </a>
        </div>
      </div>
    </footer>
  );
}
