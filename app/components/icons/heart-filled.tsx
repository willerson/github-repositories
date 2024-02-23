import { SVGProps } from 'react';

export const HeartFilled = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="24"
      fill="none"
      {...props}
    >
      <g clip-path="url(#a)">
        <path
          fill="#32C0C6"
          d="M14.857 24c-.287 0-.53-.094-.73-.281L3.783 14.312a5.336 5.336 0 0 1-.456-.406c-.194-.187-.5-.528-.92-1.023a13.848 13.848 0 0 1-1.128-1.524c-.332-.52-.627-1.15-.887-1.89a6.489 6.489 0 0 1-.39-2.156c0-2.292.702-4.084 2.106-5.375C3.511.645 5.451 0 7.927 0c.685 0 1.384.112 2.097.336a8.717 8.717 0 0 1 1.99.906c.613.38 1.141.737 1.583 1.07.442.334.863.688 1.26 1.063.398-.375.818-.73 1.26-1.063.443-.333.97-.69 1.584-1.07a8.72 8.72 0 0 1 1.99-.906A6.976 6.976 0 0 1 21.788 0c2.476 0 4.416.646 5.82 1.938 1.404 1.291 2.105 3.083 2.105 5.375 0 2.302-1.265 4.645-3.796 7.03l-10.33 9.376a1.024 1.024 0 0 1-.73.281Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h29.714v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
