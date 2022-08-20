import { ReactElement } from "react";
import { IoCalendar } from "react-icons/io5";

import WorkItem from "../../interfaces/workItem/workitem.interface";

type CardProps = {
  item: WorkItem;
};

const InfoCardItem = (props: CardProps) => {
  return (
    <div className="flex flex-col space-y-3">
      {/* position */}
      <h2 className="text-xl tracking-wide opacity-50">
        {props.item.position}
      </h2>
      {/* start & end position */}
      <div className="flex items-center space-x-4">
        <IoCalendar className="text-violet-500" />
        <div>
          {props.item.startDate === "" ? (
            <span className="text-violet-500">forever</span>
          ) : props.item.endDate ? (
            <div>
              <span className="text-violet-500">{props.item.startDate} - </span>
              <span className="text-violet-500">{props.item.endDate}</span>
            </div>
          ) : (
            <div>
              <span className="text-violet-500">{props.item.startDate} - </span>
              <span className="bg-violet-400 text-white p-1 rounded-md">
                Current
              </span>
            </div>
          )}
        </div>
      </div>
      {/* description */}
      <p className="text-sm opacity-80 tracking-wide">
        {props.item.description}
      </p>
    </div>
  );
};

export default InfoCardItem;
