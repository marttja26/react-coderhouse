import { getByTitle } from "@testing-library/react";

const Item = ({item}) => {
    
    return (
        <div className="flex flex-col  max-w-xs border" id={item.id}>
            <img src={item.image} className=" h-3/4 p-5"></img>
            <div className="flex grow bg-gray-200">
                <div className="w-fit m-auto">
                <p className="text-center">{item.title}</p>
                <p className="text-center">${item.price}</p>
                <button className="flex p-2 m-auto hover:underline">VER DETALLES</button>
                </div>
            </div>
        </div>
    )
}

export default Item;