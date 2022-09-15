import { useRouter } from "next/router";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SwitchTransition, Transition } from "react-transition-group";

export default function PageTransition() {
  const router = useRouter();

  const onPageEnter = (element: any) => {
    gsap.fromTo(
      element,
      {
        scale: 1,
        autoAlpha: 1,
      },
      {
        scale: 0.9,
        autoAlpha: 0,
        duration: 0.3,
      }
    );
  };

  const onPageExit = (element: any) => {
    gsap.fromTo(
      element,
      {
        scale: 0.9,
        autoAlpha: 0,
      },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 0.3,
      }
    );
  };

  return (
    <SwitchTransition>
      <Transition
        key={router.asPath}
        in={true}
        timeout={1500}
        onEnter={onPageEnter}
        onExit={onPageExit}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <div
          className={`fixed top-0 left-0 items-center justify-center flex w-full h-screen z-80 bg-sky-500 opacity-0 invisible transform scale-90`}
        >
          <div className="overflow-hidden text-6xl font-bold tracking-wide text-white">
            <div className="transform">Nexample</div>
          </div>
        </div>
      </Transition>
    </SwitchTransition>
  );
}
