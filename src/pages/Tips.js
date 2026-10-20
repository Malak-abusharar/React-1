import Content from "../component/Content";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet } from 'react-helmet-async';

export default function Tips() {
  return (
    <div>
            <Helmet>
        <title>Tips page</title>
      </Helmet>
      <Header/>
<Content data='Tips'/>
  <Footer/>
    </div>
  )
}
