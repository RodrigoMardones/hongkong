import Image from "next/image";
import socialNetworks from '../data/dataSocialNetwork'; 
export default function SocialNetwork(){
    return(
        <>
            {socialNetworks.map((e) => 
                (<div className="col-md-4 col-xs-1 mt-4 mb-4 center-block" key={e.alt}>                   
                    <div className="d-flex justify-content-center">
                        <a href={e.href}>
                            <Image src={e.logo} alt="Hongkong" width={150} height={150} className="text-center"/>
                            <p className="lead text-center socialNetwork" style={{fontFamily : 'Nunito', color: 'white'}}>
                                {e.alt}
                            </p>
                        </a>
                    </div>
                </div>)
            )}
        </>
    )
}