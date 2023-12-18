import React from 'react'
import Linda from '../assets/linda-zabel.jpeg'
import Leon from '../assets/leon-strauss.jpeg'
import Urs from '../assets/urs-martini.jpeg'
import Rufus from '../assets/rufus-raghunath.jpeg'
import Andre from '../assets/andre-biel.jpeg'
import Tammy from '../assets/tamara-cole.png'
import AndreViera from '../assets/andre-vieira.jpeg'
import Mascha from '../assets/mascha-ustinova.jpeg'
import Sophia from '../assets/sophia-petrova.jpeg'
import Malene from '../assets/malene-lissmeier.png'
import Tina from '../assets/tina-holmes.png'
import Korbinian from '../assets/korbinian-weisser.jpeg'
import '../styles/App.scss'
import '../styles/Testimonials.scss'
import { Link } from "react-router-dom"

type TestimonialType = {
    name: string,
    id: string,
    role: string,
    linkedIn: string,
    link: string,
    image: string,
    message: string,
    message2?: string,
    message3?: string,
    hideInPreview?: boolean,
    show?: boolean
}

const defaultMessage = 'Cred raclette fashion axe authentic migas selfies. Snackwave sustainable chambray, distillery lomo gentrify banjo selvage bicycle rights 3 wolf moon af deep v street art. Narwhal actually disrupt vinyl, trust fund lyft humblebrag tumblr brooklyn palo santo jean shorts literally.'
const defaultMessage2 = 'Everyday carry gochujang fingerstache 8-bit drinking vinegar pok pok YOLO etsy quinoa fixie listicle. Synth la croix paleo tattooed mixtape.'

