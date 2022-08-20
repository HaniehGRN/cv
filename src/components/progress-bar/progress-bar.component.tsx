type Props = {
  height: string;
  width: string;
  progressPercent: string;
};

const ProgressBar = (props: Props) => {
  // progress container
  return (
    <div className={`${props.height} rounded-full  bg-slate-200`}>
      <div className={`${props.width} h-full bg-violet-400 text-white text-sm rounded-full text-center`}>
        {`${props.progressPercent}`}
      </div>
    </div>
  );
};

export default ProgressBar;
