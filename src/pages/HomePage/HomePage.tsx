import AppInfo from "../../components/component/AppInfo/AppInfo";
import Banner from "../../components/component/Banner/Banner";
import CustomerReview from "../../components/component/CustomerReview/CustomerReview";

import HowItWorks from "../../components/component/HowItWorks/HowItWorks";
import ImageGallery from "../../components/component/ImageGallery/ImageGallery";
import RentCards from "../../components/component/RentCards/RentCards";
import TopBikes from "../../components/component/TopBikes/TopBikes";
import WhyOurBikes from "../../components/component/WhyOurBikes/WhyOurBikes";



const HomePage = () => {
    return (
        <div>
            <Banner/>
            <HowItWorks/>
            <TopBikes/>
            <RentCards/>
            <CustomerReview/>
            <ImageGallery/>
            <WhyOurBikes/>
            <AppInfo/>
            
        </div>
    );
};

export default HomePage;