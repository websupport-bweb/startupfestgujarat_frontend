import snehalMam from "../assets/img/snhel.JPG";
import sonusir from "../assets/img/sonusir.jpg";

export const Summary = () => {
    return (
        <>
            <section className="padding-sec light-bg about-sec "  >
                <div className="container">
                    <div className="justify-content-between row">
                        <div className="col-lg-7 col-md-12 col-12">
                            <h3 className="title">
                                <div> Executive Summary</div>
                            </h3>
                            <div>
                                <p className="para">
                                    The Start-up Fest Gujarat Season 2, organized by the SnehShilp Foundation under the visionary leadership of Mrs. Snehal Brahmbhatt, successfully concluded as a landmark event for India's entrepreneurial landscape. Building on the foundation laid by its inaugural season, this edition significantly expanded its scope, impact, and reach. With a strategic focus on fostering innovation, facilitating investment, and strengthening community ties, Season 2 delivered exceptional value, setting new benchmarks for startup ecosystem development in Gujarat and beyond.
                                </p>

                            </div>

                        </div>
                        <div className="offset-lg-0 col-lg-4 col-md-12 col-12">
                            <img
                                src={snehalMam}
                                alt="About StartUp Fest"
                                className="w-100 img-padding"
                                style={{borderRadius:'20px'}}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center container mt-5 mb-4">
                <h6 className="title mb-5">SnehShilp Foundation's <span className="gradient">Start-up Fest Gujarat</span> was established to address the need for a
                    comprehensive platform supporting emerging
                    ideas and ventures in the region.<span className="gradient">  Season 2 </span> continued this mission, bringing together startups, investors,
                    industry experts, and a diverse audience for an impactful two-day event.
                </h6>
            </div>
            <section className="padding-sec light-bg about-sec">
                <div className="container">
                    <div className="justify-content-between row">
                        <h6 className="title">
                            <div>The core objectives for Start-up Fest Gujarat Season 2 were successfully met, demonstrating the event's effectiveness in driving entrepreneurial growth:
                            </div>
                        </h6>
                        <div>
                            <ul>
                                <li>Fostered entrepreneurship and innovation in Gujarat: Evidenced by the showcase of over 100 diverse startups and the vibrant engagement of 8,000+ visitors.</li>
                                <li>Provided a platform for startups to network and showcase their ideas: Achieved through dedicated startup stalls, pitching sessions, and one-on-one meetings.</li>
                                <li>Facilitated investment opportunities for promising startups: Demonstrated by the participation of 400+ active investors, 50+ VC firms, an ₹800+ crore fund pool, and ₹52 crore in LOIs signed.</li>
                                <li>Promoted collaboration and knowledge exchange within the startup ecosystem: Supported by extensive networking opportunities and strategic partnerships with leading innovation organizations.</li>
                                <li>Recognized and celebrated achievements in the startup and innovation space: Culminated in a grand Award Night honoring exceptional entrepreneurial talent.</li>
                            </ul>

                        </div>

                    </div>


                </div>
            </section>

            <section className="padding-sec  about-sec">
                <div className="container">
                    <div className="justify-content-between row">
                        <h6 className="title text-center">
                            <div> Powerful Collaborations with Ecosystem Leaders .
                                <p style={{fontSize:"18px"}}>The success of Season 2 was significantly amplified by strategic partnerships with some of India’s most influential innovation organizations. 
                           </p> </div>
                        </h6>
                        <div className="list-check-2">
                            <ul className="circle">
                                <li>iHub</li>
                                <li>FICCI, GCCI, CII</li>
                                <li>India Accelerator</li>
                                <li>ICSI</li>

                                <li>Department of Science and Technology (DST)</li>
                                
                                <li>EO (Entrepreneurs’ Organization)</li>
                                <li>YPO (Young Presidents’ Organization)</li>
                                
                            </ul>
                            <p>These partnerships contributed strategic depth, global perspectives, and institutional support, collectively elevating the fest into a truly world-class platform.</p>

                        </div>

                    </div>
                    <div className="mt-5 justify-content-between row">
                        <div className="offset-lg-0 col-lg-5 col-md-12 col-12">
                            <img
                                src={sonusir}
                                alt="About StartUp Fest"
                                className="w-100 img-padding"
                                style={{borderRadius:'20px'}}

                            />
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <h3 className="title">
                                <div>The Grand Finale: Award Night with Sonu Sood</div>
                            </h3>
                            <div>
                                <p className="para">
                                    Season 2 concluded with a dazzling Award Night, a fitting celebration of exceptional entrepreneurial talent. The event was honored by the presence of renowned actor,
                                    philanthropist, and entrepreneur <strong>Sonu Sood</strong>,
                                    who presented prestigious awards to some of India’s most promising startups. His inspiring presence resonated with thousands, making the evening a symbolic acknowledgment of courage, creativity, and commitment to driving positive change.  </p>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

        </>
    );
};