import React from "react";
import { useParams, Link } from "react-router-dom";
import works from "./data/works";

const S = {
  page: {
    minHeight: "100vh",
    background: "#000",
    color: "#fff",
    fontFamily: "'Google Sans Flex', sans-serif",
  },
  inner: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "60px 40px",
  },
  back: {
    fontFamily: "inherit",
    fontSize: "0.78rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.45)",
    textDecoration: "none",
  },
  title: {
    marginTop: "32px",
    fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    lineHeight: 1.2,
  },
  catchcopy: {
    marginTop: "12px",
    fontSize: "0.9rem",
    color: "rgba(255,255,255,0.45)",
    letterSpacing: "0.04em",
  },
  tags: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  tag: {
    fontSize: "0.7rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "4px 12px",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "rgba(255,255,255,0.55)",
  },
  img: {
    width: "50%",
    display: "block",
    marginTop: "40px",
    borderRadius: "2px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  screenshots: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "12px",
    marginTop: "24px",
  },
  ssImg: {
    width: "100%",
    display: "block",
    borderRadius: "2px",
    objectFit: "cover",
  },
  divider: {
    border: "none",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    margin: "40px 0",
  },
  sectionLabel: {
    fontSize: "0.7rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.35)",
    marginBottom: "16px",
  },
  sectionText: {
    fontSize: "0.95rem",
    lineHeight: 1.9,
    color: "rgba(255,255,255,0.75)",
  },
  li: {
    marginBottom: "8px",
    lineHeight: 1.8,
    color: "rgba(255,255,255,0.75)",
    fontSize: "0.95rem",
  },
  th: {
    padding: "12px",
    textAlign: "left",
    border: "1px solid rgba(255,255,255,0.1)",
    fontSize: "0.8rem",
    letterSpacing: "0.06em",
    color: "rgba(255,255,255,0.45)",
    background: "rgba(255,255,255,0.04)",
  },
  td: {
    padding: "12px",
    border: "1px solid rgba(255,255,255,0.1)",
    fontSize: "0.9rem",
    color: "rgba(255,255,255,0.75)",
  },
  tdCenter: {
    padding: "12px",
    border: "1px solid rgba(255,255,255,0.1)",
    fontSize: "0.9rem",
    color: "rgba(255,255,255,0.75)",
    textAlign: "center",
  },
  githubBtn: {
    display: "inline-flex",
    alignItems: "center",
    fontFamily: "inherit",
    fontSize: "0.78rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#fff",
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.3)",
    padding: "14px 32px",
    textDecoration: "none",
    transition: "background 0.3s, border-color 0.3s",
  },
};

export default function WorkDetail() {
  const { id } = useParams();
  const work = works.find((w) => w.id === id);

  if (!work) {
    return (
      <div style={{ ...S.page, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.45)", marginBottom: "24px" }}>作品が見つかりませんでした。</p>
          <Link to="/" style={S.back}>← トップに戻る</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={S.page}>
      <div style={S.inner}>

        <h1 style={S.title}>{work.title}</h1>
        <p style={S.catchcopy}>{work.catchcopy}</p>

        <div style={S.tags}>
          {work.tags.map((tag) => (
            <span key={tag} style={S.tag}>{tag}</span>
          ))}
        </div>

        <img src={work.gif} alt="デモ" style={S.img} />

        <div style={S.screenshots}>
          <img src="/image/ss1.jpg" alt="スクリーンショット1" style={S.ssImg} />
          <img src="/image/ss2.jpg" alt="スクリーンショット2" style={S.ssImg} />
          <img src="/image/ss3.jpg" alt="スクリーンショット3" style={S.ssImg} />
        </div>

        <hr style={S.divider} />

        <div>
          <p style={S.sectionLabel}>概要</p>
          <p style={S.sectionText}>{work.description}</p>
        </div>

        <hr style={S.divider} />

        <div>
          <p style={S.sectionLabel}>機能一覧</p>
          <ul style={{ paddingLeft: "16px" }}>
            {work.features.map((feature) => (
              <li key={feature} style={S.li}>{feature}</li>
            ))}
          </ul>
        </div>

        <hr style={S.divider} />

        <div>
          <p style={S.sectionLabel}>Lステップとの比較</p>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={S.th}>項目</th>
                <th style={{ ...S.th, textAlign: "center" }}>Lステップ</th>
                <th style={{ ...S.th, textAlign: "center" }}>本作品</th>
              </tr>
            </thead>
            <tbody>
              {work.comparison.map((row) => (
                <tr key={row.item}>
                  <td style={S.td}>{row.item}</td>
                  <td style={S.tdCenter}>{row.lstep}</td>
                  <td style={S.tdCenter}>{row.custom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <hr style={S.divider} />

        <div style={{ textAlign: "center" }}>
          <a
            href={work.github}
            target="_blank"
            rel="noreferrer"
            style={S.githubBtn}
          >
            GitHub で見る
          </a>
        </div>

        <hr style={S.divider} />

        <Link to="/" style={S.back}>← back</Link>

      </div>
    </div>
  );
}
