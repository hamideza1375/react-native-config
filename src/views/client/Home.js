import { ScrollView, I18nManager, Platform } from "react-native";
import { Br, Column, Slider } from "../../other/Components/Html";
import Category from "../Components/Category";
import SliderOffers from "../Components/SliderHorizontal";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import Hook from "../Components/Hook";
import { useEffect } from "react";
import reload from "../../other/utils/reload";

function Home(p) {
  useEffect(() => { setTimeout(() => { if ((Platform.OS !== 'web') && (!I18nManager.isRTL)) { reload() } }, 2000) }, [])
  const data = ['p1.png', '7.png', 'p2.png']

  return (
    <Column f={1} >
      <ScrollView >
        <Column>
          <Slider data={data} {...p} />
        </Column>

        <Column>
          <Category {...p} />
        </Column>

        <Column>
            <Banner {...p} />
        </Column>
        <Br/>

        <Column>
            <SliderOffers {...p} />
        </Column>

        <Column>
            <Footer {...p} />
        </Column>

      </ScrollView>
    </Column>
  )
}

export default Hook(Home)

