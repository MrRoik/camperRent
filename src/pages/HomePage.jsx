import css from './Pages.module.css';

export default function HomePage() {
  return (
    <main>
      <div className={css.container_home}>
        <h1 className={css.title}>Welcome</h1>
        <p className={css.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, laboriosam placeat
          incidunt rem illum animi nemo quibusdam quia voluptatum voluptate.
        </p>
      </div>
    </main>
  );
}