const testimonialList:Array<TestimonialType> = [
    {
        name: 'Urs Martini',
        id: 'Urs',
        image: Urs,
        role: 'Director Technology, Amorelie',
        linkedIn: 'https://www.linkedin.com/in/ursmartini/',
        message: 'I hired Sami as Head of Development for our engineering teams. He helped to overcome the struggle with the agile development process, brought technology understanding on a whole new level, he supported projects and introduced various team and individual initiatives such as personal development plans, OKRs and technical excellence projects. Sami is truly a full-fledged part of the product and engineering world effortlessly bridging the gap between those dimensions and business world.',
        message2: 'Sami has been a pure pleasure to work with, both as a professional and as a human being. Sami is honest, friendly, highly knowledgeable and very experienced. I would not hesitate for a second to hire him again! A wonderful person, a true leader, a great addition to any team!',
        hideInPreview: false,
        link: '/testimonials#Urs',
        show: true
    },
    {
        name: 'Sophia Petrova',
        id: 'Sophia',
        image: Sophia,
        role: 'Ruby on Rails Developer, Amorelie',
        linkedIn: 'https://www.linkedin.com/in/sophia-petrova-a67a4190/',
        message: 'Sami joined us as Head of Development in a period when I was on the verge of quitting my position as Ruby on Rails developer at Amorelie and only the changes he introduced stopped me from doing this. His proactivity and interpersonal skills made the difference! I felt heard and recognized and his ability to speak in a friendly and honest manner was valued greatly in the teams he led.',
        message2: 'I see as one of his great achievements the way he found interconnections between my personal goals and the companies goals and let me towards my own self-development in a productive for the company way. I believe Sami is an example of a leader!',
        hideInPreview: true,
        link: '/testimonials#Sophia',
        show: true
    },
    {
        name: 'Leon Strauss',
        id: 'Leon',
        image: Leon,
        role: 'Chief Technology Officer, homefully',
        linkedIn: 'https://www.linkedin.com/in/leon-strauss-oc/',
        message: 'Sami is highly perceptive, smart, a strong leader and truly passionate about creating an outstanding customer experience transforming every product he touches.',
        message2: 'Sami learns incredibly fast, moving between software development, product management and performance marketing at ease.',
        message3: 'His systematic thinking together with his captivating way to communicate with various types of stakeholders and customers make him an effective leader in the digital product sector.',
        hideInPreview: false,
        link: '/testimonials#Leon',
        show: true
    },
    {
        name: 'André Vieira',
        id: 'AndreViera',
        image: AndreViera,
        role: 'Founder, Looptimize',
        linkedIn: 'https://www.linkedin.com/in/andrevieira1/',
        message: "My agency ran a project with Finanzcheck — one of the largest fintechs in Germany — where the objective was to revamp their experimentation stack in order to set up a reliable A/B testing system everyone in the company could use. Sami took part in this project and spearheaded the technical side of the challenge, sorting out many hurdles no one else could find good answers to.",
        message2: "Going beyond his impressive technical knowledge, I was even more surprised to see how easily and organically Sami became a lead figure in many ways in this project, managing communications between multiple roles while getting himself better acquainted with the world of A/B testing, statistics and so on. He caught up to the status quo in the blink of an eye, displaying precious attention to detail while treating everyone kindly even under very strict deadlines and conditions.",
        hideInPreview: true,
        link: '/testimonials#AndreViera',
        show: true
    },
    {
        name: 'Marija Ustinova',
        id: 'Mascha',
        image: Mascha,
        role: 'Product Owner, homefully',
        linkedIn: 'https://www.linkedin.com/in/marijaustinova/',
        message: 'Working with Sami means working with an outstanding, funny, very business driven and smart overachiever. I started my Product journey with him and I feel lucky that he taught me so much about Product Development during the past years.',
        message2: 'Sami lives for the User Experience and constantly looks for ways to disrupt digital and physical Products within the company. He is always looking to increase his knowledge and to help others. Would love to work with him again and hiring him means hiring a true top talent for every team!',
        hideInPreview: true,
        link: '/testimonials#Mascha',
        show: true
    },
    {
        name: 'Andre Biel',
        id: 'Andre',
        image: Andre,
        role: 'Technical Lead Developer, Finanzcheck',
        linkedIn: 'https://www.linkedin.com/in/andre-biel-225a18153/',
        message: "Sami joined our team as a Full-Stack Engineer. From his joining day on, I saw him impressing colleagues with his unique skillset. For Sami, it's not about Frontend or Backend - he handles both single-handedly. It's more about identifying problems and doing whatever is necessary to solve them. I've worked with many clients over the years, but Sami's performance was one of those I will never forget.",
        message2: "His communication skills are outstanding, and his ability to give and receive feedback always ends in people getting better (including himself). In addition to that, I've rarely seen people with Sami's natural leadership.",
        message3: "I highly recommend Sami Hamed for your team and company, regardless of what you're trying to achieve. He will be one of the best additions you've ever signed.",
        hideInPreview: false,
        link: '/testimonials#Andre',
        show: true
    },
    {
        name: 'Malene Lißmeier',
        id: 'Malene',
        image: Malene,
        role: 'Product Manager, Acomodeo',
        linkedIn: 'https://www.linkedin.com/in/malene-li%C3%9Fmeier-4ab306128/',
        message: "For our B2B applications at Acomodeo, it was great to have Sami as our team's Lead Developer. Together with him, we created a fantastic user experience and improved our customer experience by automating most of the tedious onboarding tasks. He always ensured to bring full transparency to his team and stakeholders and was a great partner overall.",
        message2: 'Sami has grown a lot since starting out as a frontend developer. He has proven multiple times that he quickly becomes a key player in every organisation he joined, in software development and product management. We have stayed in touch ever since collaborating at Acomodeo in Frankfurt and he was always up for a quick sparring session.',
        hideInPreview: false,
        link: '/testimonials#Malene',
        show: true
    },
    {
        name: 'Korbinian Weisser',
        id: 'Korbinian',
        image: Korbinian,
        role: 'Director Operations, homefully',
        linkedIn: 'https://www.linkedin.com/in/korbinian-weisser/',
        message: "I had the chance to work with Sami at homefully in his roles as Product Owner and - more closely - Head of Product. Sami significantly advanced the company on its path of digital transformation through automation and the implementation of several initiatives (OKRs, performance marketing, etc.), moving homefully towards a company with a strong data mindset. Working with him was always highly productive and fun. Sami is great at including non-technical colleagues in his ideas and an excellent leader in his domain.",
        message2: "Apart from Sami's excellent technical skills, his people skills and his work in the leadership-team truly stand out and can only be described as exceptional. Sami is an excellent communicator and always willing to lend colleagues a hand and going above and beyond to align everybody. In my opinion, Sami added significant value to the leadership team and provided something that went well beyond his job description. Besides being great at his role in Product and being a force of nature in the leadership team, he always had a focus on making the company more diverse and inclusive. I enjoyed working alongside Sami like I have rarely enjoyed a work relationship. Sami is a great human being, a blast to be around and seems to really love what he is doing.",
        hideInPreview: true,
        link: '/testimonials#Korbinian',
        show: true
    },
    {
        name: 'Tamara Cole',
        id: 'Tammy',
        image: Tammy,
        role: 'Director Product, Amorelie',
        linkedIn: 'https://www.linkedin.com/in/tamara-cole-7bb8839a',
        message: defaultMessage,
        message2: defaultMessage2,
        hideInPreview: true,
        link: '/testimonials#Tammy',
        show: false
    },
    {
        name: 'Linda Zabel',
        id: 'Linda',
        image: Linda,
        role: 'Chief Operating Officer, homefully',
        linkedIn: 'https://www.linkedin.com/in/linda-zabel-0599a613b/',
        message: defaultMessage,
        message2: defaultMessage2,
        hideInPreview: true,
        link: '/testimonials#Linda',
        show: false
    },
    {
        name: 'Rufus Raghunath',
        id: 'Rufus',
        image: Rufus,
        role: 'Senior Software Engineer, Thoughtworks',
        linkedIn: 'https://www.linkedin.com/in/rufusraghunath/',
        message: 'We took our first steps into professional software development at around the same time. Since then, it was a pleasure to have him as a sparring partner in discussing software products in the technological as well as the business space.',
        message2: 'Sami has the exceptional ability to quickly familiarize himself with extremely diverse fields of work, constantly bringing value to whichever product he is working on.',
        hideInPreview: true,
        link: '/testimonials#Rufus',
        show: true
    },
    {
        name: 'Tina Holmes',
        id: 'André',
        image: Tina,
        role: 'Director People, Amorelie',
        linkedIn: 'https://www.linkedin.com/in/ernestineholmes/',
        message: defaultMessage,
        message2: defaultMessage2,
        hideInPreview: true,
        link: '/testimonials#Tina',
        show: false
    },
]

