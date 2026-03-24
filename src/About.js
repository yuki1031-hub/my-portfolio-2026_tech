import React from 'react';
import { Link } from 'react-router-dom';
import PortfolioLayout from './components/PortfolioLayout';

const CAREER = [
  {
    period: '2026〜',
    company: 'フリーランス独立',
    desc: 'LINE構築・チャットボット制作をフリーランスとして提供中。',
  },
  {
    period: '〜2024',
    company: 'チャットコマース系ITベンチャー',
    desc: 'LINEチャットボット実装',
  },
  {
    period: '2017〜2024',
    company: 'アサヒ飲料株式会社',
    desc: 'プロジェクトオーナーとして新商品の全国展開化に従事',
  },
];

export default function About() {
  return (
    <PortfolioLayout>
      <div className="about-page">
        <div className="about-inner">
          <div className="about-image-wrap">
            <img
              src="/image/plf.JPG"
              alt="profile"
              className="about-image"
            />
          </div>

          <p className="about-text1">
            LINEチャットボット実装・Lステップ・LP制作を中心に活動するフリーランスエンジニアです。
          </p>

          <div className="about-career">
            {CAREER.map((item, i) => (
              <div key={i} className="about-career-item">
                <span className="about-career-period">{item.period}</span>
                <div className="about-career-body">
                  <p className="about-career-company">{item.company}</p>
                  <p className="about-career-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="page-footer-back">
          <Link to="/" className="back-btn">← BACK</Link>
        </div>
      </div>
    </PortfolioLayout>
  );
}
