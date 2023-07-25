import Style from "./accessibility.module.css";

export default function accessibility() {
    return (
        <>
            <div className={Style.accessibility}>
                <div className={Style.background_set}>
                    <img src="/dish_7.svg" alt="dish" />
                </div>
                <div className={Style.accessibility_container}>
                    <h1>Accessibility Statement</h1>
                    <h4>Last updated on 10 Jul, 2023</h4>
                    <p>
                        The Boston Cravings is committed to making our website's
                        content accessible and user friendly to everyone. If you
                        are having difficulty viewing or navigating the content
                        on this website, or notice any content, feature, or
                        functionality that you believe is not fully accessible
                        to people with disabilities, please email our Customer
                        Service team at hello@thebostoncravings.com with
                        “Accessibility Inquiry” in the subject line and provide
                        a description of the specific feature you feel is not
                        fully accessible or a suggestion for improvement. We
                        take your feedback seriously and will consider it as we
                        evaluate ways to accommodate all of our customers and
                        our overall accessibility policies. Additionally, while
                        we do not control such vendors, we strongly encourage
                        vendors of third-party digital content to provide
                        content that is accessible and user friendly.
                    </p>
                </div>
            </div>
        </>
    );
}
