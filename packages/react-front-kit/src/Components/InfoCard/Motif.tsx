import type {
  CSSProperties,
  ComponentPropsWithoutRef,
  ReactElement,
} from 'react';

import classes from './InfoCard.module.css';

export interface IMotifProps extends ComponentPropsWithoutRef<'svg'> {
  style?: CSSProperties;
}

export function Motif(props: IMotifProps): ReactElement {
  const { style, ...svgProps } = props;
  return (
    <svg
      className={classes.motif}
      fill="white"
      height="407"
      style={style}
      viewBox="0 0 412 407"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path d="M86.9733 136.552C92.5372 193.214 161.106 191.016 173.009 241.509C174.386 247.37 174.884 253.568 173.39 259.415C169.276 275.518 150.329 284.06 133.901 281.584C53.8824 269.54 53.8824 146.618 93.6354 103.73C87.8225 114.456 85.8898 125.68 86.9586 136.567L86.9733 136.552Z" />
      <path d="M150.124 305.673C146.303 342.598 190.404 350.144 191.444 383.963C191.561 387.889 191.078 391.919 189.365 395.45C184.635 405.209 171.428 408.198 161.252 404.476C111.689 386.351 127.678 307.798 158.675 285.57C153.565 291.665 150.871 298.596 150.139 305.688L150.124 305.673Z" />
      <path d="M182.483 227.457C194.694 264.836 150.724 282.522 157.225 317.762C157.987 321.85 159.392 325.908 161.955 329.191C169.027 338.231 183.376 338.363 193.084 332.224C240.348 302.347 206.203 224.615 169.144 208.541C175.806 213.713 180.14 220.277 182.483 227.457Z" />
      <path
        d="M234.477 148.743C221.782 118.134 187.637 85.1944 153.711 79.5091C119.742 73.8092 91.6734 106.221 99.1847 137.944C103.68 156.934 119.815 171.03 136.902 180.422C153.99 189.814 172.848 195.881 189.321 206.343C211.152 220.219 221.343 241.744 219.512 267.737C220.01 260.572 229.235 249.26 231.607 241.758C234.433 232.849 237.551 223.076 239.762 214.153C245.107 192.555 243.013 169.374 234.462 148.743H234.477Z"
        opacity="0.5"
      />
      <path d="M138.894 68.1093C176.45 56.5337 193.362 100.843 228.678 94.9531C232.778 94.2644 236.863 92.931 240.172 90.4254C249.323 83.4947 249.704 69.1497 243.745 59.3324C214.71 11.5207 136.448 44.3427 119.757 81.1356C125.042 74.5565 131.675 70.3366 138.879 68.124L138.894 68.1093Z" />
      <path d="M125.189 295.695C86.3876 301.981 75.7575 255.766 39.9579 256.719C35.7996 256.836 31.5827 257.598 27.9515 259.62C17.9217 265.217 15.579 279.386 20.1327 289.922C42.3006 341.279 124.34 319.579 145.936 285.423C139.801 291.211 132.656 294.479 125.203 295.68L125.189 295.695Z" />
      <path d="M91.1756 352.943C86.8855 365.119 85.2163 379.259 96.3003 390.996C108.731 404.168 127.048 391.831 121.894 372.709C114.588 345.631 113.3 332.487 131.163 311.93C129.04 314.362 122.67 315.945 119.786 317.996C116.36 320.428 112.597 323.095 109.39 325.703C101.63 332.019 95.5682 340.517 91.1902 352.943H91.1756Z" />
      <path
        d="M223.846 104.638C263.145 105.093 266.821 57.8084 302.357 53.4419C306.486 52.9291 310.776 53.0609 314.67 54.5262C325.418 58.5703 329.84 72.2266 326.896 83.3334C312.591 137.416 228.239 128.127 201.81 97.5611C208.736 102.367 216.291 104.536 223.832 104.624L223.846 104.638Z"
        opacity="0.8"
      />
      <path d="M269.002 162.517C280.862 167.63 294.831 170.253 307.276 159.996C321.245 148.479 310.205 129.343 290.775 133.197C263.292 138.662 250.099 139.043 230.816 119.804C233.1 122.09 234.228 128.552 236.087 131.57C238.283 135.16 240.685 139.102 243.071 142.472C248.84 150.648 256.893 157.271 269.002 162.502V162.517Z" />
      <path
        d="M66.0646 249.671C38.7719 225.274 65.9181 190.459 44.2188 165.125C41.7003 162.179 38.6695 159.571 35.0675 158.135C25.1403 154.164 13.5292 160.773 8.58021 170.253C-15.5351 216.424 48.2892 263.063 85.6409 258.667C77.866 257.627 71.3064 254.359 66.0646 249.671Z"
        opacity="0.8"
      />
      <path d="M300.497 127.145C336.619 133.006 332.446 176.964 364.351 186.65C368.055 187.778 372.008 188.335 375.815 187.617C386.314 185.624 392.551 173.799 391.629 163.147C387.134 111.247 308.287 106.294 279.164 130.105C286.28 126.793 293.557 126.017 300.497 127.145Z" />
      <path d="M250.29 235.457C276.528 206.181 313.821 235.443 341.07 212.174C344.233 209.478 347.044 206.225 348.596 202.357C352.886 191.705 345.814 179.206 335.653 173.858C286.163 147.849 235.97 216.306 240.597 256.455C241.739 248.103 245.253 241.055 250.29 235.443V235.457Z" />
      <path d="M28.9324 350.276C39.6356 359.463 53.3698 366.731 69.6809 360.064C87.9834 352.591 82.6537 329.044 61.1447 326.758C30.704 323.535 16.8088 319.652 2.92822 293.335C4.56812 296.456 3.66032 303.578 4.61205 307.329C5.73948 311.783 6.96941 316.677 8.36039 320.97C11.728 331.374 17.9802 340.898 28.9177 350.276H28.9324Z" />
      <path
        d="M31.861 92.3007C66.9578 87.1723 63.5901 44.5037 94.675 35.6095C98.2916 34.5838 102.128 34.0856 105.803 34.8476C115.95 36.9429 121.821 48.5038 120.752 58.8193C115.598 109.049 39.0795 112.639 11.2158 89.1064C18.0683 92.4179 25.111 93.2824 31.8464 92.3007H31.861Z"
        opacity="0.8"
      />
      <path d="M256.088 66.6147C257.801 42.7748 229.264 38.8186 227.917 17.0887C227.756 14.5684 227.99 11.9602 229.03 9.65976C231.87 3.28584 240.319 1.10259 246.937 3.28584C279.193 13.9383 270.496 64.7978 251.007 79.7289C254.17 75.6994 255.766 71.1864 256.088 66.6147Z" />
      <path d="M300.863 46.9948C333.09 42.5843 340.953 81.033 370.588 80.9744C374.029 80.9744 377.543 80.4175 380.589 78.8204C388.993 74.3953 391.234 62.7171 387.676 53.9109C370.383 10.9639 302.064 27.2576 283.498 55.0684C288.696 50.4089 294.67 47.8446 300.863 47.0094V46.9948Z" />
      <path d="M236.966 254.447C241.958 282.698 276.338 278.932 284.274 303.856C285.196 306.757 285.679 309.849 285.167 312.838C283.717 321.088 274.537 326.113 266.176 325.513C225.501 322.568 220.728 260.792 239.045 237.699C236.541 243.311 236.014 249.04 236.966 254.462V254.447Z" />
      <path d="M179.466 2.26013C166.816 -0.289432 152.598 0.0475793 142.539 12.6782C131.25 26.8473 146.039 43.273 164.239 35.4631C189.994 24.415 202.82 21.294 225.662 36.1078C222.953 34.3495 220.508 28.254 218.063 25.6898C215.178 22.642 212.001 19.2865 208.97 16.4732C201.634 9.65974 192.381 4.86831 179.452 2.26013H179.466Z" />
      <path d="M8.52163 150.428C27.3805 138.325 43.4281 160.084 61.9355 151.454C64.0879 150.457 66.1231 149.095 67.558 147.204C71.526 142.003 69.5493 134.061 64.7761 129.577C41.5393 107.759 3.558 137.739 0.0146484 160.509C1.90346 156.099 4.90506 152.758 8.53627 150.443L8.52163 150.428Z" />
      <path
        d="M365.317 113.914C376.694 120.024 390.399 123.819 403.679 114.661C418.584 104.375 409.199 84.3738 389.52 86.5571C361.671 89.6488 348.493 88.9162 330.923 68.1094C333.002 70.571 333.588 77.1208 335.169 80.2858C337.058 84.0368 339.108 88.1689 341.202 91.7441C346.253 100.389 353.72 107.672 365.331 113.914H365.317Z"
        opacity="0.8"
      />
    </svg>
  );
}