const Testimonial = (props?:any) => {
    const isPreview = props.isPreview || false

    return (
        <div className='Testimonials-body'>

            <div className='Testimonials-header'>
                <h2>What others say about me</h2>
                <p>Testimonials are one of the most important pieces of text you can put on your websites, landing pages, or any other kind of product communication. That's why I'm so happy to share this collection of kind words from people I had the pleasure to collaborate with.</p>
            </div>

            <div className={ "Testimonials " + (isPreview ? 'Testimonial-preview' : '') }>
                <div className={ "Testimonials-inner " + (isPreview ? 'Testimonial-preview' : '') }>

                    {
                        (testimonialList.map(testimonial => {

                            return !!testimonial.show ? (
                                <div key={ testimonial.id } id={ testimonial.id }  className={ 'Testimonial-container ' + (testimonial.hideInPreview && isPreview ? 'Testimonial-preview Testimonial-preview-hidden' : '') }>
                                    
                                    <Link to={ testimonial.link } className={ 'Testimonial-img-container ' + (testimonial.hideInPreview && isPreview ? 'Testimonial-preview' : '') }>
                                        <img src={testimonial.image} alt="Image of the testimonial's author" />
                                    </Link>
                                    
                                    <div className={ "Testimonial " + (testimonial.hideInPreview && isPreview ? 'Testimonial-preview' : '') }>
                                        <a href={ testimonial.linkedIn } target="_blank" className={ 'Testimonial-author ' + (testimonial.hideInPreview && isPreview ? 'Testimonial-preview' : '') }>
                                            { testimonial.name }
                                        </a>
                                        <p className={ 'Testimonial-role ' + (testimonial.hideInPreview && isPreview ? 'Testimonial-preview' : '') }>{ testimonial.role }</p>
                                        
                                        <br />

                                        <span className={ 'Testimonial-message ' + (isPreview ? 'Testimonial-preview' : '') }>
                                            { testimonial.message }
                                            <br /><br />
                                            { testimonial.message2 || ''} { testimonial.message3 || ''}
                                        </span>
                                        <Link to={ '/testimonials#' + testimonial.id } className={ 'Testimonial-read-more ' + (isPreview ? 'Testimonial-preview' : '') }>Read more...</Link>
                                    </div>

                                </div>
                            ) : ''

                        }))
                    }

                </div>

            </div>

            <Link to="/testimonials" className={"Testimonials-read-more "  + (isPreview ? 'Testimonial-preview' : '') }>
                <h3>
                    <span>Click here </span>
                    to read all { testimonialList.filter(it => !!it.show).length } testimonials
                </h3>
            </Link>

        </div>
    )
}

export default Testimonial