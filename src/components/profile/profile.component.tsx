import { BsHouseFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { HiBriefcase, HiPhone } from "react-icons/hi";
import { ImCog } from "react-icons/im";
import { GiEarthAmerica } from "react-icons/gi";

import PersonalInfo from "../personal-info/personal-info";
import ProfileItem from "../profile-item/profile-item.component";

const Profile = () => {
  return (
    <div className="container flex flex-col rounded-lg shadow-xl max-w-lg bg-white col-span-1 md:row-span-2">
      <div>
        {/* image */}
        <div className="relative">
          <img
            src="https://www.w3schools.com/w3images/avatar_hat.jpg"
            alt="personal photo"
            className="rounded-t-lg w-full"
          />
          <span className="absolute bottom-3 left-0 max-w-[200px] text-3xl px-6">Jane Doe</span>
        </div>
        {/* personal info */}
        <div className="profile-items-container">
          <PersonalInfo>
            <HiBriefcase className="text-violet-400" />
            <span className="opacity-50">Designer</span>
          </PersonalInfo>
          <PersonalInfo>
            <BsHouseFill className="text-violet-400" />
            <span className="opacity-50">London, UK</span>
          </PersonalInfo>
          <PersonalInfo>
            <MdEmail className="text-violet-400" />
            <span className="opacity-50">ex@mail.com</span>
          </PersonalInfo>
          <PersonalInfo>
            <HiPhone className="text-violet-400" />
            <span className="opacity-50">1224435534</span>
          </PersonalInfo>
        </div>
      </div>
      <hr className="mx-6" />
      {/* skills-langs */}
      <div className="profile-items-container">
        <div className="flex space-x-3 items-center mb-5">
          <ImCog className="scale-125 text-violet-400" />
          <h1 className="opacity-50">Skills</h1>
        </div>
        <ProfileItem
          title="adobe photoshop"
          height="h-5"
          width="w-[95%]"
          progressPercent="90%"
        />
        <ProfileItem
          title="photography"
          height="h-5"
          width="w-[85%]"
          progressPercent="80%"
        />
        <ProfileItem
          title="illustrator"
          height="h-5"
          width="w-[80%]"
          progressPercent="75%"
        />
        <ProfileItem
          title="media"
          height="h-5"
          width="w-[55%]"
          progressPercent="50%"
        />
      </div>
      <div className="profile-items-container">
        <div className="flex space-x-3 items-center mb-5">
          <GiEarthAmerica className="scale-125 text-violet-400" />
          <h1 className="opacity-50">Languages</h1>
        </div>
        <ProfileItem
          title="english"
          height="h-6"
          width="w-[100%]"
          progressPercent=""
        />
        <ProfileItem
          title="spanish"
          height="h-6"
          width="w-[55%]"
          progressPercent=""
        />
        <ProfileItem
          title="german"
          height="h-6"
          width="w-[35%]"
          progressPercent=""
        />
      </div>
    </div>
  );
};

export default Profile;
