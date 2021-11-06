import IMG_1 from "../../Images/worked_companies-logo/achieve.svg"
import IMG_2 from "../../Images/worked_companies-logo/ahr.svg"
import IMG_3 from "../../Images/worked_companies-logo/nsw-government.svg"
import IMG_4 from "../../Images/worked_companies-logo/odm.svg"
import IMG_5 from "../../Images/worked_companies-logo/pam.svg"
import IMG_6 from "../../Images/worked_companies-logo/phn.svg"
import IMG_7 from "../../Images/worked_companies-logo/tad.svg"
import IMG_8 from "../../Images/worked_companies-logo/wsu.svg"
import IMG_9 from "../../Images/worked_companies-logo/wwe.svg"

const WorkedWith = () => {

    const companies_logos = [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6, IMG_7, IMG_8, IMG_9];

    return (
        <section id="worked_with">
            <div className="container-xxl">
                <div className="row col-12 col-md-8 mx-auto col-lg-12 p-0 align-items-center">
                    <div className="col-lg-6 worked-with__left-site">
                        <h1 className="display-1 mb-5 fw-bolder theme-white-color">Proud to have worked with.</h1>
                        <p className="fs-4 theme-white-color">
                            We love partnering with organisations that are passionate about their purpose and take a forward-thinking approach to the impact they can have.
                        </p>
                        <button className="btn rounded-0 btn-outline-light border-2 fs-4 p-4 mt-4">Our Services</button>
                    </div>

                    <div className="col-lg-6 ms-auto p-3">
                        <div className="row w-100 row-cols-3 worked-with-left__logos-area">
                            {companies_logos.map((img) => (
                                <div className="col worked-with-left__logos">
                                    <div className="worked-with-left__logo-wrapper">
                                        <img src={img} alt={img} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkedWith;