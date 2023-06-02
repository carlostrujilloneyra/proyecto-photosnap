import { useState } from "react";
import { iconsHeader } from "../../../../data";

interface Props{
	navRef: any,
	showCloseIcon: boolean
}

export const ToggleButton = ({navRef, showCloseIcon}: Props) => {

	const [showHamburguer, setShowHamburguer] = useState<boolean>(true);

	const handleChangeIcon = () => {
		
		navRef.current.classList.toggle('new-nav');
		
		setTimeout(() => {
			setShowHamburguer(!showHamburguer);
		}, 180);
	}
	
	const [hamburguer, close] = iconsHeader;
	const iconHamburguer = hamburguer.src;
	const iconClose = close.src;

	return (
		<>
			<button onClick={handleChangeIcon} className="button-hamburguer-close">
				<img src={showHamburguer || !showCloseIcon ? iconHamburguer : iconClose} alt="icon-header" />
			</button>
		</>
	)
}
