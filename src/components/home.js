// import { Link } from "react-router-dom";
import '../assets/css/home.css'
import collage from '../assets/images/medicalEquipments.jpg'
function Home(){
    return (
        <div className="home">
            <section id="intro">
                <div id="intro-collage">
                <img style={{borderRadius:'inherit'}} src={collage} height='93%' width='100%' alt='medical equipments collage' />
                    {/* <Link style={{textDecoration:'none',color:'black'}} to='/products'><div>View-Products</div></Link> */}
                </div>
                <div id="intro-about" className="subtext">
                    A well-diversified company that supplies quality products manufactured by 
                    reliable resources and professional medical service representatives. 
                    We have established a reputation of trust with our customers in terms of excellent, 
                    efficient, and prompt supply of products.
                </div>
            </section>
            <section id="about">
                <h1 className="section-heading">About us</h1>
                <div id='about-display'>
                    <div className='subtext' style={{textAlign:'justify'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.It is a long established fact that a reader will be 
                        distracted by the readable content of a page when looking at its layout. The 
                        point of using Lorem Ipsum is that it has a more-or-less normal distribution 
                        of letters, as opposed to using 'Content here, content here', making it look 
                        like readable English. Many desktop publishing packages and web page editors 
                        now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
                        will uncover many web sites still in their infancy. Various versions have evolved 
                        over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
                </div>
            </section>
            <section id="clientel">
                <h1 className="section-heading">Building relationships based on trust </h1>   
                <div id='clientel-display'></div>
            </section>
        </div>
    )
}

export default Home;