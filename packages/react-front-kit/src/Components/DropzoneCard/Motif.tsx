import type {
  CSSProperties,
  ComponentPropsWithoutRef,
  ReactElement,
} from 'react';

interface IProps extends ComponentPropsWithoutRef<'svg'> {
  style?: CSSProperties;
}

function Motif(props: IProps): ReactElement {
  const { style = { fill: 'white', opacity: 0.1 }, ...svgProps } = props;
  return (
    <svg
      height="219"
      style={style}
      viewBox="0 0 370 219"
      width="370"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <g>
        <g clipPath="url(#clip0_1010_1651)">
          <path d="M45.973 82.5519C51.537 139.214 120.105 137.016 132.009 187.509C133.386 193.37 133.883 199.568 132.39 205.415C128.276 221.518 109.329 230.06 92.9005 227.584C12.8822 215.54 12.8822 92.6183 52.6351 49.7299C46.8223 60.4557 44.8895 71.6796 45.9584 82.5666L45.973 82.5519Z" />
          <path d="M141.483 173.457C153.694 210.836 109.724 228.522 116.225 263.762C116.987 267.85 118.392 271.908 120.955 275.191C128.027 284.231 142.376 284.363 152.084 278.224C199.348 248.347 165.203 170.615 128.144 154.541C134.806 159.713 139.14 166.277 141.483 173.457Z" />
          <path
            d="M193.477 94.743C180.782 64.1335 146.637 31.1943 112.711 25.5091C78.7421 19.8092 50.6734 52.2209 58.1847 83.9439C62.6798 102.934 78.8153 117.03 95.9024 126.422C112.99 135.814 131.848 141.881 148.321 152.343C170.152 166.219 180.343 187.743 178.512 213.737C179.01 206.572 188.235 195.26 190.607 187.758C193.433 178.849 196.551 169.076 198.762 160.153C204.107 138.554 202.013 115.374 193.462 94.743H193.477Z"
            opacity="0.5"
          />
          <path d="M97.8939 14.1093C135.451 2.53367 152.362 46.8434 187.678 40.953C191.778 40.2643 195.863 38.9309 199.172 36.4253C208.324 29.4946 208.704 15.1496 202.745 5.33233C173.71 -42.4794 95.4487 -9.65736 78.7568 27.1355C84.0426 20.5565 90.6754 16.3365 97.8792 14.1239L97.8939 14.1093Z" />
          <path d="M84.1888 241.695C45.3876 247.981 34.7575 201.766 -1.0421 202.719C-5.20042 202.836 -9.41731 203.598 -13.0485 205.62C-23.0783 211.217 -25.421 225.386 -20.8673 235.921C1.30061 287.279 83.3395 265.578 104.936 231.423C98.8015 237.211 91.6562 240.478 84.2034 241.68L84.1888 241.695Z" />
          <path
            d="M182.847 50.6384C222.146 51.0926 225.821 3.8084 261.357 -0.558098C265.486 -1.07094 269.776 -0.939071 273.671 0.526197C284.418 4.57034 288.84 18.2266 285.897 29.3334C271.592 83.4164 187.239 74.1266 160.811 43.5611C167.736 48.3672 175.291 50.5358 182.832 50.6237L182.847 50.6384Z"
            opacity="0.8"
          />
          <path d="M228.003 108.516C239.863 113.63 253.831 116.253 266.277 105.996C280.245 94.4792 269.205 75.3428 249.775 79.1964C222.292 84.6619 209.1 85.0429 189.816 65.8039C192.101 68.0897 193.228 74.5515 195.088 77.57C197.284 81.1599 199.685 85.1015 202.072 88.4716C207.841 96.6478 215.894 103.271 228.003 108.502V108.516Z" />
          <path
            d="M25.0648 195.671C-2.22781 171.274 24.9184 136.459 3.219 111.125C0.700584 108.179 -2.3303 105.571 -5.93223 104.135C-15.8595 100.164 -27.4706 106.773 -32.4195 116.253C-56.5349 162.424 7.28947 209.063 44.6411 204.667C36.8662 203.627 30.3066 200.359 25.0648 195.671Z"
            opacity="0.8"
          />
          <path d="M259.497 73.1449C295.619 79.006 291.446 122.964 323.351 132.649C327.055 133.778 331.009 134.334 334.816 133.616C345.314 131.624 351.551 119.799 350.629 109.147C346.134 57.2467 267.287 52.2941 238.164 76.1047C245.28 72.7932 252.557 72.0166 259.497 73.1449Z" />
          <path d="M209.29 181.457C235.528 152.181 272.821 181.443 300.07 158.174C303.233 155.478 306.044 152.225 307.596 148.357C311.886 137.705 304.814 125.206 294.653 119.858C245.163 93.8491 194.97 162.306 199.597 202.455C200.739 194.103 204.253 187.055 209.29 181.443V181.457Z" />
          <path
            d="M-9.13901 38.3008C25.9578 33.1724 22.5901 -9.49621 53.675 -18.3904C57.2916 -19.4161 61.1278 -19.9143 64.8029 -19.1523C74.9498 -17.057 80.8212 -5.49603 79.7524 4.81945C74.5984 55.0488 -1.92052 58.6387 -29.7842 35.1065C-22.9317 38.418 -15.889 39.2826 -9.15365 38.3008H-9.13901Z"
            opacity="0.8"
          />
          <path d="M215.088 12.6147C216.802 -11.2252 188.264 -15.1814 186.917 -36.9114C186.756 -39.4316 186.99 -42.0398 188.03 -44.3403C190.871 -50.7142 199.319 -52.8974 205.937 -50.7142C238.193 -40.0617 229.496 10.7978 210.008 25.7288C213.17 21.6993 214.766 17.1863 215.088 12.6147Z" />
          <path d="M259.863 -7.00521C292.09 -11.4157 299.953 27.033 329.588 26.9743C333.029 26.9743 336.543 26.4175 339.589 24.8204C347.993 20.3953 350.234 8.71711 346.676 -0.0891457C329.383 -43.0361 261.064 -26.7424 242.498 1.06842C247.696 -3.59114 253.67 -6.15536 259.863 -6.99056V-7.00521Z" />
          <path d="M195.966 200.447C200.959 228.698 235.338 224.932 243.274 249.856C244.197 252.757 244.68 255.849 244.167 258.838C242.718 267.088 233.537 272.114 225.177 271.513C184.501 268.568 179.728 206.792 198.045 183.699C195.541 189.311 195.014 195.041 195.966 200.462V200.447Z" />
          <path d="M-32.4784 96.428C-13.6195 84.3249 2.42808 106.084 20.9355 97.4537C23.0879 96.4573 25.1231 95.0946 26.558 93.2044C30.526 88.0027 28.5493 80.0609 23.7761 75.5772C0.539268 53.7594 -37.442 83.7388 -40.9854 106.509C-39.0965 102.099 -36.0949 98.7578 -32.4637 96.4426L-32.4784 96.428Z" />
          <path
            d="M324.317 59.9135C335.694 66.0237 349.399 69.8187 362.679 60.6608C377.584 50.3746 368.199 30.3737 348.52 32.557C320.671 35.6487 307.493 34.9161 289.923 14.1093C292.002 16.5709 292.588 23.1207 294.169 26.2856C296.058 30.0367 298.108 34.1688 300.202 37.744C305.253 46.3891 312.72 53.6715 324.331 59.9135H324.317Z"
            opacity="0.8"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1010_1651">
          <path d="M0 24C0 10.7452 10.7452 0 24 0H370V219H24C10.7452 219 0 208.255 0 195V24Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Motif;