import { useEffect, useRef } from "react";

const Cursor = () => {
  const cursor = useRef();
  const cursor2 = useRef();

  const handleMouseMove = (event) => {
    let interacting = event.target.closest(".interactable");
    const x1 = event.clientX - cursor.current.offsetWidth / 2,
      y1 = event.clientY - cursor.current.offsetHeight / 2;

    const keyframes = {
      transform: `translateX(${x1}px) translateY(${y1}px)`,
    };

    cursor.current.animate(keyframes, {
      duration: 800,
      fill: "forwards",
    });

    const x2 = event.clientX - cursor2.current.offsetWidth / 2;
    const y2 = event.clientY - cursor2.current.offsetHeight / 2;

    cursor2.current.style.transform = `translateX(${x2}px) translateY(${y2}px)`;

    let spanText = cursor2.current.children[0];
    if (interacting) {
      spanText.textContent = interacting.dataset.name;
      spanText.classList.add("px-5");
      spanText.classList.remove("w-0");
    } else {
      spanText.textContent = "";
      spanText.classList.remove("px-5");
      spanText.classList.add("w-0");
    }
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div
        id="trailer"
        ref={cursor}
        className="rounded-full w-7 h-7 border absolute pointer-events-none select-none z-50 opacity-0 hidden lg:block"
      ></div>
      <div
        ref={cursor2}
        id="trailer-i"
        className="rounded-full w-1 h-1 bg-white absolute pointer-events-none select-none z-50 opacity-0 hidden lg:block"
      >
        <span className="absolute right-[calc(100%+2rem)] whitespace-nowrap text-base -top-[1rem] py-1 w-0 overflow-hidden my-auto rounded-full bg-slate-50 text-slate-900 transition-all"></span>
      </div>
    </>
  );
};

export default Cursor;
