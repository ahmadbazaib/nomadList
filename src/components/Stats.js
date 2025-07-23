export default function Stats({ items }) {
  // Kind of a gaurd clause
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list! 🪹</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPercentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {numPercentage === 100
          ? "You got everything. Ready to go!🚞"
          : ` You have ${numItems} items on your list, and you have already packed ${numPacked} (${numPercentage}%)`}
      </em>
    </footer>
  );
}
