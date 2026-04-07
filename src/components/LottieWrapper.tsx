'use client';

import dynamic from 'next/dynamic';
import type { ComponentProps } from 'react';

const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then((mod) => mod.DotLottieReact),
  {
    ssr: false,
    loading: () => <div className="w-full h-full" />,
  }
);

type DotLottieProps = ComponentProps<typeof DotLottieReact>;

interface LottieWrapperProps {
  src: string;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
  dotLottieRefCallback?: DotLottieProps['dotLottieRefCallback'];
}

export default function LottieWrapper({
  src,
  loop = true,
  autoplay = true,
  speed = 1,
  className = '',
  style,
  dotLottieRefCallback,
}: LottieWrapperProps) {
  return (
    <div className={className} style={style}>
      <DotLottieReact
        src={src}
        loop={loop}
        autoplay={autoplay}
        speed={speed}
        dotLottieRefCallback={dotLottieRefCallback}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
