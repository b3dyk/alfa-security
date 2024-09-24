export default function Gallery() {
  return (
    <section>
      <h2>ГАЛЕРЕЯ</h2>
      <ul>
        {Array(9)
          .fill(0)
          .map((item, idx) => (
            <li key={idx}>
              <div></div>
            </li>
          ))}
      </ul>
    </section>
  );
}
