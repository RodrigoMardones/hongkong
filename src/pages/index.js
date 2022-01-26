import CenterImage from '../components/centerImage';
import SocialNetwork from '../components/socialNetwork';
import Footer from '../components/footer';
export default function Home() {

  return (
    <>
      <body>
        <div className="container">
          <div className="row justify-content-center"> 
            <CenterImage />  
          </div>
          <div className="row justify-content-center"> 
            <SocialNetwork />
          </div>   
        </div>
        <Footer />
      </body>
    </>
    
  );
}
