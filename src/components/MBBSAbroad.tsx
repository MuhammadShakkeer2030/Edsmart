import ImageCard from "./ImageCard";
import { FC } from "react";
import { Gallery_data } from "../assets/utility/utitly";
import { DocumentData } from "firebase/firestore";

interface MbbsProps {
  galleryData: DocumentData[];
}
const MBBSAbroad: FC<MbbsProps> = ({ galleryData }) => {
  return (
    <div className="flex flex-wrap gap-8 ">
      {galleryData?.map((item, index) => (
        <ImageCard
          key={index}
          image={item.photo}
          title={item.name}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default MBBSAbroad;
