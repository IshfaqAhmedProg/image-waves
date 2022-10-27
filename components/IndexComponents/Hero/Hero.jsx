import React from "react";
import styles from "./Hero.module.css";
import BGImageTransition from '../../BGImageTransition/BGImageTransition'
const LineDrawer = React.lazy(() => import("../../LineDrawer/LineDrawer"));

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
            opacity="0.5"
            d="M127.612 52.9418C153.733 21.8922 192.361 5.70524 230.678 9.75216L253.997 12.2151C261.338 12.9905 268.766 13.0285 276.18 12.3288L304.925 9.61563C339.824 6.32173 373.571 19.4772 396.868 45.4566L424.011 75.7255C428.185 80.38 432.728 84.6586 437.596 88.5195L473.48 116.981C497.31 135.882 512.595 164.166 516.023 195.707L521.617 247.173C522.281 253.283 523.395 259.31 524.949 265.2L537.525 312.872C545.963 344.857 541.137 379.678 524.195 409.053L504.222 443.683C500.632 449.906 497.561 456.421 495.042 463.152L483.643 493.621C469.775 530.688 439.891 559.322 403.397 570.513L381.266 577.3C373.808 579.587 366.551 582.628 359.601 586.378L338.979 597.508C304.973 615.86 265.316 616.367 232.487 598.868L205.502 584.484C199.54 581.307 193.297 578.695 186.845 576.68L150.941 565.465C120.486 555.952 95.7635 533.514 82.6528 503.486L63.1126 458.733C60.6983 453.203 57.8732 447.894 54.6619 442.851L27.6125 400.376C11.0351 374.345 5.27588 342.069 11.5822 310.539L21.0783 263.061C22.3665 256.621 23.1591 250.107 23.4483 243.582L25.3291 201.15C26.9434 164.732 44.1314 130.232 72.1564 107.158L95.2404 88.1516C101.194 83.2499 106.71 77.7874 111.715 71.8386L127.612 52.9418Z"
            stroke="#5CFC4E"
            strokeWidth="17"
          />
          <path
            opacity="0.7"
            d="M113.82 126.237C129.782 85.0862 170.219 60.1303 211.327 66.0598L217.573 66.9606C231.484 68.9673 245.752 67.4577 259.211 62.5552L269.949 58.6441C305.603 45.6571 344.457 57.1782 367.394 87.5387L384.299 109.916C391.505 119.455 400.466 127.344 410.669 133.134L437.88 148.575C467 165.1 484.417 197.71 483.011 233.074L481.697 266.121C481.204 278.512 483.025 290.807 487.055 302.307L496.509 329.282C509.335 365.882 499.002 407.76 470.592 434.311L462.036 442.307C451.311 452.33 442.905 464.813 437.503 478.739L435.078 484.991C419.116 526.142 378.679 551.098 337.571 545.168L331.326 544.268C317.414 542.261 303.147 543.771 289.687 548.673L278.95 552.584C243.295 565.571 204.442 554.05 181.505 523.69L164.599 501.313C157.393 491.774 148.433 483.884 138.23 478.094L111.018 462.653C81.8979 446.128 64.4811 413.518 65.8874 378.154L67.2014 345.108C67.6941 332.717 65.8736 320.421 61.8435 308.922L52.3897 281.946C39.5629 245.346 49.8967 203.468 78.3065 176.918L86.8623 168.922C97.587 158.899 105.993 146.415 111.395 132.489L113.82 126.237Z"
            stroke="#5CFC4E"
            strokeWidth="23"
          />
          <path
            opacity="0.8"
            d="M174.246 154.805C191.591 124.468 226.355 109.9 257.694 119.836L288.97 129.751C293.293 131.121 297.753 132.043 302.288 132.501L343.281 136.649C371.209 139.474 394.054 159.487 401.348 187.517L415.113 240.412C416.09 244.167 417.36 247.82 418.909 251.336L440.731 300.854C452.295 327.095 447.398 358.733 428.284 381.272L400.228 414.355C397.124 418.014 394.357 421.964 391.964 426.148L374.654 456.424C357.309 486.76 322.544 501.328 291.205 491.393L259.929 481.478C255.607 480.107 251.146 479.186 246.612 478.727L205.618 474.58C177.691 471.754 154.846 451.742 147.552 423.711L133.787 370.817C132.809 367.062 131.54 363.408 129.99 359.893L108.169 310.375C96.6044 284.133 101.501 252.495 120.615 229.957L148.672 196.874C151.775 193.215 154.543 189.265 156.935 185.081L174.246 154.805Z"
            stroke="#5CFC4E"
            strokeWidth="38"
          />
          <path
            d="M205.111 251.519C213.855 209.957 260.911 190.238 292.645 214.838L297.431 218.548C302.107 222.173 307.356 224.951 312.97 226.771L333.938 233.568C366.562 244.144 380.311 283.71 362.396 315.464L350.881 335.873C347.799 341.337 345.569 347.248 344.281 353.373L342.962 359.642C334.218 401.204 287.163 420.923 255.429 396.322L250.643 392.612C245.966 388.987 240.717 386.21 235.103 384.39L214.135 377.593C181.512 367.017 167.763 327.45 185.678 295.696L197.192 275.287C200.275 269.823 202.504 263.912 203.793 257.787L205.111 251.519Z"
            stroke="#5CFC4E"
            strokeWidth="55"
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
