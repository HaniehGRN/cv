import ProgressBar from "../progress-bar/progress-bar.component";

type PofileProps = {
  title: string;
  height: string;
  width: string;
  progressPercent: string;
};

const ProfileItem = (props: PofileProps) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="capitalize opacity-50">{props.title}</div>
      <ProgressBar
        height={props.height}
        width={props.width}
        progressPercent={props.progressPercent}
      ></ProgressBar>
    </div>
  );
};

export default ProfileItem;
