import React from 'react';

const Skills = () => {
    const skillsData = [
        { name: 'Figma', percent: '49%', img: './figma.png' },
        { name: 'HTML', percent: '75%', icon: 'fa-brands fa-html5' },
        { name: 'python', percent: '15%', img: './py.jpg' },
        { name: 'CSS', percent: '65%', icon: 'fa-brands fa-css3-alt' },
        { name: 'React', percent: '85%', icon: 'fa-brands fa-react' },
        { name: 'JavaScript', percent: '55%', icon: 'fa-brands fa-js-square' }
    ];

    return (
        <section className="skills" id="skills">
            <div className="section-header">
                <h2 className="section-title"><span className="gradient-text">My Skills</span></h2>
                <p className="section-description">We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>
            </div>

            <div className="skills-grid">
                {skillsData.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <div className="skill-card">
                            <div className="skill-icon-box">
                                {skill.img ? (
                                    <img src={skill.img} alt={skill.name} className={`skill-icon-img ${skill.name.toLowerCase()}`} />
                                ) : (
                                    <i className={`${skill.icon} skill-icon`}></i>
                                )}
                            </div>
                            <div className="skill-percent">{skill.percent}</div>
                        </div>
                        <div className="skill-name">{skill.name}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
