import { useState } from "react";
import { iconsHeader } from "../../../../data";

export const ToggleButton = () => {

	const [showIcon, setShowIcon] = useState<boolean>(false);

	const handleChangeIcon = () => {
		setShowIcon(!showIcon);
	}
	
	const [hamburguer, close] = iconsHeader;
	const iconHamburguer = hamburguer.src;
	const iconClose = close.src;

	return (
		<>
			<button onClick={handleChangeIcon} className="button-hamburguer-close">
				<img src={!showIcon? iconHamburguer : iconClose} alt="icon-header" />
			</button>
		</>
	)
}
