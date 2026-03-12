import React from 'react';
import PortfolioLayout from './components/PortfolioLayout';
import ShuffleText from './components/ShuffleText';

const LP_PROJECTS = [
    {
        id: 'gym-lp1',
        name: 'ジムLP1',
        desc: 'HTML / CSS / JavaScript',
        image: '/image/gym-lp.png',
        url: 'https://gym-lp-gules.vercel.app/',
    },
    {
        id: 'gym-lp2',
        name: 'ジムLP2',
        desc: 'HTML / CSS / JavaScript',
        image: '/image/gym2.jpg',
        url: 'https://gym-lp2.vercel.app/',
    },
    {
        id: 'kodomoshokudo-lp',
        name: '子ども食堂LP',
        desc: 'Typescript / tailwind css / tailwind css',
        image: '/image/kodomo.jpg',
        url: 'https://kodomoshokudo-lp.vercel.app/',
    },
    {
        id: 'womens-depilation-lp',
        name: '女性脱毛LP',
        desc: 'HTML / CSS / JavaScript',
        image: '/image/women.jpg',
        url: 'https://womens-depilation-lp.vercel.app/',
    },
    {
        id: 'mens-depilation-lp',
        name: '男性脱毛LP',
        desc: 'HTML / CSS / JavaScript',
        image: '/image/men.jpg',
        url: 'https://mens-depilation-lp2.vercel.app/',
    },
];

export default function LpWorks() {
    return (
        <PortfolioLayout>
            <div className="page-shell">
                <div className="page-container">
                    <p className="page-subtitle">— LP Works</p>
                    <h1 className="page-title">
                        <ShuffleText text="Work" duration={1400} />
                    </h1>

                    <div className="projects-grid">
                        {LP_PROJECTS.map((p) => (
                            <div
                                key={p.id}
                                className="project-card-wrap"
                                onClick={() => window.open(p.url, '_blank', 'noopener,noreferrer')}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && window.open(p.url, '_blank', 'noopener,noreferrer')}
                                aria-label={`Open ${p.name}`}
                            >
                                {p.image ? (
                                    <div className="project-card">
                                        <img
                                            className="project-card__thumb"
                                            src={p.image}
                                            alt={p.name}
                                            loading="lazy"
                                        />
                                        <div className="project-card__overlay">
                                            <div className="project-card__name">{p.name}</div>
                                            <div className="project-card__desc">{p.desc}</div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="project-card project-card--placeholder">
                                        <div className="project-card__name">{p.name}</div>
                                        <div className="project-card__desc">{p.desc}</div>
                                    </div>
                                )}
                                <div className="project-card__title-below">{p.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PortfolioLayout>
    );
}
