/**
 * @copyright 2025 Rohit Ray
 * @license Apache-2.0
 */

/**
 * Components
 */
import ProjectCard from './ProjectCard';


const works = [
  {
    imgSrc: '/images/img-1.jpg',
    title: 'License Plate Detection and Logging System',
    tags: ['Computer Vision', 'YOLOv10', 'OCR', 'SQL'],
    projectLink: 'https://github.com/Rohit-Ray-Git/License-Plate-Detection-and-Logging-System-Using-YOLOv10'
  },
  {
    imgSrc: '/images/img-2.jpg',
    title: 'Smart ATS Tracker - Gemini Pro',
    tags: ['Gemini-Pro', 'ATS', 'Web App', 'Streamlit'],
    projectLink: 'https://github.com/Rohit-Ray-Git/Smart-ATS-Tracker-Using-Gemini-Pro'
  },
  {
    imgSrc: '/images/img-3.jpg',
    title: 'AI-Powered Document Insight Assistant',
    tags: ['AI', 'NLP', 'GPT - 4', 'Document Analysis'],
    projectLink: 'https://github.com/Rohit-Ray-Git/AI-Powered-Document-Insight-Assistant'
  },
  {
    imgSrc: '/images/img-4.jpg',
    title: 'Traffic Sign Recognition System',
    tags: ['Deep Learning', 'CNN', 'Autonomous Driving'],
    projectLink: 'https://github.com/Rohit-Ray-Git/Traffic-Sign-Recognition-and-Classification-System-Using-Deep-Learning'
  },
  {
    imgSrc: '/images/img-5.jpg',
    title: 'Mood Prediction with Facial Expression',
    tags: ['Deep Learning', 'CNN', 'Facial Recognition'],
    projectLink: 'https://github.com/Rohit-Ray-Git/Facial-Expression-Emotion-Prediction-with-CNN'
  },
  {
    imgSrc: '/images/img-6.jpg',
    title: 'Stable Diffusion Text to Image Generation',
    tags: ['AI', 'Generative Models', 'Stable Diffusion'],
    projectLink: 'https://github.com/Rohit-Ray-Git/Image-Generation-Using-Stable-Diffusion-and-Hugging-Face'
  },
];

const Work = () => {
    return (
        <section
            id="work"
            className="section"
        >
                <div className="container">

                    <h2 className="headline-2 mb-8 reveal-up">
                        My Portfolio highlights
                    </h2>

                    <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,_1fr))]">
                        {works.map(({imgSrc, title, tags, projectLink}, key) => (
                            <ProjectCard
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags} 
                            projectLink={projectLink}
                            classes="reveal-up"/>
                        ))}
                    </div>
                </div> 
            </section>
    )
}

export default Work;