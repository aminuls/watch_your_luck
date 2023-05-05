import styles from "@/styles/Banner.module.css";
import Image from "next/image";
export const Banner = () => {
   return (
      <>
         <div className="d-flex">
            <div className={styles.bannerLeft}>
               <div>
                  <p>Watch your luck with watckyourluck.com</p>
                  <h2>
                     Win Your <br /> Dreamwatch
                  </h2>
                  <button className="btn btn-primary">Enter Competition</button>
               </div>
               <div className={styles.card}>
                  <Image src="/assets/image3.png" width="172" height="272"></Image>
                  <div className={styles.timer}>
                     <div>
                        <p>1</p>
                        <p>day</p>
                     </div>
                     <span></span>
                     <div>
                        <p>20</p>
                        <p>hours</p>
                     </div>
                     <span></span>
                     <div>
                        <p>28</p>
                        <p>minutes</p>
                     </div>
                     <span></span>
                     <div>
                        <p>23</p>
                        <p>seconds</p>
                     </div>
                  </div>
                  <h2>Rolex Submariner 116623lb</h2>
                  <button className="btn btn-ghost px-0 border-0">
                     Enter Competition
                     <span className="ps-2">
                        <svg width="41" height="11" viewBox="0 0 41 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M0.855469 4.94014C0.468869 4.94014 0.155469 5.25354 0.155469 5.64014C0.155469 6.02674 0.468869 6.34014 0.855469 6.34014L0.855469 4.94014ZM40.1195 6.13511C40.3929 5.86175 40.3929 5.41853 40.1195 5.14517L35.6647 0.690392C35.3913 0.417025 34.9481 0.417025 34.6748 0.690392C34.4014 0.963759 34.4014 1.40697 34.6748 1.68034L38.6346 5.64014L34.6748 9.59994C34.4014 9.8733 34.4014 10.3165 34.6748 10.5899C34.9481 10.8633 35.3913 10.8633 35.6647 10.5899L40.1195 6.13511ZM0.855469 6.34014L39.6245 6.34014L39.6245 4.94014L0.855469 4.94014L0.855469 6.34014Z"
                              fill="#313131"
                           />
                        </svg>
                     </span>
                  </button>
               </div>
               <div>
                  {/* <Image src="/assets/mark.png" layout="fill"></Image> */}
                  <svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M10.5059 18.5226L11.2073 17.8212L17.8208 21.629L14.2134 14.815L14.9149 14.1136L21.7288 17.721L18.0212 11.1074L18.7227 10.406L22.8311 18.1218L22.1296 18.8232L15.5161 15.3161L18.9231 22.0298L18.2216 22.7312L10.5059 18.5226Z"
                        fill="#003A0D"
                     />
                     <path
                        d="M29.4447 11.3082L25.9375 13.3123L26.2381 15.4166L25.4365 15.9176L24.1338 7.19976L25.0356 6.69873L32.05 12.21L31.1481 12.711L29.4447 11.3082ZM25.1358 7.80099L25.9375 12.6108L28.9436 10.8071L25.1358 7.80099Z"
                        fill="#003A0D"
                     />
                     <path d="M30.1465 3.89267L35.6578 1.98877L35.8582 2.6902L33.5535 3.49185L36.1588 10.8068L35.3571 11.1074L32.7518 3.79246L30.4471 4.5941L30.1465 3.89267Z" fill="#003A0D" />
                     <path
                        d="M42.8725 0.485885C44.8766 0.18527 46.4799 0.986911 47.2815 2.48999L46.2795 2.59019C45.6782 1.58814 44.4758 0.986911 42.9727 1.18732C41.0688 1.38773 39.7661 2.99101 39.9666 5.19552C40.2672 7.40003 41.8705 8.50229 43.8746 8.30188C45.3776 8.10147 46.2795 7.29983 46.6803 6.09737L47.6823 5.99716C47.2815 7.70065 45.8787 8.8029 43.9748 9.00331C41.5698 9.30393 39.4655 7.80085 39.0647 5.29573C38.6639 2.7906 40.4676 0.786501 42.8725 0.485885Z"
                        fill="#003A0D"
                     />
                     <path
                        d="M56.0998 5.09521L51.29 4.59419L50.8892 8.50218L49.9873 8.40198L50.8892 0.0849609L51.791 0.185166L51.3902 3.89275L56.2 4.39378L56.6008 0.686191L57.5027 0.786396L56.6008 9.10342L55.699 9.00321L56.0998 5.09521Z"
                        fill="#003A0D"
                     />
                     <path d="M65.2184 2.69043L66.1203 3.09125L66.6213 8.1015L70.4291 4.99515L71.3309 5.39597L66.7215 9.00335L65.4188 12.0095L64.6172 11.7089L65.9198 8.70273L65.2184 2.69043Z" fill="#003A0D" />
                     <path
                        d="M72.6331 16.1177C70.629 14.7149 70.0278 12.1095 71.5309 10.1054C73.0339 8.10133 75.5391 7.70051 77.6434 9.20358C79.6475 10.7067 80.2487 13.2118 78.7456 15.2159C77.2425 17.22 74.6372 17.6208 72.6331 16.1177ZM73.0339 15.5165C74.6372 16.6188 76.6413 16.4183 77.944 14.6147C79.2466 12.811 78.7456 10.8069 77.1423 9.70461C75.5391 8.60235 73.5349 8.80276 72.2323 10.6065C71.0298 12.4101 71.4306 14.4142 73.0339 15.5165Z"
                        fill="#003A0D"
                     />
                     <path
                        d="M83.8564 14.314L84.4576 15.0154L80.4494 18.5226C79.1467 19.725 79.2469 20.8273 80.1488 21.9295C81.0506 22.9316 82.2531 23.2322 83.5558 22.0298L87.564 18.5226L88.1652 19.224L84.157 22.7312C82.4535 24.2343 80.8502 23.7332 79.6478 22.4306C78.4453 21.0277 78.2449 19.3242 79.9484 17.9213L83.8564 14.314Z"
                        fill="#003A0D"
                     />
                     <path
                        d="M91.6723 24.7355C92.6744 26.5392 92.2736 27.942 91.0711 28.5433C90.069 29.1445 88.8666 29.0443 87.8645 27.8418L85.8604 31.6496L85.3594 30.7478L87.2633 27.0402L86.4617 25.6373L83.4555 27.3408L83.0547 26.5392L90.3697 22.3306L91.6723 24.7355ZM91.0711 25.1363L90.1692 23.6332L87.1631 25.3367L88.0649 26.94C88.7664 28.2427 89.7684 28.3429 90.6703 27.8418C91.5721 27.2406 91.7725 26.439 91.0711 25.1363Z"
                        fill="#003A0D"
                     />
                     <path d="M96.3824 35.9584L88.8671 37.8623L89.6687 40.9686L89.0675 41.169L88.0654 37.261L96.182 35.1567L96.3824 35.9584Z" fill="#003A0D" />
                     <path
                        d="M97.7846 41.9707L97.8849 42.8726L92.574 43.2734C90.8705 43.3736 90.1691 44.4758 90.2693 45.7785C90.3695 47.1814 91.1711 48.0832 92.8746 47.8828L98.1855 47.482L98.2857 48.3838L92.9748 48.7846C90.7703 48.9851 89.668 47.5822 89.5678 45.7785C89.4676 43.9748 90.2693 42.4717 92.4738 42.2713L97.7846 41.9707Z"
                        fill="#003A0D"
                     />
                     <path
                        d="M97.6851 56.5005C97.3845 58.5046 96.2823 59.8073 94.5788 60.2081L94.7792 59.2061C95.9816 58.9054 96.7833 57.9034 96.9837 56.4003C97.2843 54.4964 96.1821 52.7929 93.9775 52.4923C91.773 52.1917 90.27 53.4944 89.9693 55.3983C89.7689 56.9013 90.27 58.0036 91.272 58.705L91.0716 59.7071C89.6687 58.8052 88.9673 57.202 89.2679 55.1979C89.6687 52.7929 91.6728 51.1896 94.178 51.4903C96.5829 51.8911 98.086 53.9954 97.6851 56.5005Z"
                        fill="#003A0D"
                     />
                     <path d="M91.372 63.4147L87.7646 62.0118L88.0652 61.2102L95.8812 64.2164L95.5806 65.018L91.873 63.6151L94.1778 68.6254L93.7769 69.7276L91.372 64.3166L85.9609 66.7215L86.3618 65.6192L91.372 63.4147Z" fill="#003A0D" />
                     <path
                        d="M87.3633 80.3492L86.6619 81.0507L80.0483 77.1427L83.5555 84.0568L82.8541 84.7583L76.1403 81.0507L79.7477 87.7644L79.0463 88.4658L75.0381 80.6499L75.7395 79.9484L82.3531 83.5558L79.0463 76.8421L79.7477 76.1406L87.3633 80.3492Z"
                        fill="#003A0D"
                     />
                     <path
                        d="M68.3245 87.2632L71.8316 85.2591L71.531 83.1548L72.3327 82.6538L73.6353 91.4718L72.7335 91.9729L65.8193 86.3614L66.621 85.8604L68.3245 87.2632ZM72.7335 90.7704L72.0321 85.9606L68.9257 87.6641L72.7335 90.7704Z"
                        fill="#003A0D"
                     />
                     <path d="M67.5228 94.6784L62.0116 96.5823L61.8111 95.8808L64.1159 95.0792L61.7109 87.7642L62.5126 87.4636L64.9175 94.7786L67.3224 93.977L67.5228 94.6784Z" fill="#003A0D" />
                     <path
                        d="M54.7971 97.8851C52.793 98.0855 51.29 97.384 50.3881 95.7808L51.3902 95.6806C51.9914 96.7828 53.0937 97.2838 54.5967 97.1836C56.5006 96.9832 57.9035 95.4802 57.6029 93.2756C57.3023 91.0711 55.699 89.9689 53.7951 90.1693C52.292 90.3697 51.29 91.1713 50.9894 92.2736L49.9873 92.3738C50.4883 90.7705 51.791 89.6683 53.7951 89.3676C56.3002 89.067 58.3043 90.5701 58.6049 93.0752C58.9056 95.6806 57.2021 97.5845 54.7971 97.8851Z"
                        fill="#003A0D"
                     />
                     <path d="M41.6705 93.075L46.4803 93.576L46.8811 89.668L47.783 89.7682L46.7809 98.0852L45.8791 97.985L46.2799 94.2774L41.47 93.7764L41.1694 97.5842L40.2676 97.484L41.2696 89.167L42.1715 89.2672L41.6705 93.075Z" fill="#003A0D" />
                     <path d="M32.4514 95.3799L31.5495 94.9791L31.1487 90.069L27.2407 93.1754L26.3389 92.7746L31.0485 89.2674L32.3512 86.2612L33.1528 86.6621L31.8501 89.6682L32.4514 95.3799Z" fill="#003A0D" />
                     <path
                        d="M25.337 81.8525C27.3411 83.3556 27.8422 85.8607 26.3391 87.965C24.836 89.9691 22.2307 90.2697 20.2266 88.8669C18.2225 87.3638 17.7215 84.8587 19.2245 82.7544C20.7276 80.65 23.2327 80.3494 25.337 81.8525ZM24.836 82.4537C23.2327 81.2513 21.2286 81.4517 19.926 83.2554C18.6233 85.0591 19.0241 87.0632 20.6274 88.1654C22.2307 89.3679 24.2348 89.1675 25.5375 87.3638C26.8401 85.5601 26.4393 83.6562 24.836 82.4537Z"
                        fill="#003A0D"
                     />
                     <path
                        d="M14.1135 83.4557L13.5123 82.7542L17.5205 79.3473C18.8231 78.245 18.7229 77.0426 17.8211 75.9403C16.9192 74.838 15.7168 74.6376 14.4141 75.7399L10.4059 79.1469L9.80469 78.4454L13.8129 75.0385C15.5164 73.6356 17.2199 74.0364 18.3221 75.4393C19.4244 76.8421 19.725 78.5456 18.0215 79.9485L14.1135 83.4557Z"
                        fill="#003A0D"
                     />
                     <path
                        d="M6.29729 72.934C5.29524 71.1303 5.79626 69.7274 6.99872 69.1262C8.00077 68.5249 9.20323 68.7253 10.2053 69.9278L12.2094 66.2202L12.7104 67.1221L10.7063 70.7294L11.5079 72.1323L14.6143 70.4288L15.0151 71.2305L7.59995 75.2387L6.29729 72.934ZM6.99872 72.6333L7.90057 74.2366L11.0069 72.5331L10.1051 70.9298C9.40364 69.6272 8.40159 69.4268 7.49975 69.9278C6.4977 70.4288 6.19708 71.2305 6.99872 72.6333Z"
                        fill="#003A0D"
                     />
                     <path d="M1.78809 61.7112L9.30346 59.8073L8.50182 56.7009L9.20326 56.5005L10.2053 60.5087L2.0887 62.5128L1.78809 61.7112Z" fill="#003A0D" />
                     <path
                        d="M0.485781 55.5985L0.385576 54.6967L5.69644 54.3961C7.39993 54.2959 8.10137 53.2938 8.00116 51.891C7.90096 50.4881 7.09931 49.5862 5.39583 49.6864L0.0849609 49.9871L0.0849609 49.1854L5.39583 48.8848C7.60034 48.7846 8.70259 50.0873 8.8028 51.891C8.90301 53.6946 8.00116 55.1977 5.79665 55.2979L0.485781 55.5985Z"
                        fill="#003A0D"
                     />
                     <path
                        d="M0.786548 41.1689C1.08716 39.1648 2.28962 37.8621 3.99311 37.5615L3.7927 38.5636C2.59024 38.8642 1.7886 39.766 1.48798 41.2691C1.18737 43.173 2.28962 44.8765 4.49414 45.2773C6.69865 45.6781 8.20172 44.3755 8.50234 42.4716C8.70275 40.9685 8.20172 39.8662 7.19967 39.1648L7.40008 38.1628C8.90316 39.0646 9.50439 40.6679 9.20377 42.672C8.80295 45.0769 6.79885 46.6802 4.29372 46.2794C1.7886 45.6781 0.385728 43.5738 0.786548 41.1689Z"
                        fill="#003A0D"
                     />
                     <path d="M7.19966 34.3552L10.807 35.758L10.5064 36.5597L2.69043 33.4533L2.99105 32.6517L6.69863 34.1547L4.49412 29.1445L4.89494 28.0422L7.29986 33.4533L12.8111 31.0484L12.2099 32.1506L7.19966 34.3552Z" fill="#003A0D" />
                     <path d="M87.2639 71.2307L87.8619 72.6368L89.268 73.2348L87.8619 73.8328L87.2639 75.2389L86.6658 73.8328L85.2598 73.2348L86.6658 72.6368L87.2639 71.2307Z" fill="#DBA842" />
                     <path d="M11.1076 23.1323L11.7056 24.5384L13.1117 25.1364L11.7056 25.7344L11.1076 27.1405L10.5096 25.7344L9.10352 25.1364L10.5096 24.5384L11.1076 23.1323Z" fill="#DBA842" />
                     <circle cx="49.4088" cy="49.3985" r="25.8424" fill="#1C5E3C" />
                     <path
                        d="M48.5492 63.0098C48.9006 63.3613 49.4705 63.3613 49.8219 63.0098L55.5495 57.2822C55.901 56.9308 55.901 56.3609 55.5495 56.0094C55.198 55.658 54.6282 55.658 54.2767 56.0094L49.1855 61.1006L44.0944 56.0094C43.7429 55.658 43.1731 55.658 42.8216 56.0094C42.4701 56.3609 42.4701 56.9308 42.8216 57.2822L48.5492 63.0098ZM48.2855 36.7539L48.2855 62.3734L50.0855 62.3734L50.0855 36.7539L48.2855 36.7539Z"
                        fill="white"
                     />
                  </svg>
               </div>
            </div>
            <div>
               <div className={`${styles.card} ${styles.cardTwo}`}>
                  <Image src="/assets/image5.png" width="172" height="272"></Image>
                  <div className={styles.timer}>
                     <div>
                        <p>1</p>
                        <p>day</p>
                     </div>
                     <span></span>
                     <div>
                        <p>20</p>
                        <p>hours</p>
                     </div>
                     <span></span>
                     <div>
                        <p>28</p>
                        <p>minutes</p>
                     </div>
                     <span></span>
                     <div>
                        <p>23</p>
                        <p>seconds</p>
                     </div>
                  </div>
                  <h2>Rolex Yacht-master 42</h2>
                  <button className="btn btn-ghost px-0 border-0">
                     Enter Competition
                     <span className="ps-2">
                        <svg width="41" height="11" viewBox="0 0 41 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M0.855469 4.94014C0.468869 4.94014 0.155469 5.25354 0.155469 5.64014C0.155469 6.02674 0.468869 6.34014 0.855469 6.34014L0.855469 4.94014ZM40.1195 6.13511C40.3929 5.86175 40.3929 5.41853 40.1195 5.14517L35.6647 0.690392C35.3913 0.417025 34.9481 0.417025 34.6748 0.690392C34.4014 0.963759 34.4014 1.40697 34.6748 1.68034L38.6346 5.64014L34.6748 9.59994C34.4014 9.8733 34.4014 10.3165 34.6748 10.5899C34.9481 10.8633 35.3913 10.8633 35.6647 10.5899L40.1195 6.13511ZM0.855469 6.34014L39.6245 6.34014L39.6245 4.94014L0.855469 4.94014L0.855469 6.34014Z"
                              fill="#313131"
                           />
                        </svg>
                     </span>
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};