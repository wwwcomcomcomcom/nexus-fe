export default function GreenTopBox(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="690"
      height="514"
      viewBox="0 0 690 514"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_dd_744_62)">
        <path
          d="M517.829 407.221C496.842 445.907 456.362 470 412.35 470H103C61.5786 470 27.9999 436.421 27.9999 395V87C27.9999 45.5787 61.5786 12 103 12L560.894 12C635.436 12 683.774 90.6209 650.128 157.137L603.657 249.007L517.829 407.221Z"
          fill="#DEFFEE"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_744_62"
          x="0"
          y="0"
          width="689.025"
          height="514"
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
            result="effect1_dropShadow_744_62"
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
            result="effect1_dropShadow_744_62"
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
            result="effect2_dropShadow_744_62"
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
            in2="effect1_dropShadow_744_62"
            result="effect2_dropShadow_744_62"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_744_62"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
