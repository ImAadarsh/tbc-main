import Style from "./index.module.css";
import ItemCard from "../components/ItemCard";
import SpacePopup from "../components/SpacePopup";
import { useEffect, useState } from "react";

export default function Items() {
    const [filterShow, setFilterShow] = useState(false);
    const [filterUnderShow, setFilterUnderShow] = useState(true);

    useEffect(() => {
        if(filterUnderShow) {
            document.querySelector("#FilterList").style = "transform: rotate(180deg);";
            document.querySelector("#FilterOptions_body").style = "display: block;";
        }else {
            document.querySelector("#FilterList").style = "transform: rotate(0deg);";
            document.querySelector("#FilterOptions_body").style = "display: none;";
        }
    }, [ filterUnderShow ]);

    return (
        <>
            <div className={Style.Items_Container}>
                <div className={Style.items_categoryes_top}>
                    <div className={Style.items_filter}>
                        <div
                            onClick={() => {
                                setFilterShow(!filterShow);
                            }}
                            className={Style.items_filter_left}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 3.3335V5.55572H20V3.3335H0ZM3.33333 11.1113H16.6667V8.88905H3.33333V11.1113ZM12.2222 16.6668H7.77778V14.4446H12.2222V16.6668Z"
                                    fill="black"
                                />
                            </svg>
                        </div>
                        <div
                            onClick={() => {
                                setFilterShow(!filterShow);
                            }}
                            className={Style.items_filter_right}
                        >
                            <h4>Filters</h4>
                        </div>
                        <SpacePopup
                            id={1}
                            title={<h2>Filters</h2>}
                            setFunc={setFilterShow}
                            show={filterShow}
                            item={
                                <div className={Style.FilterOptions}>
                                    <div onClick={() => {
                                                setFilterUnderShow(!filterUnderShow);
                                            }} className={Style.FilterOptions_head}>
                                        <h3>Dietary Preferences</h3>
                                        <svg
                                            id="FilterList"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M19.6653 16.6653C19.219 17.1116 18.4953 17.1116 18.049 16.6653L12 10.6162L5.95098 16.6653C5.50467 17.1116 4.78105 17.1116 4.33473 16.6653C3.88842 16.219 3.88842 15.4953 4.33473 15.049L11.1919 8.19188C11.6382 7.74556 12.3618 7.74556 12.8081 8.19188L19.6653 15.049C20.1116 15.4953 20.1116 16.219 19.6653 16.6653Z"
                                                fill="#545454"
                                            />
                                        </svg>
                                    </div>
                                    <div
                                        id="FilterOptions_body"
                                        className={Style.FilterOptions_body}
                                    >
                                        <div className={Style.filterFields}>
                                            <input type="checkbox" name="fields1" id="fields1" />
                                            <p id="fields1">Low Sodium</p>
                                        </div>
                                        <div className={Style.filterFields}>
                                            <input type="checkbox" name="fields2" id="fields2" />
                                            <p id="fields2">Gluten Free</p>
                                        </div>
                                        <div className={Style.filterFields}>
                                            <input type="checkbox" name="fields3" id="fields3" />
                                            <p id="fields3">Pescatarian</p>
                                        </div>
                                        <div className={Style.filterFields}>
                                            <input type="checkbox" name="fields4" id="fields4" />
                                            <p id="fields4">Balanced</p>
                                        </div>
                                        <div className={Style.filterFields}>
                                            <input type="checkbox" name="fields5" id="fields5" />
                                            <p id="fields5">Dairy Free</p>
                                        </div>
                                        <div className={Style.filterFields}>
                                            <input type="checkbox" name="fields6" id="fields6" />
                                            <p id="fields6">Diabetic Friendly</p>
                                        </div>
                                        <div className={Style.filterFields}>
                                            <input type="checkbox" name="fields7" id="fields7" />
                                            <p id="fields7">Low Carb</p>
                                        </div>
                                        <div className={Style.filterFields}>
                                            <input type="checkbox" name="fields8" id="fields8" />
                                            <p id="fields8">Nut Free</p>
                                        </div>
                                        <div className={Style.filterFields}>
                                            <input type="checkbox" name="fields9" id="fields9" />
                                            <p id="fields9">Low Calorie</p>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                    </div>
                    <div className={Style.categories_top}>
                        <div
                            className={`${Style.categorys} ${Style.categories_select}`}
                        >
                            <div className={Style.categoryes_image}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                >
                                    <path
                                        d="M26.31 9.26C25.0247 8.43352 23.5281 7.99597 22 8C21.456 7.99811 20.9132 8.05172 20.38 8.16C19.0107 7.38604 17.4625 6.98444 15.8897 6.99521C14.3169 7.00598 12.7744 7.42876 11.4158 8.2214C10.0573 9.01404 8.9302 10.1489 8.14689 11.5128C7.36357 12.8767 6.95137 14.4221 6.95137 15.995C6.95137 17.5679 7.36357 19.1133 8.14689 20.4772C8.9302 21.8411 10.0573 22.976 11.4158 23.7686C12.7744 24.5612 14.3169 24.984 15.8897 24.9948C17.4625 25.0056 19.0107 24.604 20.38 23.83C20.9128 23.9416 21.4556 23.9986 22 24C23.7301 24.0001 25.4136 23.4393 26.7981 22.4018C28.1826 21.3642 29.1934 19.9058 29.6789 18.2452C30.1645 16.5846 30.0986 14.8114 29.4912 13.1914C28.8838 11.5714 27.7676 10.192 26.31 9.26ZM16 23C15.0038 23.0042 14.0181 22.7957 13.1089 22.3884C12.1997 21.9811 11.3879 21.3845 10.7278 20.6383C10.0677 19.8921 9.57446 19.0137 9.28106 18.0616C8.98766 17.1096 8.90085 16.1058 9.02645 15.1175C9.15205 14.1292 9.48716 13.1791 10.0094 12.3307C10.5316 11.4823 11.2289 10.7552 12.0547 10.1979C12.8805 9.64054 13.8157 9.26591 14.7978 9.099C15.78 8.93209 16.7865 8.97675 17.75 9.23C16.6077 9.95103 15.6666 10.9495 15.0144 12.1325C14.3623 13.3154 14.0202 14.6442 14.0202 15.995C14.0202 17.3458 14.3623 18.6746 15.0144 19.8575C15.6666 21.0405 16.6077 22.039 17.75 22.76C17.1791 22.9136 16.5911 22.9942 16 23ZM16 27C15.7348 27 15.4804 27.1054 15.2929 27.2929C15.1054 27.4804 15 27.7348 15 28V29C15 29.2652 15.1054 29.5196 15.2929 29.7071C15.4804 29.8946 15.7348 30 16 30C16.2652 30 16.5196 29.8946 16.7071 29.7071C16.8946 29.5196 17 29.2652 17 29V28C17 27.7348 16.8946 27.4804 16.7071 27.2929C16.5196 27.1054 16.2652 27 16 27ZM6.81 23.78L6.1 24.49C5.99532 24.5796 5.9103 24.69 5.85027 24.814C5.79025 24.9381 5.75652 25.0732 5.7512 25.2109C5.74588 25.3487 5.76909 25.486 5.81936 25.6143C5.86964 25.7426 5.94589 25.8592 6.04335 25.9566C6.1408 26.0541 6.25735 26.1304 6.38568 26.1806C6.514 26.2309 6.65133 26.2541 6.78905 26.2488C6.92677 26.2435 7.06191 26.2097 7.18597 26.1497C7.31004 26.0897 7.42035 26.0047 7.51 25.9L8.22 25.19C8.38383 24.9987 8.46943 24.7526 8.45971 24.5009C8.44999 24.2493 8.34566 24.0105 8.16756 23.8324C7.98947 23.6543 7.75073 23.55 7.49905 23.5403C7.24738 23.5306 7.0013 23.6162 6.81 23.78ZM4 15H3C2.73478 15 2.48043 15.1054 2.29289 15.2929C2.10536 15.4804 2 15.7348 2 16C2 16.2652 2.10536 16.5196 2.29289 16.7071C2.48043 16.8946 2.73478 17 3 17H4C4.26522 17 4.51957 16.8946 4.70711 16.7071C4.89464 16.5196 5 16.2652 5 16C5 15.7348 4.89464 15.4804 4.70711 15.2929C4.51957 15.1054 4.26522 15 4 15ZM6.81 8.22C7.0013 8.38383 7.24738 8.46943 7.49905 8.45971C7.75073 8.44999 7.98947 8.34566 8.16756 8.16756C8.34566 7.98947 8.44999 7.75073 8.45971 7.49905C8.46943 7.24738 8.38383 7.0013 8.22 6.81L7.51 6.1C7.3187 5.93617 7.07262 5.85057 6.82095 5.86029C6.56927 5.87001 6.33053 5.97434 6.15244 6.15244C5.97434 6.33053 5.87001 6.56927 5.86029 6.82095C5.85057 7.07262 5.93617 7.3187 6.1 7.51L6.81 8.22ZM16 5C16.2652 5 16.5196 4.89464 16.7071 4.70711C16.8946 4.51957 17 4.26522 17 4V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V4C15 4.26522 15.1054 4.51957 15.2929 4.70711C15.4804 4.89464 15.7348 5 16 5Z"
                                        fill="#333333"
                                    />
                                </svg>
                            </div>
                            <h3>All day</h3>
                        </div>
                        <div className={Style.categorys}>
                            <a href="#morning">
                                <div className={Style.categoryes_image}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                    >
                                        <path
                                            d="M16.0409 2.87509C16.0111 2.87467 15.9813 2.87577 15.9516 2.87839C15.7357 2.90379 15.5369 3.00857 15.3938 3.17236C15.2508 3.33615 15.1738 3.54725 15.1778 3.76466V7.26672C15.1704 7.38611 15.1876 7.50574 15.2282 7.61824C15.2689 7.73074 15.3321 7.83374 15.4141 7.92087C15.496 8.00801 15.5949 8.07745 15.7047 8.12492C15.8145 8.17239 15.9328 8.19687 16.0525 8.19687C16.1721 8.19687 16.2904 8.17239 16.4002 8.12492C16.51 8.07745 16.6089 8.00801 16.6909 7.92087C16.7728 7.83374 16.8361 7.73074 16.8767 7.61824C16.9173 7.50574 16.9345 7.38611 16.9272 7.26672V3.76466C16.9289 3.64763 16.9072 3.53143 16.8634 3.42291C16.8195 3.3144 16.7543 3.21578 16.6717 3.13286C16.5891 3.04994 16.4907 2.98441 16.3824 2.94014C16.274 2.89587 16.1579 2.87375 16.0409 2.87509ZM7.37997 6.46644C7.35011 6.46712 7.32031 6.46933 7.29068 6.47305C7.12569 6.4913 6.96927 6.55604 6.83964 6.65973C6.71001 6.76342 6.61249 6.90179 6.55844 7.05874C6.50439 7.2157 6.49603 7.38477 6.53433 7.5463C6.57263 7.70782 6.65603 7.85513 6.7748 7.9711L9.2484 10.4447C9.32605 10.5391 9.4226 10.6163 9.53184 10.6711C9.64108 10.726 9.76059 10.7574 9.8827 10.7634C10.0048 10.7693 10.1268 10.7496 10.2408 10.7056C10.3549 10.6616 10.4585 10.5942 10.5449 10.5077C10.6314 10.4213 10.6988 10.3177 10.7428 10.2037C10.7868 10.0896 10.8065 9.96762 10.8006 9.84551C10.7946 9.72341 10.7632 9.60389 10.7083 9.49465C10.6534 9.38542 10.5763 9.28887 10.4819 9.21121L8.00499 6.73761C7.9238 6.65257 7.82633 6.58474 7.71839 6.53816C7.61044 6.49157 7.49754 6.46718 7.37997 6.46644ZM24.6985 6.47305C24.4711 6.47979 24.2553 6.57466 24.0966 6.73761L21.623 9.21121C21.5286 9.28887 21.4515 9.38542 21.3966 9.49465C21.3417 9.60389 21.3103 9.72341 21.3044 9.84551C21.2984 9.96762 21.3181 10.0896 21.3621 10.2037C21.4062 10.3177 21.4736 10.4213 21.56 10.5077C21.6465 10.5942 21.75 10.6616 21.8641 10.7056C21.9781 10.7496 22.1001 10.7693 22.2222 10.7634C22.3443 10.7574 22.4638 10.726 22.5731 10.6711C22.6823 10.6163 22.7789 10.5391 22.8565 10.4447L25.3301 7.9711C25.4542 7.84794 25.5385 7.69051 25.5724 7.51903C25.6062 7.34755 25.588 7.16987 25.5201 7.00881C25.4522 6.84776 25.3377 6.71069 25.1913 6.61522C25.0449 6.51975 24.8733 6.47024 24.6985 6.47305ZM16.0508 9.0161C14.1952 9.01698 12.4159 9.7545 11.1038 11.0666C9.79169 12.3787 9.05417 14.158 9.05329 16.0136C9.05329 17.8698 9.79042 19.65 11.1026 20.9628C12.4148 22.2756 14.1946 23.0136 16.0508 23.0144C16.9702 23.0144 17.8805 22.8334 18.7299 22.4815C19.5793 22.1297 20.3511 21.614 21.0011 20.964C21.6512 20.3139 22.1669 19.5421 22.5187 18.6927C22.8706 17.8433 23.0516 16.933 23.0516 16.0136C23.0508 14.1575 22.3128 12.3776 21 11.0654C19.6872 9.75323 17.907 9.0161 16.0508 9.0161ZM3.80515 15.1406C3.68576 15.1332 3.56613 15.1504 3.45363 15.1911C3.34113 15.2317 3.23814 15.2949 3.151 15.3769C3.06386 15.4588 2.99442 15.5577 2.94695 15.6675C2.89949 15.7773 2.875 15.8957 2.875 16.0153C2.875 16.1349 2.89949 16.2532 2.94695 16.363C2.99442 16.4728 3.06386 16.5717 3.151 16.6537C3.23814 16.7356 3.34113 16.7989 3.45363 16.8395C3.56613 16.8801 3.68576 16.8973 3.80515 16.89H7.30722C7.53964 16.89 7.76254 16.7976 7.92689 16.6333C8.09123 16.4689 8.18356 16.246 8.18356 16.0136C8.18356 15.7812 8.09123 15.5583 7.92689 15.394C7.76254 15.2296 7.53964 15.1373 7.30722 15.1373H3.80184L3.80515 15.1406ZM24.8043 15.1406C24.6849 15.1332 24.5653 15.1504 24.4528 15.1911C24.3403 15.2317 24.2373 15.2949 24.1502 15.3769C24.063 15.4588 23.9936 15.5577 23.9461 15.6675C23.8987 15.7773 23.8742 15.8957 23.8742 16.0153C23.8742 16.1349 23.8987 16.2532 23.9461 16.363C23.9936 16.4728 24.063 16.5717 24.1502 16.6537C24.2373 16.7356 24.3403 16.7989 24.4528 16.8395C24.5653 16.8801 24.6849 16.8973 24.8043 16.89H28.3031C28.5355 16.89 28.7584 16.7976 28.9228 16.6333C29.0871 16.4689 29.1794 16.246 29.1794 16.0136C29.1794 15.7812 29.0871 15.5583 28.9228 15.394C28.7584 15.2296 28.5355 15.1373 28.3031 15.1373H24.8043V15.1406ZM22.2249 21.3147C22.195 21.3154 22.1652 21.3176 22.1356 21.3213C21.9706 21.3395 21.8142 21.4043 21.6846 21.508C21.5549 21.6116 21.4574 21.75 21.4034 21.907C21.3493 22.0639 21.341 22.233 21.3793 22.3945C21.4176 22.556 21.501 22.7034 21.6197 22.8193L24.0933 25.2929C24.171 25.3874 24.2675 25.4645 24.3768 25.5194C24.486 25.5742 24.6055 25.6057 24.7276 25.6116C24.8497 25.6175 24.9717 25.5979 25.0858 25.5538C25.1998 25.5098 25.3034 25.4424 25.3898 25.356C25.4763 25.2695 25.5437 25.1659 25.5877 25.0519C25.6317 24.9378 25.6514 24.8159 25.6455 24.6937C25.6395 24.5716 25.6081 24.4521 25.5532 24.3429C25.4984 24.2336 25.4212 24.1371 25.3268 24.0594L22.8532 21.5858C22.772 21.5008 22.6746 21.433 22.5666 21.3864C22.4587 21.3398 22.3425 21.3154 22.2249 21.3147ZM9.84365 21.3213C9.61746 21.3289 9.40297 21.4237 9.24509 21.5858L6.77149 24.0594C6.67707 24.1371 6.59994 24.2336 6.54506 24.3429C6.49018 24.4521 6.45877 24.5716 6.45283 24.6937C6.4469 24.8159 6.46657 24.9378 6.5106 25.0519C6.55463 25.1659 6.62203 25.2695 6.70847 25.356C6.79492 25.4424 6.89849 25.5098 7.01254 25.5538C7.12658 25.5979 7.24858 25.6175 7.37069 25.6116C7.49279 25.6057 7.61231 25.5742 7.72154 25.5194C7.83078 25.4645 7.92733 25.3874 8.00499 25.2929L10.4786 22.8193C10.6028 22.696 10.6873 22.5382 10.721 22.3664C10.7548 22.1946 10.7363 22.0167 10.668 21.8555C10.5997 21.6943 10.4846 21.5572 10.3377 21.462C10.1908 21.3668 10.0187 21.3178 9.84365 21.3213ZM16.0343 23.8776C15.803 23.8819 15.5828 23.9775 15.4218 24.1435C15.2607 24.3096 15.1718 24.5325 15.1745 24.7638V28.2626C15.1671 28.382 15.1843 28.5016 15.2249 28.6141C15.2656 28.7266 15.3288 28.8296 15.4107 28.9167C15.4927 29.0039 15.5916 29.0733 15.7014 29.1208C15.8112 29.1683 15.9295 29.1927 16.0492 29.1927C16.1688 29.1927 16.2871 29.1683 16.3969 29.1208C16.5067 29.0733 16.6056 29.0039 16.6876 28.9167C16.7695 28.8296 16.8327 28.7266 16.8734 28.6141C16.914 28.5016 16.9312 28.382 16.9238 28.2626V24.7671C16.9252 24.6498 16.903 24.5334 16.8585 24.4248C16.814 24.3163 16.7482 24.2177 16.6649 24.1351C16.5817 24.0524 16.4826 23.9873 16.3737 23.9437C16.2648 23.9 16.1483 23.8786 16.031 23.8809L16.0343 23.8776Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <h3>Morning</h3>
                            </a>
                        </div>
                        <div className={Style.categorys}>
                            <div className={Style.categoryes_image}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                >
                                    <path
                                        d="M23.02 21.9026C22.945 22.2275 22.7803 22.5247 22.5445 22.7605C22.3088 22.9962 22.0115 23.161 21.6866 23.2359L18.4866 24.2346L17.7333 27.3452C17.4146 28.5626 16.6533 28.8039 16.34 28.8506C16.2751 28.8599 16.2095 28.8644 16.144 28.8639C15.8119 28.8467 15.4906 28.7406 15.2136 28.5567C14.9366 28.3728 14.7141 28.1179 14.5693 27.8186L12.7133 24.8239L9.30263 25.0586C8.94029 25.1462 8.5589 25.1077 8.22141 24.9494C7.88391 24.7911 7.61049 24.5224 7.44626 24.1877C7.28204 23.8531 7.23683 23.4724 7.3181 23.1086C7.39938 22.7448 7.60227 22.4195 7.89329 22.1866L10.04 19.6879L9.01996 16.5959C8.89662 16.2853 8.86347 15.9463 8.92432 15.6177C8.98518 15.2891 9.13757 14.9844 9.36396 14.7386C9.61361 14.5152 9.92143 14.367 10.2518 14.3113C10.5822 14.2556 10.9215 14.2947 11.2306 14.4239L14.2253 15.4106L17.0666 13.3026C17.3158 13.0666 17.6325 12.9144 17.9725 12.8674C18.3124 12.8203 18.6586 12.8807 18.9625 13.0402C19.2664 13.1996 19.5128 13.4501 19.6673 13.7566C19.8218 14.063 19.8765 14.4101 19.824 14.7492L19.7533 18.3839L22.22 20.1919C22.5006 20.3731 22.7245 20.6296 22.866 20.9322C23.0075 21.2348 23.0608 21.5711 23.02 21.9026ZM28.0093 7.86658L26.5733 6.78258L26.616 4.67458C26.64 4.39698 26.5839 4.11832 26.4544 3.8716C26.3249 3.62489 26.1274 3.42048 25.8853 3.28258C25.634 3.16184 25.3534 3.11564 25.0767 3.14943C24.8 3.18322 24.5388 3.29559 24.324 3.47324L22.6133 4.70525L20.9013 4.14258C20.6461 4.04024 20.3672 4.01222 20.0968 4.06177C19.8264 4.11132 19.5756 4.23642 19.3733 4.42258C19.1839 4.62172 19.0547 4.87031 19.0004 5.1397C18.9462 5.40909 18.9691 5.68833 19.0666 5.94525L19.636 7.76925L18.4146 9.19058C18.1963 9.3965 18.0472 9.66502 17.9877 9.95918C17.9283 10.2533 17.9614 10.5587 18.0826 10.8332C18.2259 11.0973 18.4474 11.3105 18.7167 11.4437C18.9859 11.5769 19.2898 11.6235 19.5866 11.5772L21.5866 11.4746L22.6373 13.1759C22.7583 13.4168 22.9418 13.6208 23.1686 13.7664C23.3954 13.9121 23.6572 13.9941 23.9266 14.0039C23.9855 14.0037 24.0444 13.9993 24.1026 13.9906C24.3978 13.9347 24.6685 13.7887 24.8772 13.5726C25.0859 13.3564 25.2224 13.0809 25.268 12.7839L25.7426 10.9719L27.5666 10.3999C27.8339 10.335 28.0773 10.1955 28.2685 9.99771C28.4597 9.79992 28.5908 9.55194 28.6466 9.28258C28.6852 9.01044 28.6457 8.73296 28.5329 8.48232C28.4201 8.23169 28.2386 8.01818 28.0093 7.86658ZM8.43063 13.0106L9.19196 11.7759L10.64 11.8506C10.9119 11.8889 11.189 11.8428 11.4339 11.7186C11.6787 11.5943 11.8796 11.3979 12.0093 11.1559C12.1222 10.9057 12.1552 10.6267 12.1037 10.357C12.0521 10.0874 11.9186 9.84018 11.7213 9.64925L10.8373 8.61858L11.2493 7.29591C11.3449 7.0605 11.3685 6.80202 11.3171 6.55318C11.2658 6.30434 11.1417 6.07634 10.9607 5.89804C10.7797 5.71974 10.5498 5.59915 10.3003 5.55154C10.0507 5.50393 9.79257 5.53143 9.55863 5.63058L8.31463 6.03991L7.05596 5.13324C6.85678 4.9731 6.61628 4.8727 6.36236 4.84367C6.10843 4.81464 5.85148 4.85818 5.62129 4.96924C5.39933 5.09568 5.21768 5.28235 5.09735 5.50768C4.97701 5.73301 4.92291 5.98779 4.94129 6.24258L4.97196 7.79324L3.92929 8.58391C3.71482 8.7194 3.54529 8.91538 3.4421 9.14713C3.3389 9.37887 3.30666 9.63599 3.34945 9.88604C3.39225 10.1361 3.50815 10.3679 3.68253 10.5521C3.85692 10.7363 4.08197 10.8648 4.32929 10.9212L5.65463 11.3346L5.99729 12.6479C6.04234 12.9189 6.17001 13.1694 6.36285 13.3652C6.5557 13.5609 6.80429 13.6922 7.07463 13.7412C7.13115 13.7494 7.18819 13.7534 7.24529 13.7532C7.49148 13.7478 7.73162 13.676 7.94029 13.5452C8.14896 13.4145 8.31839 13.2298 8.43063 13.0106Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <h3>Night</h3>
                        </div>
                        <div className={Style.categorys}>
                            <div className={Style.categoryes_image}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                >
                                    <path
                                        d="M21.9958 4.00244L20.0003 10.0003L13.9987 12.0034L20.0003 13.9989L21.9996 20.0006L23.9989 13.9989L29.9968 11.9996L23.9989 10.0003L21.9958 4.00244ZM13.9987 6.00173C10.8169 6.00274 7.7657 7.26741 5.51617 9.51765C3.26664 11.7679 2.00293 14.8194 2.00293 18.0013C2.00293 21.1837 3.26716 24.2359 5.51751 26.4862C7.76786 28.7366 10.82 30.0008 14.0025 30.0008C16.3734 29.9997 18.6909 29.2962 20.6624 27.9792C22.6339 26.6622 24.171 24.7906 25.0798 22.6008C23.5421 23.5125 21.788 23.9954 20.0003 23.9991C17.3481 23.9991 14.8045 22.9455 12.9291 21.0701C11.0537 19.1947 10.0001 16.6511 10.0001 13.9989C10.0021 12.4458 10.3659 10.9145 11.0626 9.52636C11.7593 8.13825 12.7697 6.9315 14.0138 6.00173C14.0088 6.00173 14.0037 6.00173 13.9987 6.00173Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <h3>Late Night</h3>
                        </div>
                    </div>
                    <div className={Style.none_Right}></div>
                </div>
                <div className={Style.items_container}>
                    <div className={Style.items_cards}>
                        <div className={Style.items_head}>
                            <div className={Style.item_head_state_logo}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                >
                                    <path
                                        d="M26.31 9.26C25.0247 8.43352 23.5281 7.99597 22 8C21.456 7.99811 20.9132 8.05172 20.38 8.16C19.0107 7.38604 17.4625 6.98444 15.8897 6.99521C14.3169 7.00598 12.7744 7.42876 11.4158 8.2214C10.0573 9.01404 8.9302 10.1489 8.14689 11.5128C7.36357 12.8767 6.95137 14.4221 6.95137 15.995C6.95137 17.5679 7.36357 19.1133 8.14689 20.4772C8.9302 21.8411 10.0573 22.976 11.4158 23.7686C12.7744 24.5612 14.3169 24.984 15.8897 24.9948C17.4625 25.0056 19.0107 24.604 20.38 23.83C20.9128 23.9416 21.4556 23.9986 22 24C23.7301 24.0001 25.4136 23.4393 26.7981 22.4018C28.1826 21.3642 29.1934 19.9058 29.6789 18.2452C30.1645 16.5846 30.0986 14.8114 29.4912 13.1914C28.8838 11.5714 27.7676 10.192 26.31 9.26ZM16 23C15.0038 23.0042 14.0181 22.7957 13.1089 22.3884C12.1997 21.9811 11.3879 21.3845 10.7278 20.6383C10.0677 19.8921 9.57446 19.0137 9.28106 18.0616C8.98766 17.1096 8.90085 16.1058 9.02645 15.1175C9.15205 14.1292 9.48716 13.1791 10.0094 12.3307C10.5316 11.4823 11.2289 10.7552 12.0547 10.1979C12.8805 9.64054 13.8157 9.26591 14.7978 9.099C15.78 8.93209 16.7865 8.97675 17.75 9.23C16.6077 9.95103 15.6666 10.9495 15.0144 12.1325C14.3623 13.3154 14.0202 14.6442 14.0202 15.995C14.0202 17.3458 14.3623 18.6746 15.0144 19.8575C15.6666 21.0405 16.6077 22.039 17.75 22.76C17.1791 22.9136 16.5911 22.9942 16 23ZM16 27C15.7348 27 15.4804 27.1054 15.2929 27.2929C15.1054 27.4804 15 27.7348 15 28V29C15 29.2652 15.1054 29.5196 15.2929 29.7071C15.4804 29.8946 15.7348 30 16 30C16.2652 30 16.5196 29.8946 16.7071 29.7071C16.8946 29.5196 17 29.2652 17 29V28C17 27.7348 16.8946 27.4804 16.7071 27.2929C16.5196 27.1054 16.2652 27 16 27ZM6.81 23.78L6.1 24.49C5.99532 24.5796 5.9103 24.69 5.85027 24.814C5.79025 24.9381 5.75652 25.0732 5.7512 25.2109C5.74588 25.3487 5.76909 25.486 5.81936 25.6143C5.86964 25.7426 5.94589 25.8592 6.04335 25.9566C6.1408 26.0541 6.25735 26.1304 6.38568 26.1806C6.514 26.2309 6.65133 26.2541 6.78905 26.2488C6.92677 26.2435 7.06191 26.2097 7.18597 26.1497C7.31004 26.0897 7.42035 26.0047 7.51 25.9L8.22 25.19C8.38383 24.9987 8.46943 24.7526 8.45971 24.5009C8.44999 24.2493 8.34566 24.0105 8.16756 23.8324C7.98947 23.6543 7.75073 23.55 7.49905 23.5403C7.24738 23.5306 7.0013 23.6162 6.81 23.78ZM4 15H3C2.73478 15 2.48043 15.1054 2.29289 15.2929C2.10536 15.4804 2 15.7348 2 16C2 16.2652 2.10536 16.5196 2.29289 16.7071C2.48043 16.8946 2.73478 17 3 17H4C4.26522 17 4.51957 16.8946 4.70711 16.7071C4.89464 16.5196 5 16.2652 5 16C5 15.7348 4.89464 15.4804 4.70711 15.2929C4.51957 15.1054 4.26522 15 4 15ZM6.81 8.22C7.0013 8.38383 7.24738 8.46943 7.49905 8.45971C7.75073 8.44999 7.98947 8.34566 8.16756 8.16756C8.34566 7.98947 8.44999 7.75073 8.45971 7.49905C8.46943 7.24738 8.38383 7.0013 8.22 6.81L7.51 6.1C7.3187 5.93617 7.07262 5.85057 6.82095 5.86029C6.56927 5.87001 6.33053 5.97434 6.15244 6.15244C5.97434 6.33053 5.87001 6.56927 5.86029 6.82095C5.85057 7.07262 5.93617 7.3187 6.1 7.51L6.81 8.22ZM16 5C16.2652 5 16.5196 4.89464 16.7071 4.70711C16.8946 4.51957 17 4.26522 17 4V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V4C15 4.26522 15.1054 4.51957 15.2929 4.70711C15.4804 4.89464 15.7348 5 16 5Z"
                                        fill="#333333"
                                    />
                                </svg>
                            </div>
                            <h1>All day</h1>
                        </div>
                        <div className={Style.items_cards_sections}>
                            {
                                [1, 2, 3, 4, 5, 6].map((item, index) => {
                                    return (
                                        <ItemCard
                                            id={item}
                                            image={"../dish_item.svg"}
                                            name={"Blueberry Pancakes"}
                                            price={"$5"}
                                            time={"45 - 60 min"}
                                            itemCount={1}
                                            itemIncDec={(n) => {}}
                                            addCardButton={() => {}}
                                        />
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div id="morning" className={Style.items_cards}>
                        <div className={Style.items_head}>
                            <div className={Style.item_head_state_logo}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                >
                                    <path
                                        d="M16.0409 2.87509C16.0111 2.87467 15.9813 2.87577 15.9516 2.87839C15.7357 2.90379 15.5369 3.00857 15.3938 3.17236C15.2508 3.33615 15.1738 3.54725 15.1778 3.76466V7.26672C15.1704 7.38611 15.1876 7.50574 15.2282 7.61824C15.2689 7.73074 15.3321 7.83374 15.4141 7.92087C15.496 8.00801 15.5949 8.07745 15.7047 8.12492C15.8145 8.17239 15.9328 8.19687 16.0525 8.19687C16.1721 8.19687 16.2904 8.17239 16.4002 8.12492C16.51 8.07745 16.6089 8.00801 16.6909 7.92087C16.7728 7.83374 16.8361 7.73074 16.8767 7.61824C16.9173 7.50574 16.9345 7.38611 16.9272 7.26672V3.76466C16.9289 3.64763 16.9072 3.53143 16.8634 3.42291C16.8195 3.3144 16.7543 3.21578 16.6717 3.13286C16.5891 3.04994 16.4907 2.98441 16.3824 2.94014C16.274 2.89587 16.1579 2.87375 16.0409 2.87509ZM7.37997 6.46644C7.35011 6.46712 7.32031 6.46933 7.29068 6.47305C7.12569 6.4913 6.96927 6.55604 6.83964 6.65973C6.71001 6.76342 6.61249 6.90179 6.55844 7.05874C6.50439 7.2157 6.49603 7.38477 6.53433 7.5463C6.57263 7.70782 6.65603 7.85513 6.7748 7.9711L9.2484 10.4447C9.32605 10.5391 9.4226 10.6163 9.53184 10.6711C9.64108 10.726 9.76059 10.7574 9.8827 10.7634C10.0048 10.7693 10.1268 10.7496 10.2408 10.7056C10.3549 10.6616 10.4585 10.5942 10.5449 10.5077C10.6314 10.4213 10.6988 10.3177 10.7428 10.2037C10.7868 10.0896 10.8065 9.96762 10.8006 9.84551C10.7946 9.72341 10.7632 9.60389 10.7083 9.49465C10.6534 9.38542 10.5763 9.28887 10.4819 9.21121L8.00499 6.73761C7.9238 6.65257 7.82633 6.58474 7.71839 6.53816C7.61044 6.49157 7.49754 6.46718 7.37997 6.46644ZM24.6985 6.47305C24.4711 6.47979 24.2553 6.57466 24.0966 6.73761L21.623 9.21121C21.5286 9.28887 21.4515 9.38542 21.3966 9.49465C21.3417 9.60389 21.3103 9.72341 21.3044 9.84551C21.2984 9.96762 21.3181 10.0896 21.3621 10.2037C21.4062 10.3177 21.4736 10.4213 21.56 10.5077C21.6465 10.5942 21.75 10.6616 21.8641 10.7056C21.9781 10.7496 22.1001 10.7693 22.2222 10.7634C22.3443 10.7574 22.4638 10.726 22.5731 10.6711C22.6823 10.6163 22.7789 10.5391 22.8565 10.4447L25.3301 7.9711C25.4542 7.84794 25.5385 7.69051 25.5724 7.51903C25.6062 7.34755 25.588 7.16987 25.5201 7.00881C25.4522 6.84776 25.3377 6.71069 25.1913 6.61522C25.0449 6.51975 24.8733 6.47024 24.6985 6.47305ZM16.0508 9.0161C14.1952 9.01698 12.4159 9.7545 11.1038 11.0666C9.79169 12.3787 9.05417 14.158 9.05329 16.0136C9.05329 17.8698 9.79042 19.65 11.1026 20.9628C12.4148 22.2756 14.1946 23.0136 16.0508 23.0144C16.9702 23.0144 17.8805 22.8334 18.7299 22.4815C19.5793 22.1297 20.3511 21.614 21.0011 20.964C21.6512 20.3139 22.1669 19.5421 22.5187 18.6927C22.8706 17.8433 23.0516 16.933 23.0516 16.0136C23.0508 14.1575 22.3128 12.3776 21 11.0654C19.6872 9.75323 17.907 9.0161 16.0508 9.0161ZM3.80515 15.1406C3.68576 15.1332 3.56613 15.1504 3.45363 15.1911C3.34113 15.2317 3.23814 15.2949 3.151 15.3769C3.06386 15.4588 2.99442 15.5577 2.94695 15.6675C2.89949 15.7773 2.875 15.8957 2.875 16.0153C2.875 16.1349 2.89949 16.2532 2.94695 16.363C2.99442 16.4728 3.06386 16.5717 3.151 16.6537C3.23814 16.7356 3.34113 16.7989 3.45363 16.8395C3.56613 16.8801 3.68576 16.8973 3.80515 16.89H7.30722C7.53964 16.89 7.76254 16.7976 7.92689 16.6333C8.09123 16.4689 8.18356 16.246 8.18356 16.0136C8.18356 15.7812 8.09123 15.5583 7.92689 15.394C7.76254 15.2296 7.53964 15.1373 7.30722 15.1373H3.80184L3.80515 15.1406ZM24.8043 15.1406C24.6849 15.1332 24.5653 15.1504 24.4528 15.1911C24.3403 15.2317 24.2373 15.2949 24.1502 15.3769C24.063 15.4588 23.9936 15.5577 23.9461 15.6675C23.8987 15.7773 23.8742 15.8957 23.8742 16.0153C23.8742 16.1349 23.8987 16.2532 23.9461 16.363C23.9936 16.4728 24.063 16.5717 24.1502 16.6537C24.2373 16.7356 24.3403 16.7989 24.4528 16.8395C24.5653 16.8801 24.6849 16.8973 24.8043 16.89H28.3031C28.5355 16.89 28.7584 16.7976 28.9228 16.6333C29.0871 16.4689 29.1794 16.246 29.1794 16.0136C29.1794 15.7812 29.0871 15.5583 28.9228 15.394C28.7584 15.2296 28.5355 15.1373 28.3031 15.1373H24.8043V15.1406ZM22.2249 21.3147C22.195 21.3154 22.1652 21.3176 22.1356 21.3213C21.9706 21.3395 21.8142 21.4043 21.6846 21.508C21.5549 21.6116 21.4574 21.75 21.4034 21.907C21.3493 22.0639 21.341 22.233 21.3793 22.3945C21.4176 22.556 21.501 22.7034 21.6197 22.8193L24.0933 25.2929C24.171 25.3874 24.2675 25.4645 24.3768 25.5194C24.486 25.5742 24.6055 25.6057 24.7276 25.6116C24.8497 25.6175 24.9717 25.5979 25.0858 25.5538C25.1998 25.5098 25.3034 25.4424 25.3898 25.356C25.4763 25.2695 25.5437 25.1659 25.5877 25.0519C25.6317 24.9378 25.6514 24.8159 25.6455 24.6937C25.6395 24.5716 25.6081 24.4521 25.5532 24.3429C25.4984 24.2336 25.4212 24.1371 25.3268 24.0594L22.8532 21.5858C22.772 21.5008 22.6746 21.433 22.5666 21.3864C22.4587 21.3398 22.3425 21.3154 22.2249 21.3147ZM9.84365 21.3213C9.61746 21.3289 9.40297 21.4237 9.24509 21.5858L6.77149 24.0594C6.67707 24.1371 6.59994 24.2336 6.54506 24.3429C6.49018 24.4521 6.45877 24.5716 6.45283 24.6937C6.4469 24.8159 6.46657 24.9378 6.5106 25.0519C6.55463 25.1659 6.62203 25.2695 6.70847 25.356C6.79492 25.4424 6.89849 25.5098 7.01254 25.5538C7.12658 25.5979 7.24858 25.6175 7.37069 25.6116C7.49279 25.6057 7.61231 25.5742 7.72154 25.5194C7.83078 25.4645 7.92733 25.3874 8.00499 25.2929L10.4786 22.8193C10.6028 22.696 10.6873 22.5382 10.721 22.3664C10.7548 22.1946 10.7363 22.0167 10.668 21.8555C10.5997 21.6943 10.4846 21.5572 10.3377 21.462C10.1908 21.3668 10.0187 21.3178 9.84365 21.3213ZM16.0343 23.8776C15.803 23.8819 15.5828 23.9775 15.4218 24.1435C15.2607 24.3096 15.1718 24.5325 15.1745 24.7638V28.2626C15.1671 28.382 15.1843 28.5016 15.2249 28.6141C15.2656 28.7266 15.3288 28.8296 15.4107 28.9167C15.4927 29.0039 15.5916 29.0733 15.7014 29.1208C15.8112 29.1683 15.9295 29.1927 16.0492 29.1927C16.1688 29.1927 16.2871 29.1683 16.3969 29.1208C16.5067 29.0733 16.6056 29.0039 16.6876 28.9167C16.7695 28.8296 16.8327 28.7266 16.8734 28.6141C16.914 28.5016 16.9312 28.382 16.9238 28.2626V24.7671C16.9252 24.6498 16.903 24.5334 16.8585 24.4248C16.814 24.3163 16.7482 24.2177 16.6649 24.1351C16.5817 24.0524 16.4826 23.9873 16.3737 23.9437C16.2648 23.9 16.1483 23.8786 16.031 23.8809L16.0343 23.8776Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            <h1>Morning</h1>
                        </div>
                        <div className={Style.items_cards_sections}>
                        {
                                [1, 2, 3, 4, 5, 6].map((item, index) => {
                                    return (
                                        <ItemCard
                                            id={item}
                                            image={"../dish_item.svg"}
                                            name={"Blueberry Pancakes"}
                                            price={"$5"}
                                            time={"45 - 60 min"}
                                            itemCount={1}
                                            itemIncDec={(n) => {}}
                                            addCardButton={() => {}}
                                        />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
