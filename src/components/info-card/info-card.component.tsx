import WorkItem from "../../interfaces/workItem/workitem.interface";
import InfoCardItem from "../Info-card-item/info-card-item.component";

type CardProps = {
    title: string;
    children: JSX.Element;
    items: WorkItem[];
}

const InfoCard = (props: CardProps) => {
    return (
        <div className="container flex flex-col rounded-lg shadow-xl max-w-5xl bg-white p-7 md:col-span-2">
            {/* title */}
            <div className="flex items-center space-x-7 text-3xl mb-7">
                {props.children}
                <h1 className="capitalize opacity-50">{props.title}</h1>
            </div>
            <div className="flex flex-col space-y-8">
                {
                    props.items.map((item: WorkItem) => {
                        return (
                            <div>
                                <InfoCardItem item={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default InfoCard;