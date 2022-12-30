/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { Containernav, Infonav, Titlenav } from "../../../styles/styledComponents";

const CategoryItem = ({ item }) => {
  return (
    <Containernav>

      <Image src={item.img} layout="fill"/>
      <Infonav >
        <Titlenav>{item.title1}</Titlenav>
        <Titlenav>{item.title2}</Titlenav>
      </Infonav>
    </Containernav>
  );
};

export default CategoryItem;