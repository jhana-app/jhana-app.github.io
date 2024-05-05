import type { ReactNode } from 'react';

type IHeroAvatarProps = {
  title: ReactNode;
  description: ReactNode;
};

const HeroAvatar = (props: IHeroAvatarProps) => (
  <div className="flex flex-col items-center gap-y-12 md:flex-row md:justify-between md:gap-x-24">
    <div className="flex flex-col gap-y-6 sm:gap-y-12">
      <h1 className="text-4xl font-bold sm:text-6xl">{props.title}</h1>

      <p className="text-lg leading-9 sm:text-xl">{props.description}</p>
      {/* Join the beta button */}
      <div className="flex h-fit">
        <a
          href="https://discord.gg/JNJQg4jD3V"
          className="rounded-md bg-blue-600 px-6 py-3 text-2xl font-semibold text-white"
          rel="noopener noreferrer"
        >
          Join the Beta
        </a>
      </div>
    </div>

    <div className="shrink-0">
      <div
        style={{
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          boxShadow:
            '0 .6021873017743928px 3.010936508871964px -.3333333333333333px #00000005, 0 2.288533303243457px 11.442666516217285px -.6666666666666666px #00000009, 0 10px 50px -1px #00000014',
          display: 'flex',
          flex: 'none',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          gap: '10px',
          height: 'min-content',
          justifyContent: 'center',
          overflow: 'visible',
          padding: '20px',
          position: 'relative',
          transform: 'perspective(1200px)',
          width: '227px',
        }}
      >
        <div
          className=""
          style={{
            borderRadius: '8px',
            flex: '1 0 0px',
            overflow: 'hidden',
            position: 'relative',
            willChange: 'transform',
            height: '404px',
          }}
        >
          <video
            src="https://framerusercontent.com/modules/assets/5MDYAQInhMXje5LBLIS0RT72BLY~UHs2Xx2VahMyCntEPu7yDom4nLkm_Ga7nEpgzdqyR5Y.mp4"
            loop={true}
            autoPlay={true}
            poster="https://framerusercontent.com/images/GxnKjj4ypjgZReIKEQwTEuVSAk.png"
            muted={true}
            playsInline={true}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '0px',
              display: 'block',
              objectFit: 'contain',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              objectPosition: '50% 50%',
            }}
          ></video>
        </div>
      </div>
    </div>
  </div>
);

export { HeroAvatar };
