import { ReactNode } from "react"

export type IAboutCard = {
	title: string,
	children: ReactNode,
}

const AboutCard: React.FC<IAboutCard> = ({
	title,
	children
}) => {
	return (
		<div className="py-3">
			<h3>{title}</h3>
			<p className="mx-auto max-w-xl text-lg">
				{children}
			</p>
		</div>
	);
}

export default AboutCard;