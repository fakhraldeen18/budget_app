export function ProgressForm({ progress }) {
  return (
    <section>
      <div>
        <label htmlFor="progress">progress : {progress} </label>
        <progress id="progress" max="100" value={progress}></progress>
      </div>
    </section>
  );
}
