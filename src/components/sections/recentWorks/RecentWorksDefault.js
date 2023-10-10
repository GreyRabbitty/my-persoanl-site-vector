import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef, useState } from "react";
const RecentWorksDefault = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".grid-items", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <Fragment>
      <div className="content works">
        {/* title */}
        <div className="title">Recent Works</div>
        {/* filters */}
        <div className="filter-menu filter-button-group">
          <div
            className={`f_btn ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="grid-item" />
              All
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("photo")}`}
            onClick={handleFilterKeyChange("photo")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="photo" />
              Image
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("gallery")}`}
            onClick={handleFilterKeyChange("gallery")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="gallery" />
              Gallery
            </label>
          </div>
        </div>
        {/* content */}
        <div className="row grid-items border-line-v">
          {/* work item photo */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="images/works/work1.png" className="has-popup-image">
                  <img src="images/works/work1.png" alt="" />
                  <span className="info">
                    <span className="ion ion-image" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="images/works/work1.png"
                  className="name has-popup-image"
                >
                  Global Goats - NFTS
                </a>
                <div className="category">Image</div>
              </div>
            </div>
          </div>
          {/* work item photo */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item gallery border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#gallery-1" className="has-popup-gallery img-gallery">
                  <img src="images/works/gallery/OpenTee/Screenshot_0.png" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                  <div id="gallery-1" className="mfp-hide">
                    <a href="images/works/gallery/OpenTee/Screenshot_0.png" />
                    <a href="images/works/gallery/OpenTee/Screenshot_1.png" />
                    <a href="images/works/gallery/OpenTee/Screenshot_2.png" />
                  </div>
                </a>
              </div>
              <div className="desc">
                <a href="#" className="name has-popup-image">
                  Global Goats - NFTS
                </a>
                <div className="category">Gallery</div>
              </div>
            </div>
          </div>
          {/* work item photo */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item gallery border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#gallery-1" className="has-popup-gallery img-gallery">
                  <img src="images/works/gallery/hyper/Screenshot_0.png" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                  <div id="gallery-1" className="mfp-hide">
                    <a href="images/works/gallery/hyper/Screenshot_0.png" />
                    <a href="images/works/gallery/hyper/Screenshot_1.png" />
                    <a href="images/works/gallery/hyper/Screenshot_2.png" />
                  </div>
                </a>
              </div>
              <div className="desc">
                <a href="#" className="name has-popup-image">
                  Hyper Finance(staking)
                </a>
                <div className="category">Gallery</div>
              </div>
            </div>
          </div>
          {/* work item photo */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item gallery border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#gallery-1" className="has-popup-gallery img-gallery">
                  <img src="images/works/gallery/Fresh/Screenshot_0.png" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                  <div id="gallery-1" className="mfp-hide">
                    <a href="images/works/gallery/Fresh/Screenshot_0.png" />
                    <a href="images/works/gallery/Fresh/Screenshot_1.png" />
                    <a href="images/works/gallery/Fresh/Screenshot_2.png" />
                  </div>
                </a>
              </div>
              <div className="desc">
                <a href="#" className="name has-popup-image">
                  The Fresh Market
                </a>
                <div className="category">Gallery</div>
              </div>
            </div>
          </div>
          {/* work item photo */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item gallery border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#gallery-1" className="has-popup-gallery img-gallery">
                  <img src="images/works/gallery/Mines/Screenshot_0.png" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                  <div id="gallery-1" className="mfp-hide">
                    <a href="images/works/gallery/Mines/Screenshot_0.png" />
                    <a href="images/works/gallery/Mines/Screenshot_1.png" />
                    <a href="images/works/gallery/Mines/Screenshot_2.png" />
                    <a href="images/works/gallery/Mines/Screenshot_3.png" />
                    <a href="images/works/gallery/Mines/Screenshot_4.png" />
                    <a href="images/works/gallery/Mines/Screenshot_5.png" />
                    <a href="images/works/gallery/Mines/Screenshot_6.png" />
                    <a href="images/works/gallery/Mines/Screenshot_7.png" />
                    <a href="images/works/gallery/Mines/Screenshot_8.png" />
                    <a href="images/works/gallery/Mines/Screenshot_9.png" />
                    <a href="images/works/gallery/Mines/Screenshot_10.png" />
                  </div>
                </a>
              </div>
              <div className="desc">
                <a href="#" className="name has-popup-image">
                  P2E Game - MINES OF Dalarnia Word
                </a>
                <div className="category">Gallery</div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default RecentWorksDefault;
