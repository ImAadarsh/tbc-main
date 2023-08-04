import MidZipRow from "./components/MidZipRow";
import Style from "./how-it-works.module.css";

export default function how() {
    return (
        <>
            <div className={Style.how}>
                <div className={Style.background_set}>
                    <img src="/dish_7.svg" alt="dish" />
                </div>
            </div>
            <div id="how_it_work" className={Style.how_it_work}>
                    <div className={Style.how_it_work_top}>
                        <h1>How it works</h1>
                    </div>
                    <div className={Style.how_it_work_cards}>
                        <div style={{marginLeft: "-20rem"}} className={Style.how_it_work_card}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="157"
                                height="157"
                                viewBox="0 0 157 157"
                                fill="none"
                            >
                                <path
                                    d="M78.2538 156.508C121.472 156.508 156.508 121.472 156.508 78.2538C156.508 35.0354 121.472 0 78.2538 0C35.0354 0 0 35.0354 0 78.2538C0 121.472 35.0354 156.508 78.2538 156.508Z"
                                    fill="#32E0FB"
                                    fillOpacity="0.1"
                                />
                                <path
                                    d="M86.469 38.8864C86.3324 38.853 86.1958 38.8257 86.0592 38.7984L85.5705 38.7012C85.4066 38.6688 85.2427 38.6385 85.0787 38.6102L84.587 38.5252L84.1134 38.4493L83.5913 38.3734C83.4547 38.3521 83.3181 38.3339 83.1785 38.3187L82.8324 38.2762L82.3042 38.2155L81.773 38.1609C81.4178 38.1275 81.0627 38.1002 80.7045 38.0759C80.1672 38.0395 79.6299 38.0152 79.0865 38C78.9408 38 78.783 38 78.6464 38H77.9998C67.3912 38 57.2171 42.2143 49.7157 49.7157C42.2143 57.2172 38 67.3913 38 78C38 88.6087 42.2143 98.7828 49.7157 106.284C57.2171 113.786 67.3912 118 77.9998 118H78.6464H79.0865C79.6299 117.985 80.1672 117.961 80.7045 117.924C81.0627 117.9 81.4178 117.873 81.773 117.839L82.3042 117.784L82.8324 117.724L83.1785 117.681C83.3181 117.666 83.4547 117.648 83.5913 117.627L84.1134 117.551L84.587 117.475C84.9148 117.42 85.2427 117.363 85.5705 117.299L86.0592 117.202C86.1958 117.174 86.3324 117.147 86.469 117.114C95.4001 115.178 103.399 110.243 109.136 103.13C114.873 96.0166 118.002 87.1536 118.002 78.0152C118.002 68.8768 114.873 60.0138 109.136 52.9005C103.399 45.7871 95.4001 40.8523 86.469 38.9167V38.8864ZM64.3883 77.9848C64.3877 75.2926 65.1855 72.6606 66.6807 70.4218C68.176 68.183 70.3016 66.4379 72.7888 65.4072C75.2759 64.3765 78.0128 64.1065 80.6534 64.6314C83.294 65.1562 85.7196 66.4524 87.6235 68.3559C89.5274 70.2594 90.8241 72.6847 91.3495 75.3252C91.875 77.9656 91.6056 80.7026 90.5755 83.19C89.5453 85.6774 87.8007 87.8034 85.5623 89.2992C83.3238 90.795 80.692 91.5934 77.9998 91.5934C76.2124 91.5938 74.4425 91.2421 72.7911 90.5584C71.1397 89.8746 69.6392 88.8723 68.3752 87.6086C67.1112 86.3449 66.1085 84.8446 65.4244 83.1933C64.7404 81.542 64.3883 79.7722 64.3883 77.9848Z"
                                    fill="#32E0FB"
                                />
                                <path
                                    d="M109.06 65.12C107.451 61.2435 101.996 59.829 99.0762 56.9087C96.156 53.9885 94.7414 48.5335 90.865 46.9247C87.1282 45.3735 82.2986 48.1784 78.0002 48.1784C75.42 48.1784 72.6485 47.1675 70.0348 46.697C68.2955 46.3934 66.6259 46.3054 65.1324 46.9247C61.256 48.5335 59.8444 53.9854 56.9363 56.9087C54.0283 59.832 48.5612 61.2435 46.9523 65.12C45.389 68.8568 48.203 73.6834 48.203 77.9848C48.203 82.2863 45.3981 87.1129 46.9463 90.8497C48.5551 94.7261 54.0131 96.1407 56.9303 99.0458C59.8475 101.951 61.256 107.436 65.1324 109.033C66.6259 109.64 68.2955 109.576 70.0379 109.261C72.6485 108.787 75.42 107.776 78.0002 107.776C82.2986 107.776 87.1282 110.584 90.865 109.033C94.7414 107.424 96.1529 101.969 99.0762 99.0488C101.999 96.1286 107.451 94.714 109.06 90.8527C110.608 87.1159 107.807 82.2863 107.807 77.9879C107.807 73.6895 110.608 68.8568 109.06 65.12ZM78.0002 91.5934C75.3088 91.5928 72.6781 90.7942 70.4406 89.2985C68.2031 87.8028 66.4593 85.6772 65.4298 83.1905C64.4002 80.7038 64.1312 77.9677 64.6566 75.3281C65.182 72.6885 66.4784 70.264 68.3817 68.3611C70.285 66.4582 72.7098 65.1624 75.3495 64.6375C77.9892 64.1127 80.7252 64.3824 83.2117 65.4125C85.6981 66.4425 87.8233 68.1868 89.3185 70.4246C90.8137 72.6625 91.6117 75.2934 91.6117 77.9848C91.6109 81.5943 90.1765 85.0557 87.6239 87.6077C85.0714 90.1597 81.6097 91.5934 78.0002 91.5934Z"
                                    fill="#FF1569"
                                />
                                <path
                                    d="M54.1312 67.709H54.1281C53.0736 67.709 52.2188 68.5638 52.2188 69.6184V72.2563C52.2188 73.3108 53.0736 74.1657 54.1281 74.1657H54.1312C55.1857 74.1657 56.0405 73.3108 56.0405 72.2563V69.6184C56.0405 68.5638 55.1857 67.709 54.1312 67.709Z"
                                    fill="#249FB2"
                                />
                                <path
                                    d="M74.4465 52.4156L74.4439 52.4171C73.5364 52.9542 73.2362 54.1253 73.7733 55.0328L75.1169 57.3029C75.654 58.2104 76.8251 58.5106 77.7326 57.9735L77.7352 57.972C78.6427 57.4349 78.9429 56.2638 78.4058 55.3563L77.0622 53.0862C76.5251 52.1787 75.354 51.8785 74.4465 52.4156Z"
                                    fill="#155E69"
                                />
                                <path
                                    d="M67.1077 95.4395H67.1047C66.0502 95.4395 65.1953 96.2943 65.1953 97.3488V99.9868C65.1953 101.041 66.0502 101.896 67.1047 101.896H67.1077C68.1622 101.896 69.0171 101.041 69.0171 99.9868V97.3488C69.0171 96.2943 68.1622 95.4395 67.1077 95.4395Z"
                                    fill="#155E69"
                                />
                                <path
                                    d="M88.014 51.9678H88.0109C86.9564 51.9678 86.1016 52.8226 86.1016 53.8772V56.5151C86.1016 57.5696 86.9564 58.4245 88.0109 58.4245H88.014C89.0685 58.4245 89.9234 57.5696 89.9234 56.5151V53.8772C89.9234 52.8226 89.0685 51.9678 88.014 51.9678Z"
                                    fill="#249FB2"
                                />
                                <path
                                    d="M95.7044 85.8968L95.7029 85.8995C95.1896 86.8206 95.5202 87.9835 96.4413 88.4969L98.7456 89.781C99.6667 90.2943 100.83 89.9637 101.343 89.0426L101.344 89.0399C101.858 88.1188 101.527 86.9559 100.606 86.4426L98.3017 85.1584C97.3806 84.6451 96.2177 84.9757 95.7044 85.8968Z"
                                    fill="#249FB2"
                                />
                                <path
                                    d="M60.469 83.4754L60.4671 83.4731C59.8068 82.6509 58.605 82.5197 57.7828 83.18L55.7261 84.8319C54.9039 85.4922 54.7727 86.694 55.4331 87.5162L55.435 87.5186C56.0953 88.3408 57.2971 88.472 58.1193 87.8116L60.176 86.1598C60.9982 85.4994 61.1294 84.2976 60.469 83.4754Z"
                                    fill="#76EAFC"
                                />
                                <path
                                    d="M93.4729 96.6512L93.471 96.6488C92.8107 95.8267 91.6089 95.6955 90.7867 96.3558L88.73 98.0077C87.9078 98.668 87.7767 99.8698 88.437 100.692L88.4389 100.694C89.0992 101.517 90.301 101.648 91.1232 100.987L93.1799 99.3355C94.0021 98.6752 94.1333 97.4734 93.4729 96.6512Z"
                                    fill="#76EAFC"
                                />
                                <path
                                    d="M67.7132 59.1356L67.7113 59.1332C67.0509 58.311 65.8491 58.1798 65.0269 58.8402L62.9703 60.492C62.1481 61.1524 62.0169 62.3542 62.6772 63.1764L62.6791 63.1787C63.3395 64.0009 64.5413 64.1321 65.3634 63.4718L67.4201 61.8199C68.2423 61.1596 68.3735 59.9578 67.7132 59.1356Z"
                                    fill="#A1F1FD"
                                />
                                <path
                                    d="M101.803 72.9322L101.8 72.9313C100.794 72.6149 99.722 73.1739 99.4056 74.1798L98.6141 76.6962C98.2977 77.7021 98.8567 78.7741 99.8627 79.0905L99.8656 79.0914C100.871 79.4078 101.943 78.8488 102.26 77.8429L103.051 75.3265C103.368 74.3206 102.809 73.2486 101.803 72.9322Z"
                                    fill="#155E69"
                                />
                                <path
                                    d="M80.4591 97.1695L80.4562 97.1686C79.4502 96.8522 78.3783 97.4112 78.0619 98.4171L77.2704 100.934C76.954 101.939 77.513 103.011 78.5189 103.328L78.5218 103.329C79.5277 103.645 80.5997 103.086 80.9161 102.08L81.7076 99.5638C82.024 98.5579 81.465 97.4859 80.4591 97.1695Z"
                                    fill="#A1F1FD"
                                />
                                <path
                                    d="M98.2238 63.7033L98.2225 63.7006C97.7739 62.7463 96.6365 62.3364 95.6822 62.785L93.295 63.9074C92.3407 64.356 91.9307 65.4934 92.3794 66.4477L92.3807 66.4504C92.8293 67.4048 93.9667 67.8147 94.921 67.366L97.3082 66.2437C98.2626 65.795 98.6725 64.6577 98.2238 63.7033Z"
                                    fill="#A1F1FD"
                                />
                            </svg>
                            <div className={Style.how_it_work_bottom_set}>
                                <h3>Pick your Cravings</h3>
                                <p>
                                    Choose your cravings as per your mood from the
                                    listed categories
                                </p>
                            </div>
                        </div>
                        <div style={{marginLeft: "0rem"}} className={Style.how_it_work_card}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="157"
                                height="157"
                                viewBox="0 0 157 157"
                                fill="none"
                            >
                                <path
                                    d="M78.2538 156.508C121.472 156.508 156.508 121.472 156.508 78.2538C156.508 35.0354 121.472 0 78.2538 0C35.0354 0 0 35.0354 0 78.2538C0 121.472 35.0354 156.508 78.2538 156.508Z"
                                    fill="#32E0FB"
                                    fillOpacity="0.1"
                                />
                                <path
                                    d="M52.2129 83.3285C52.2096 88.0196 53.5369 92.6154 56.0406 96.5824C58.5443 100.549 62.1219 103.725 66.3579 105.741C70.5939 107.756 75.3147 108.529 79.9723 107.969C84.6298 107.409 89.0331 105.54 92.6709 102.578L77.0555 86.3238V58.5284C73.7952 58.5228 70.5657 59.1601 67.5519 60.4039C64.5381 61.6477 61.7991 63.4736 59.4917 65.7771C57.1843 68.0805 55.3538 70.8164 54.1048 73.828C52.8558 76.8397 52.2129 80.0681 52.2129 83.3285Z"
                                    fill="#FF1569"
                                    stroke="#32E0FB"
                                    strokeWidth="0.844623"
                                    strokemterlimit="10"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M87.2779 38H65.0402V44.8424H87.2779V38ZM99.0786 55.7242C97.4369 54.4792 95.6827 53.3798 93.835 52.4418C89.3614 50.1707 84.4474 48.8998 79.4337 48.7172H78.723V44.844L72.7395 44.8724V49.0459C74.2965 48.8296 75.8664 48.7205 77.4383 48.7194H78.0112C69.5527 48.8741 61.4628 52.1174 55.2507 57.805C55.2913 57.1699 55.3943 56.6071 55.7416 56.3283C55.5703 55.4956 55.1763 54.7251 54.6017 54.0987C54.027 53.4723 53.2931 53.0135 52.4783 52.7712C51.6635 52.529 50.7982 52.5123 49.9747 52.723C49.1511 52.9337 48.4002 53.3638 47.8018 53.9676C47.2034 54.5714 46.78 55.3262 46.5767 56.1516C46.3735 56.977 46.3979 57.8421 46.6475 58.6547C46.897 59.4673 47.3624 60.197 47.9939 60.7661C48.6255 61.3351 49.3995 61.7221 50.2337 61.8859C50.5979 61.9575 50.9989 61.9741 51.4116 61.9431C46.6332 68.0192 44 75.5545 44 83.3586C44 92.4611 47.5823 101.198 53.9725 107.68C60.3627 114.163 69.0474 117.87 78.1489 118C84.6502 117.997 91.0194 116.164 96.528 112.712C102.037 109.259 106.462 104.326 109.299 98.4759C112.136 92.6262 113.269 86.0962 112.569 79.6327C111.869 73.1692 109.364 67.0332 105.341 61.9264V61.8696C105.293 61.8085 105.244 61.7474 105.196 61.6866C105.725 61.4761 106.214 61.1706 106.636 60.7837C107.206 60.2627 107.638 59.6098 107.896 58.8825H107.932C108.138 58.3009 108.228 57.6843 108.196 57.0679C108.165 56.4515 108.012 55.8474 107.746 55.2902C107.481 54.7329 107.109 54.2333 106.65 53.82C106.192 53.4067 105.657 53.0877 105.075 52.8812C104.493 52.6747 103.877 52.5849 103.26 52.6167C102.644 52.6485 102.04 52.8015 101.483 53.0668C100.925 53.332 100.426 53.7045 100.012 54.1628C99.6024 54.6175 99.2852 55.1479 99.0786 55.7242ZM78.1489 111.981C72.4817 111.981 66.9417 110.3 62.2295 107.152C57.5174 104.003 53.8447 99.5281 51.6759 94.2922C49.5072 89.0563 48.9397 83.2949 50.0453 77.7365C51.1509 72.1781 53.88 67.0724 57.8874 63.065C61.8947 59.0576 67.0004 56.3286 72.5588 55.2229C78.1171 54.1173 83.8786 54.6848 89.1144 56.8535C94.3503 59.0223 98.8255 62.695 101.974 67.4072C105.123 72.1194 106.803 77.6594 106.803 83.3267C106.804 87.0899 106.064 90.8164 104.624 94.2933C103.184 97.7702 101.074 100.929 98.4126 103.59C95.7516 106.251 92.5924 108.362 89.1155 109.802C85.6386 111.241 81.9121 111.982 78.1489 111.981Z"
                                    fill="#32E0FB"
                                />
                                <path
                                    d="M65.0402 38V37.5777H64.6179V38H65.0402ZM87.2779 38H87.7002V37.5777H87.2779V38ZM65.0402 44.8424H64.6179V45.2647H65.0402V44.8424ZM87.2779 44.8424V45.2647H87.7002V44.8424H87.2779ZM93.835 52.4418L93.6438 52.8184L93.835 52.4418ZM99.0786 55.7242L98.8234 56.0607L99.282 56.4084L99.4762 55.8667L99.0786 55.7242ZM79.4337 48.7172L79.449 48.2952L79.4413 48.2949H79.4337V48.7172ZM78.723 48.7172H78.3007V49.1395H78.723V48.7172ZM78.723 44.844H79.1453V44.4197L78.721 44.4217L78.723 44.844ZM72.7395 44.8724L72.7375 44.45L72.3172 44.452V44.8724H72.7395ZM72.7395 49.0459H72.3172V49.531L72.7977 49.4642L72.7395 49.0459ZM77.4383 48.7194V48.2971H77.438L77.4383 48.7194ZM78.0112 48.7194L78.0189 49.1417L78.0112 48.2971V48.7194ZM55.2507 57.805L54.8292 57.7781L54.7624 58.8247L55.5359 58.1165L55.2507 57.805ZM55.7416 56.3283L56.006 56.6576L56.2073 56.496L56.1553 56.2432L55.7416 56.3283ZM54.6017 54.0987L54.2905 54.3842L54.6017 54.0987ZM52.4783 52.7712L52.5987 52.3664L52.4783 52.7712ZM49.9747 52.723L50.0793 53.1321H50.0793L49.9747 52.723ZM47.8018 53.9676L48.1017 54.2649L47.8018 53.9676ZM46.6475 58.6547L46.2438 58.7787H46.2438L46.6475 58.6547ZM47.9939 60.7661L47.7112 61.0798L47.9939 60.7661ZM50.2337 61.8859L50.315 61.4716H50.315L50.2337 61.8859ZM51.4116 61.9431L51.7435 62.2041L52.3367 61.4499L51.3798 61.5219L51.4116 61.9431ZM53.9725 107.68L54.2733 107.384L53.9725 107.68ZM78.1489 118L78.1429 118.422L78.1491 118.422L78.1489 118ZM96.528 112.712L96.7523 113.07H96.7523L96.528 112.712ZM109.299 98.4759L109.679 98.6602L109.299 98.4759ZM105.341 61.9264H104.919V62.0728L105.009 62.1878L105.341 61.9264ZM105.341 61.8696H105.763V61.7232L105.673 61.6082L105.341 61.8696ZM105.196 61.6866L105.04 61.2942L104.51 61.5049L104.866 61.9503L105.196 61.6866ZM106.636 60.7837L106.922 61.0953L106.636 60.7837ZM107.896 58.8825V58.4602H107.598L107.498 58.7413L107.896 58.8825ZM107.932 58.8825V59.3048H108.23L108.33 59.0238L107.932 58.8825ZM108.196 57.0679L107.775 57.0897V57.0897L108.196 57.0679ZM107.746 55.2902L107.365 55.4717V55.4717L107.746 55.2902ZM106.65 53.82L106.367 54.1336L106.65 53.82ZM105.075 52.8812L104.934 53.2792H104.934L105.075 52.8812ZM101.483 53.0668L101.301 52.6854V52.6854L101.483 53.0668ZM100.012 54.1628L99.6988 53.88V53.88L100.012 54.1628ZM62.2295 107.152L62.4641 106.801L62.2295 107.152ZM78.1489 111.981L78.149 111.559H78.1489V111.981ZM50.0453 77.7365L49.6311 77.6541L50.0453 77.7365ZM57.8874 63.065L57.5887 62.7664L57.8874 63.065ZM72.5588 55.2229L72.6412 55.6371H72.6412L72.5588 55.2229ZM101.974 67.4072L101.623 67.6418L101.974 67.4072ZM106.803 83.3267H106.381V83.3268L106.803 83.3267ZM104.624 94.2933L104.234 94.1317L104.624 94.2933ZM98.4126 103.59L98.114 103.292H98.114L98.4126 103.59ZM89.1155 109.802L88.954 109.412L89.1155 109.802ZM65.0402 38.4223H87.2779V37.5777H65.0402V38.4223ZM65.4625 44.8424V38H64.6179V44.8424H65.4625ZM87.2779 44.4201H65.0402V45.2647H87.2779V44.4201ZM86.8556 38V44.8424H87.7002V38H86.8556ZM93.6438 52.8184C95.4689 53.745 97.2018 54.8309 98.8234 56.0607L99.3338 55.3877C97.6721 54.1275 95.8964 53.0147 94.0262 52.0653L93.6438 52.8184ZM79.4183 49.1392C84.3708 49.3196 89.2248 50.575 93.6438 52.8184L94.0262 52.0653C89.498 49.7664 84.524 48.48 79.449 48.2952L79.4183 49.1392ZM78.723 49.1395H79.4337V48.2949H78.723V49.1395ZM78.3007 44.844V48.7172H79.1453V44.844H78.3007ZM72.7415 45.2947L78.725 45.2663L78.721 44.4217L72.7375 44.45L72.7415 45.2947ZM73.1618 49.0459V44.8724H72.3172V49.0459H73.1618ZM77.438 48.2971C75.8468 48.2982 74.2575 48.4086 72.6814 48.6276L72.7977 49.4642C74.3354 49.2505 75.886 49.1428 77.4386 49.1418L77.438 48.2971ZM78.0112 48.2971H77.4383V49.1418H78.0112V48.2971ZM55.5359 58.1165C61.6723 52.4982 69.6636 49.2945 78.0189 49.1417L78.0035 48.2972C69.4419 48.4538 61.2534 51.7365 54.9655 57.4935L55.5359 58.1165ZM55.4772 55.999C55.2099 56.2136 55.0627 56.5161 54.9757 56.8149C54.8884 57.1147 54.8502 57.4507 54.8292 57.7781L55.6721 57.8319C55.6918 57.5241 55.7254 57.2613 55.7866 57.0511C55.8481 56.8401 55.9261 56.7218 56.006 56.6576L55.4772 55.999ZM54.2905 54.3842C54.8135 54.9543 55.172 55.6556 55.328 56.4134L56.1553 56.2432C55.9685 55.3357 55.5392 54.4959 54.9128 53.8132L54.2905 54.3842ZM52.358 53.176C53.0996 53.3965 53.7674 53.8141 54.2905 54.3842L54.9128 53.8132C54.2865 53.1305 53.4867 52.6305 52.5987 52.3664L52.358 53.176ZM50.0793 53.1321C50.8289 52.9404 51.6164 52.9556 52.358 53.176L52.5987 52.3664C51.7106 52.1024 50.7676 52.0842 49.87 52.3138L50.0793 53.1321ZM48.1017 54.2649C48.6463 53.7153 49.3298 53.3239 50.0793 53.1321L49.87 52.3138C48.9724 52.5435 48.154 53.0123 47.5018 53.6703L48.1017 54.2649ZM46.9868 56.2526C47.1718 55.5013 47.5571 54.8144 48.1017 54.2649L47.5018 53.6703C46.8496 54.3284 46.3882 55.151 46.1667 56.0506L46.9868 56.2526ZM47.0512 58.5307C46.824 57.7912 46.8018 57.0038 46.9868 56.2526L46.1667 56.0506C45.9451 56.9502 45.9718 57.8931 46.2438 58.7787L47.0512 58.5307ZM48.2766 60.4523C47.7018 59.9344 47.2783 59.2703 47.0512 58.5307L46.2438 58.7787C46.5158 59.6644 47.0229 60.4596 47.7112 61.0798L48.2766 60.4523ZM50.315 61.4716C49.5559 61.3224 48.8514 60.9702 48.2766 60.4523L47.7112 61.0798C48.3995 61.7 49.2432 62.1218 50.1523 62.3003L50.315 61.4716ZM51.3798 61.5219C50.9975 61.5507 50.6354 61.5345 50.315 61.4716L50.1523 62.3003C50.5605 62.3805 51.0003 62.3976 51.4433 62.3642L51.3798 61.5219ZM44.4223 83.3586C44.4223 75.6497 47.0234 68.2062 51.7435 62.2041L51.0796 61.682C46.243 67.8322 43.5777 75.4594 43.5777 83.3586H44.4223ZM54.2733 107.384C47.961 100.981 44.4223 92.3502 44.4223 83.3586H43.5777C43.5777 92.5721 47.2037 101.415 53.6718 107.977L54.2733 107.384ZM78.155 117.578C69.1644 117.449 60.5856 113.787 54.2733 107.384L53.6718 107.977C60.1399 114.538 68.9304 118.29 78.1429 118.422L78.155 117.578ZM96.3038 112.354C90.8622 115.764 84.5707 117.575 78.1487 117.578L78.1491 118.422C84.7296 118.419 91.1765 116.564 96.7523 113.07L96.3038 112.354ZM108.919 98.2917C106.117 104.07 101.745 108.943 96.3038 112.354L96.7523 113.07C102.328 109.575 106.808 104.581 109.679 98.6602L108.919 98.2917ZM112.149 79.6782C112.841 86.0629 111.721 92.5133 108.919 98.2917L109.679 98.6602C112.551 92.7392 113.698 86.1295 112.989 79.5873L112.149 79.6782ZM105.009 62.1878C108.984 67.2323 111.458 73.2935 112.149 79.6782L112.989 79.5873C112.28 73.045 109.745 66.8341 105.673 61.6651L105.009 62.1878ZM104.919 61.8696V61.9264H105.763V61.8696H104.919ZM104.866 61.9503C104.914 62.0104 104.962 62.0707 105.009 62.1311L105.673 61.6082C105.624 61.5462 105.575 61.4845 105.525 61.4229L104.866 61.9503ZM106.351 60.4722C105.966 60.8244 105.522 61.1025 105.04 61.2942L105.352 62.079C105.929 61.8496 106.461 61.5168 106.922 61.0953L106.351 60.4722ZM107.498 58.7413C107.263 59.4035 106.87 59.9978 106.351 60.4722L106.922 61.0953C107.542 60.5275 108.013 59.8162 108.294 59.0237L107.498 58.7413ZM107.932 58.4602H107.896V59.3048H107.932V58.4602ZM107.775 57.0897C107.804 57.6507 107.722 58.2119 107.534 58.7412L108.33 59.0238C108.555 58.3899 108.653 57.7179 108.618 57.0461L107.775 57.0897ZM107.365 55.4717C107.606 55.9789 107.746 56.5287 107.775 57.0897L108.618 57.0461C108.583 56.3743 108.417 55.716 108.128 55.1086L107.365 55.4717ZM106.367 54.1336C106.785 54.5098 107.124 54.9645 107.365 55.4717L108.128 55.1086C107.838 54.5013 107.433 53.9568 106.933 53.5064L106.367 54.1336ZM104.934 53.2792C105.463 53.4671 105.95 53.7574 106.367 54.1336L106.933 53.5064C106.433 53.0559 105.85 52.7082 105.216 52.4832L104.934 53.2792ZM103.282 53.0384C103.843 53.0095 104.404 53.0913 104.934 53.2792L105.216 52.4832C104.582 52.2582 103.91 52.1603 103.239 52.1949L103.282 53.0384ZM101.664 53.4481C102.171 53.2066 102.721 53.0674 103.282 53.0384L103.239 52.1949C102.567 52.2296 101.908 52.3963 101.301 52.6854L101.664 53.4481ZM100.326 54.4457C100.702 54.0285 101.157 53.6895 101.664 53.4481L101.301 52.6854C100.694 52.9746 100.149 53.3805 99.6988 53.88L100.326 54.4457ZM99.4762 55.8667C99.6642 55.3422 99.9529 54.8595 100.326 54.4457L99.6988 53.88C99.252 54.3756 98.9063 54.9536 98.6811 55.5817L99.4762 55.8667ZM61.9949 107.503C66.7765 110.698 72.3981 112.403 78.1489 112.403V111.559C72.5652 111.559 67.1068 109.903 62.4641 106.801L61.9949 107.503ZM51.2858 94.4538C53.4865 99.7669 57.2133 104.308 61.9949 107.503L62.4641 106.801C57.8214 103.699 54.2029 99.2893 52.0661 94.1306L51.2858 94.4538ZM49.6311 77.6541C48.5092 83.2944 49.085 89.1407 51.2858 94.4538L52.0661 94.1306C49.9293 88.9719 49.3702 83.2954 50.4595 77.8189L49.6311 77.6541ZM57.5887 62.7664C53.5223 66.8328 50.753 72.0138 49.6311 77.6541L50.4595 77.8189C51.5489 72.3424 54.2377 67.3119 58.186 63.3636L57.5887 62.7664ZM72.4764 54.8087C66.8361 55.9307 61.6552 58.7 57.5887 62.7664L58.186 63.3636C62.1343 59.4153 67.1647 56.7265 72.6412 55.6371L72.4764 54.8087ZM89.276 56.4634C83.963 54.2626 78.1167 53.6868 72.4764 54.8087L72.6412 55.6371C78.1176 54.5478 83.7941 55.1069 88.9528 57.2437L89.276 56.4634ZM102.325 67.1726C99.1302 62.3909 94.5891 58.6641 89.276 56.4634L88.9528 57.2437C94.1115 59.3805 98.5207 62.9991 101.623 67.6418L102.325 67.1726ZM107.225 83.3267C107.225 77.5759 105.52 71.9542 102.325 67.1726L101.623 67.6418C104.725 72.2845 106.381 77.7429 106.381 83.3267H107.225ZM105.014 94.4549C106.475 90.9267 107.226 87.1452 107.225 83.3266L106.381 83.3268C106.382 87.0345 105.652 90.7061 104.234 94.1317L105.014 94.4549ZM98.7112 103.889C101.411 101.189 103.553 97.983 105.014 94.4549L104.234 94.1317C102.815 97.5574 100.736 100.67 98.114 103.292L98.7112 103.889ZM89.2771 110.192C92.8053 108.731 96.011 106.589 98.7112 103.889L98.114 103.292C95.4922 105.914 92.3796 107.993 88.954 109.412L89.2771 110.192ZM78.1488 112.403C81.9675 112.404 85.7489 111.653 89.2771 110.192L88.954 109.412C85.5283 110.83 81.8568 111.56 78.149 111.559L78.1488 112.403Z"
                                    fill="#32E0FB"
                                />
                            </svg>
                            <div className={Style.how_it_work_bottom_set}>

                            <h3>On-demand instant delivery</h3>
                            <p>
                                Customers receive their cravings in less than 30
                                minutes and have the option to schedule an
                                order.
                            </p>
                            </div>
                        </div>
                        <div style={{marginLeft: "20rem"}} className={Style.how_it_work_card}>
                            <img style={{width: "7rem", height: "7rem"}} src="/smile.svg"/>
                            <div className={Style.how_it_work_bottom_set}>

                            <h3>Enjoy your cravings</h3>
                            <p>
                                High in quality and quantity. Enjoy these
                                cravings with your loved ones.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            <MidZipRow/>
        </>
    );
}
