import { useState } from 'react';
import { motion } from 'framer-motion';

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

interface Props {
	setGetBoolean: React.Dispatch<boolean>;
}

export const Switcher = ({setGetBoolean}: Props) => {

	const [isOn, setIsOn] = useState(false);

	const handleToggleSwitch = () => {
		setIsOn(!isOn);
		setGetBoolean(!isOn);
	}

	return (
		<>
			<div className="main-switcher">
				<div className="container-switcher-grid">
					<p className={`${!isOn ? 'font-weight': ''}`}>Monthly</p>
					<div
						className="switch"
						data-ison={isOn}
						onClick={handleToggleSwitch}
					>
						<motion.div
							className="handle"
							layout
							transition={spring}
						/>
					</div>
					<p className={`${isOn ? 'font-weight': ''}`}>Yearly</p>
				</div>
			</div>
		</>
	)
}

