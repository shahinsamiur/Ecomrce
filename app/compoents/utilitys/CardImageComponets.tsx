import Image from "next/image";
import { IoAdd } from "react-icons/io5";

// 1. Define the Item Interface (best practice is to put this in a shared types file)
// Since this component is the consumer, we define it here for simplicity.
interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

// Define the component's props interface
interface CardImageCompoentsProps {
  item: Item; // The component now expects an 'item' prop of type Item
}

// 2. Update the component to accept the prop
export default function CardImageCompoents({ item }: CardImageCompoentsProps) {
  return (
    <div className=" w-full  rounded-md overflow-hidden">
      <div className="relative ">
        <Image
          // 3. Use the dynamic 'item.image' prop
          src={item.image}
          alt={item.name}
          className="w-full object-cover"
          width={500}
          height={500}
        />
        <div className="absolute bottom-0 right-0 cursor-pointer flex justify-center items-center size-10 bg-black/30">
          <IoAdd className="text-2xl text-white" />
        </div>
      </div>
      <div className="w-full h-16  gap-2 mt-1  flex flex-col justify-start items-start">
        {/* 3. Use the dynamic 'item.description' prop */}
        <p className="text-sm text-gray-500">{item.description}</p>
        <div className="flex justify-between items-center w-full">
          {/* 3. Use the dynamic 'item.name' prop */}
          <h2 className="text-lg font-semibold">{item.name}</h2>
          {/* 3. Use the dynamic 'item.price' prop */}
          <p className="text-lg font-bold">${item.price}</p>
        </div>
      </div>
    </div>
  );
}
