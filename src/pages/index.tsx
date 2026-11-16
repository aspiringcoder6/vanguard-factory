import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import AdlcLine from '@site/src/components/AdlcLine';

import styles from './index.module.css';

type Feature = {
  eyebrow: string;
  title: string;
  text: string;
  to: string;
  cta: string;
};

const FEATURES: Feature[] = [
  {
    eyebrow: 'Orchestration',
    title: 'Điều phối vòng đời',
    text: 'Ticket chạy qua 7 trạm ADLC — Triage, Spec, Build, Review, Verify, Ship, Monitor — do workloop điều phối từ đầu đến cuối, không ai phải tự nối các giai đoạn.',
    to: '/docs/architecture/tong-quan-4-tang',
    cta: 'Xem kiến trúc 4 tầng',
  },
  {
    eyebrow: 'Human gates',
    title: 'Con người đứng ở 3 điểm duyệt',
    text: 'Agent làm phần nặng; Spec, Review và Ship chờ phê duyệt của người. Bị từ chối thì ticket quay lại đúng trạm để sửa — mọi quyết định đều để lại vết.',
    to: '/docs/fundamentals/vong-doi-7-tram',
    cta: 'Vòng đời 7 trạm',
  },
  {
    eyebrow: 'Interfaces',
    title: 'REST API & MCP Tools',
    text: 'Điều khiển factory qua API REST (:8100) hoặc MCP Tools — một nền tảng duy nhất cho dashboard, script CI và agent bên ngoài.',
    to: '/docs/reference/api-rest',
    cta: 'API Reference',
  },
];

const STATS = [
  {value: '4', label: 'tầng kiến trúc'},
  {value: '7', label: 'trạm vòng đời'},
  {value: '3', label: 'cổng phê duyệt của con người'},
  {value: '2', label: 'giao diện điều khiển — REST + MCP'},
];

function Hero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className="container">
        <p className={clsx('eyebrow', styles.heroEyebrow)}>
          Điều phối · Harness · Sandbox · Kiểm chứng
        </p>
        <Heading as="h1" className={styles.heroTitle}>
          Agentic Development Life&nbsp;Cycle
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.heroButtons}>
          <Link className="button button--primary" to="/docs/">
            Bắt đầu đọc
          </Link>
          <Link
            className={clsx('button', styles.btnGhost)}
            to="/docs/architecture/tong-quan-4-tang">
            Kiến trúc 4 tầng
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({feature}: {feature: Feature}) {
  return (
    <div className={styles.card}>
      <p className={styles.cardEyebrow}>{feature.eyebrow}</p>
      <Heading as="h3" className={styles.cardTitle}>
        {feature.title}
      </Heading>
      <p className={styles.cardText}>{feature.text}</p>
      <Link className={styles.cardLink} to={feature.to}>
        {feature.cta} →
      </Link>
    </div>
  );
}

function Features() {
  return (
    <section className={clsx('container', styles.section)} aria-label="Năng lực chính">
      <div className={styles.sectionHead}>
        <p className="eyebrow">Năng lực</p>
        <Heading as="h2" className={styles.sectionTitle}>
          Agent làm phần nặng, con người đứng ở 3 điểm duyệt
        </Heading>
      </div>
      <div className={styles.featuresGrid}>
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className={clsx('container', styles.section)} aria-label="ADLC trong số liệu">
      <div className={styles.statsGrid}>
        {STATS.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <Heading as="h2" className={styles.ctaTitle}>
          Sẵn sàng đưa agent vào quy trình có kiểm chứng?
        </Heading>
        <p className={styles.ctaText}>
          Toàn bộ kiến trúc, hướng dẫn vận hành và tài liệu tra cứu của ADLC Factory
          đều nằm trong docs.
        </p>
        <div className={styles.ctaButtons}>
          <Link className="button button--primary" to="/docs/">
            Đọc tài liệu
          </Link>
          <Link
            className={clsx('button', styles.btnGhost)}
            href="https://github.com/vanguard-lint/vanguard-factory">
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="ADLC Factory"
      description="Agentic Development Life Cycle — điều phối, harness, sandbox, kiểm chứng">
      <Hero />
      <main>
        <AdlcLine />
        <Features />
        <Stats />
        <FinalCta />
      </main>
    </Layout>
  );
}
