import { socials } from "../../../../data"

export const SocialNetworks = () => {
	return (
		<>
			<div className="grid-social-networks">
				{
					socials.map(({source, name}) => {
						return <img key={name} src={source} alt={name} />
					})
				}
			</div>
		</>
	)
}
