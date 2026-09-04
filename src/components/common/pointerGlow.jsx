import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import "./styles/pointerGlow.css";

const PointerGlow = () => {
	const glowRef = useRef(null);
	const { pathname } = useLocation();

	useEffect(() => {
		const glow = glowRef.current;
		const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
		const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

		if (!glow || !finePointer.matches || reducedMotion.matches) {
			return undefined;
		}

		let currentX = window.innerWidth / 2;
		let currentY = window.innerHeight / 3;
		let targetX = currentX;
		let targetY = currentY;
		let animationFrame = null;

		const render = () => {
			currentX += (targetX - currentX) * 0.14;
			currentY += (targetY - currentY) * 0.14;
			glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate3d(-50%, -50%, 0)`;

			if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
				animationFrame = window.requestAnimationFrame(render);
			} else {
				animationFrame = null;
			}
		};

		const handlePointerMove = (event) => {
			targetX = event.clientX;
			targetY = event.clientY;
			glow.classList.add("pointer-glow-visible");

			if (animationFrame === null) {
				animationFrame = window.requestAnimationFrame(render);
			}
		};

		const hideGlow = () => {
			glow.classList.remove("pointer-glow-visible");
		};

		window.addEventListener("pointermove", handlePointerMove, { passive: true });
		document.documentElement.addEventListener("mouseleave", hideGlow);
		window.addEventListener("blur", hideGlow);

		return () => {
			window.removeEventListener("pointermove", handlePointerMove);
			document.documentElement.removeEventListener("mouseleave", hideGlow);
			window.removeEventListener("blur", hideGlow);

			if (animationFrame !== null) {
				window.cancelAnimationFrame(animationFrame);
			}
		};
	}, []);

	let pageClass = "pointer-glow-general";

	if (pathname.startsWith("/projects/braveroom")) {
		pageClass = "pointer-glow-braveroom";
	} else if (pathname.startsWith("/projects/ludix")) {
		pageClass = "pointer-glow-ludix";
	}

	return <div ref={glowRef} className={`pointer-glow ${pageClass}`} aria-hidden="true" />;
};

export default PointerGlow;
