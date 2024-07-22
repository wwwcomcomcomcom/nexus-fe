export default function GreenBottomBox(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="655"
      height="284"
      viewBox="0 0 655 284"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_dd_1176_955)">
        <path
          d="M40.7385 126C14.4911 176.005 50.7576 236 107.233 236L548 236C589.421 236 623 202.421 623 161V91C623 49.5786 589.421 16 548 16L158.926 16C121.758 16 87.6568 36.614 70.3826 69.5238L40.7385 126Z"
          fill="#DEFFEE"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_1176_955"
          x="0.032959"
          y="0"
          width="654.967"
          height="284"
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
            result="effect1_dropShadow_1176_955"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
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
            in2="effect1_dropShadow_1176_955"
            result="effect2_dropShadow_1176_955"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_1176_955"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
