export default function Stats({ Items }) {
  if (!Items.length)
    return (
      <footer className="stats">
        <em>🚀 Start adding some items to your packing list 🥳</em>
      </footer>
    );
  const numOfItems = Items.length;
  const numOfItemsPacked = Items.filter((item) => item.packed === true).length;
  const percent = Math.round((numOfItemsPacked / numOfItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? `You got everything! Ready to go ✈️`
          : ` 👜 You have ${numOfItems} items on your list, and you have already packed ${numOfItemsPacked}(${percent} %)`}
      </em>
    </footer>
  );
}
