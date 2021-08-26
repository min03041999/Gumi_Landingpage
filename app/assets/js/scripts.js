import Sample from "./modules/_sample";
$(document).ready(() => {
  let sample = new Sample();
});

import Banner from "./modules/_banner";
import Scroll from "./modules/_scroll";
import SlideBar from "./modules/_sidebar";
import SilderFeatures from "./modules/_slider-features";
import SilderMeet from "./modules/_slider-meet";
import Tabs from "./modules/_tabs";
$(document).ready(() => {
  Banner();
  Scroll();
  SlideBar();
  SilderFeatures();
  SilderMeet();
  Tabs();
})
