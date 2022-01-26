import Image from "next/image";
import logo1 from '../../public/logos/logo1.jpeg';
import logo2 from '../../public/logos/logo2.jpeg';
import logo3 from '../../public/logos/logo3.jpeg';

export default function SocialNetwork(){ 
    const urls = [
        {
            alt:  '@hongkongdistro',
            href: 'https://www.instagram.com/hongkongdistro/',
            logo: logo3
        },
        {
            alt:  '@hong.kongnails',
            href: 'https://www.instagram.com/hong.kongnails/',
            logo: logo1
        },
        {
            alt:  '@hongkongtattoos',
            href: 'https://www.instagram.com/hongkongtattoos/',
            logo: logo2
        }
    ];   
    return(
        <div className="row">
            { urls.map((e) => 
                <div className="col-md-4 col-xs-1 mt-4 mb-4 center-block" key={e.alt}>                   
                    <div className="d-flex justify-content-center">
                        <a href={e.href}>
                            <Image src={e.logo} alt="Hongkong" width={150} height={150} className="text-center"/>
                            <p className="lead text-center socialNetwork" style={{fontFamily : 'Nunito', color: 'white'}}>
                                {e.alt}
                            </p>
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}