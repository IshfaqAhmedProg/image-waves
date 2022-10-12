import React, { useState } from "react";
import styles from "./Hero.module.css";
import BGImageTransition from "../BGImageTransition/BGImageTransition";
const LineDrawer = React.lazy(() => import("../LineDrawer/LineDrawer"));

export default function Hero() {
  return (
    <div className={styles.herocontainer}>
      <div className={styles.herotextbg}>
        <LineDrawer
          viewBox="0 0 550 621"
          duration={2000}
          delay={0}
          stagger={300}
          id="heroline"
          float="left"
          right="78%"
          top="6%"
          width="493px"
          hieght="555px"
        >
          <path
            d="M127.612 52.9418C153.733 21.8922 192.361 5.70524 230.678 9.75216L253.997 12.2151C261.338 12.9905 268.766 13.0285 276.18 12.3288L304.925 9.61563C339.824 6.32173 373.571 19.4772 396.868 45.4566L424.011 75.7255C428.185 80.38 432.728 84.6586 437.596 88.5195L473.48 116.981C497.31 135.882 512.595 164.166 516.023 195.707L521.617 247.173C522.281 253.283 523.395 259.31 524.949 265.2L537.525 312.872C545.963 344.857 541.137 379.678 524.195 409.053L504.222 443.683C500.632 449.906 497.561 456.421 495.042 463.152L483.643 493.621C469.775 530.688 439.891 559.322 403.397 570.513L381.266 577.3C373.808 579.587 366.551 582.628 359.601 586.378L338.979 597.508C304.973 615.86 265.316 616.367 232.487 598.868L205.502 584.484C199.54 581.307 193.297 578.695 186.845 576.68L150.941 565.465C120.486 555.952 95.7635 533.514 82.6528 503.486L63.1126 458.733C60.6983 453.203 57.8732 447.894 54.6619 442.851L27.6125 400.376C11.0351 374.345 5.27588 342.069 11.5822 310.539L21.0783 263.061C22.3665 256.621 23.1591 250.107 23.4483 243.582L25.3291 201.15C26.9434 164.732 44.1314 130.232 72.1564 107.158L95.2404 88.1516C101.194 83.2499 106.71 77.7874 111.715 71.8386L127.612 52.9418Z"
            stroke="#5CFC4E55"
            stroke-width="17"
          />
          <path
            d="M146.854 112.622C169.021 74.4531 212.846 56.088 252.532 68.3372L255.325 69.1994C268.756 73.3447 283.084 74.0719 297.142 71.3217L305.112 69.7625C342.352 62.4773 378.942 79.8995 396.879 113.457L408.329 134.877C413.965 145.421 421.589 154.608 430.768 161.913L452.465 179.184C478.662 200.036 490.797 234.957 483.909 269.672L478.204 298.426C475.791 310.589 475.677 323.019 477.87 335.005L482.326 359.356C489.306 397.505 472.586 437.267 440.394 459.077L433.504 463.745C421.351 471.979 411.106 483.003 403.605 495.92L402.045 498.607C379.878 536.775 336.053 555.14 296.367 542.891L293.573 542.029C280.143 537.884 265.814 537.157 251.756 539.907L243.786 541.466C206.546 548.751 169.956 531.329 152.019 497.771L140.57 476.351C134.934 465.807 127.309 456.621 118.131 449.315L96.4331 432.045C70.2363 411.193 58.1017 376.272 64.9895 341.556L70.6944 312.803C73.1077 300.639 73.2211 288.21 71.0281 276.224L66.5727 251.872C59.5927 213.723 76.3122 173.962 108.505 152.151L115.394 147.483C127.547 139.25 137.792 128.225 145.294 115.308L146.854 112.622Z"
            stroke="#5CFC4E99"
            stroke-width="28"
          />
          <path
            d="M174.246 154.805C191.591 124.468 226.355 109.9 257.694 119.836L288.97 129.751C293.293 131.121 297.753 132.043 302.288 132.501L343.281 136.649C371.209 139.474 394.054 159.487 401.348 187.517L415.113 240.412C416.09 244.167 417.36 247.82 418.909 251.336L440.731 300.854C452.295 327.095 447.398 358.733 428.284 381.272L400.228 414.355C397.124 418.014 394.357 421.964 391.964 426.148L374.654 456.424C357.309 486.76 322.544 501.328 291.205 491.393L259.929 481.478C255.607 480.107 251.146 479.186 246.612 478.727L205.618 474.58C177.691 471.754 154.846 451.742 147.552 423.711L133.787 370.817C132.809 367.062 131.54 363.408 129.99 359.893L108.169 310.375C96.6044 284.133 101.501 252.495 120.615 229.957L148.672 196.874C151.775 193.215 154.543 189.265 156.935 185.081L174.246 154.805Z"
            stroke="#5CFC4EBB"
            stroke-width="32"
          />
          <path
            d="M205.111 251.519C213.855 209.957 260.911 190.238 292.645 214.838L297.431 218.548C302.107 222.173 307.356 224.951 312.97 226.771L333.938 233.568C366.562 244.144 380.311 283.71 362.396 315.464L350.881 335.873C347.799 341.337 345.569 347.248 344.281 353.373L342.962 359.642C334.218 401.204 287.163 420.923 255.429 396.322L250.643 392.612C245.966 388.987 240.717 386.21 235.103 384.39L214.135 377.593C181.512 367.017 167.763 327.45 185.678 295.696L197.192 275.287C200.275 269.823 202.504 263.912 203.793 257.787L205.111 251.519Z"
            stroke="#5CFC4EFF"
            stroke-width="47"
          />
        </LineDrawer>
      </div>
      <div className={styles.herotext}>
        <h1 className={styles.herotitle} data-aos="fade-right">
          ImageWaves is your <br /> Online
          <span className="textHL"> Photo Editing</span>
          <br /> Studio!
        </h1>
        <p className={styles.herodesc}>
          Upload your images to get instant service from some of the best in the
          industry! Whatever you require, we`ve got it!
        </p>
      </div>
      <div className={styles.herobg}>
        <BGImageTransition />
      </div>
    </div>
  );
}
