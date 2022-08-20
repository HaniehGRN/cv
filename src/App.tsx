import { IoBriefcase } from "react-icons/io5";
import { FaUserGraduate, FaPinterestP } from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

import Profile from "./components/profile/profile.component";
import InfoCard from "./components/info-card/info-card.component";

class WorkItem {
  constructor(
    public position: string,
    public startDate: string,
    public endDate: string,
    public description: string
  ) {}
}

const workItems: WorkItem[] = [
  new WorkItem(
    "Front End Developer / w3schools.com",
    "Jan 2015",
    "",
    "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
  ),
  new WorkItem(
    "Web Developer / something.com",
    "Mar 2012",
    "Dec 2014",
    "Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
  ),
  new WorkItem(
    "Graphic Designer / designsomething.com",
    "Jun 2010",
    "Mar 2012",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  ),
];

const educationItems: WorkItem[] = [
  new WorkItem(
    "W3Schools.com",
    "",
    "",
    "Web Development! All I need to know in one place"
  ),
  new WorkItem("London Business School", "2013", "2015", "Master Degree"),
  new WorkItem("School of Coding", "2010", "2013", "Bachelor Degree"),
];

function App() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 mx-auto p-5 max-w-7xl md:grid-cols-3">
        {/* profile */}
        <Profile />
        {/* work experience */}
        <InfoCard title="work experience" items={workItems}>
          <IoBriefcase className="text-violet-400 scale-125" />
        </InfoCard>
        {/* education */}
        <InfoCard title="Education" items={educationItems}>
          <FaUserGraduate className="text-violet-400 scale-125" />
        </InfoCard>
      </div>
      {/* footer */}
      <div className="flex flex-col justify-center items-center space-y-3 bg-violet-400 text-white py-12">
        <p>Find me on social media.</p>
        <div className="flex items-center space-x-2 text-white">
          <a href="#" className="hover:opacity-50">
            <AiFillFacebook />
          </a>
          <a href="#" className="hover:opacity-50">
            <AiFillInstagram />
          </a>
          <a href="#" className="hover:opacity-50">
            <FaPinterestP />
          </a>
          <a href="#" className="hover:opacity-50">
            <AiOutlineTwitter />
          </a>
          <a href="#" className="hover:opacity-50">
            <AiFillLinkedin />
          </a>
        </div>
        <p>Powered by HaniehGorgani</p>
      </div>
    </div>
  );
}

export default App;
