import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlinePlusSm, HiOutlineMinusSm } from "react-icons/hi";
const ItemCount = ({ stock, initial, onAdd }) => {
	const [count, setCount] = useState(stock > initial ? initial : stock);
	const [buyPhase, setBuyPhase] = useState(false);
	const incrementCount = () => {
		if (stock > count) {
			setCount((prevCount) => prevCount + 1);
		}
	};
	const decrementCount = () => {
		if (count > 0) {
			setCount((prevCount) => prevCount - 1);
		}
	};

	const AddToCart = () => {
		if (stock >= count && count > 0) {
			onAdd(count);
			setBuyPhase(true);
		}
	};

	return (
		<div className="flex flex-col gap-5 w-full">
			{buyPhase === false ? (
				<>
					<p>STOCK: {stock}</p>
					<p>Cantidad</p>
					<div className="flex max-w-fit border my-auto">
						<button className="bg-gray-200" onClick={decrementCount}>
							<HiOutlineMinusSm size="1.5rem" />
						</button>
						<div className="w-10 bg-white">
							<p className="text-center text-xl">{count}</p>
						</div>
						<button className="bg-gray-200" onClick={incrementCount}>
							<HiOutlinePlusSm size="1.5rem" />
						</button>
					</div>
					<button className="btn" onClick={AddToCart}>
						{stock > 0 ? "AGREGAR AL CARRITO" : "NO HAY STOCK"}
					</button>
				</>
			) : (
				<button className="btn">
					<Link to={"/cart"}>FINALIZAR COMPRA</Link>
				</button>
			)}
		</div>
	);
};

export default ItemCount;
