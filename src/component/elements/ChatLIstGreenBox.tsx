export default function ChatLIstGreenBox(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="654"
      height="216"
      viewBox="0 0 654 216"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_dd_1358_747)">
        <path
          d="M532.77 42.4091C515.147 31.1003 506.336 25.4459 496.851 21.443C488.432 17.8898 479.634 15.3098 470.63 13.7534C460.486 12 450.016 12 429.076 12H108C103.357 12 101.036 12 99.0748 12.1028C60.741 14.1118 30.1118 44.741 28.1028 83.0748C28 85.0361 28 87.3574 28 92C28 96.6426 28 98.9639 28.1028 100.925C30.1118 139.259 60.741 169.888 99.0748 171.897C101.036 172 103.357 172 108 172H579.953C624.526 172 642.409 114.472 605.691 89.2028L532.77 42.4091Z"
          fill="#DEFFEE"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_1358_747"
          x="0"
          y="0"
          width="653.438"
          height="216"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="4"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_1358_747"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0509804 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1358_747"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="4"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_1358_747"
          />
          <feOffset dy="16" />
          <feGaussianBlur stdDeviation="16" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0509804 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1358_747"
            result="effect2_dropShadow_1358_747"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_1358_747"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
