import CenterImage from '../components/centerImage';
import SocialNetwork from '../components/socialNetwork';
import Footer from '../components/footer';
export default function Home() {

  return (
    <>
      <body>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col text-center">
              <CenterImage />
            </div>         
          </div>
          <SocialNetwork />
        </div>
        <Footer />
      </body>
    </>
    
  );
}
