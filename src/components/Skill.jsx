/**
 * @copyright 2025 Rohit Ray
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from './SkillCard';

const skillItem = [
  {
    imgSrc: '/images/python.svg',
    label: 'Python',
    desc: 'Programming Language'
  },
  {
    imgSrc: '/images/numpy.svg',
    label: 'NumPy',
    desc: 'Numerical Computing'
  },
  {
    imgSrc: '/images/pandas.svg',
    label: 'Pandas',
    desc: 'Data Manipulation'
  },
  {
    imgSrc: '/images/Matplotlib.svg',
    label: 'Matplotlib',
    desc: 'Data Visualization'
  },
  {
    imgSrc: '/images/scikit-learn.svg',
    label: 'Scikit-Learn',
    desc: 'Machine Learning'
  },
  {
    imgSrc: '/images/tensorflow.svg',
    label: 'TensorFlow',
    desc: 'Deep Learning'
  },
  {
    imgSrc: '/images/sql.svg',
    label: 'SQL',
    desc: 'Database Querying'
  },
  {
    imgSrc: '/images/docker.svg',
    label: 'Docker',
    desc: 'Containerization'
  }
];


const Skill = () => {
    return (
        <section className="section">
            <div className="container">

                <h2 className="headline-2 reveal-up">
                    Essential Tools I use
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                    Discover the powerful tools and technologies I use to create exceptional,
                    high-performing AI and Machine Learning applications.
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,_1fr))]">
                    {
                        skillItem.map(({imgSrc, label, desc}, key) => 
                            (
                                <SkillCard 
                                    key={key}
                                    imgSrc={imgSrc}
                                    label={label}
                                    desc={desc}
                                    classes="reveal-up"
                                />
                            ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skill;    