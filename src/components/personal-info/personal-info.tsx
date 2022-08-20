import ItemProps from "../../interfaces/item-props/item-props.interface";

const PersonalInfo = (props: ItemProps) => {
  return (
    <div className="flex items-center space-x-3">
      {/* <div className="text-rose-200">{props.children}</div> */}
      {props.children}
    </div>
  );
};

export default PersonalInfo;
