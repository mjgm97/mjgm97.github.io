import React, { useRef, useEffect, useState } from "react";
import Card from "./card";
import "./styles/animatedCard.css";

const AnimatedCard = ({ icon, title, body, threshold = 0.2, children }) => {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisible(true);
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold }
		);

		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, [threshold]);

	return (
		<div ref={ref} className={`animated-card ${visible ? "visible" : ""}`}>
			{children ? children : <Card icon={icon} title={title} body={body} />}
		</div>
	);
};

export default AnimatedCard;

