
import Item from "./Item";
import { SortStatus } from "../Enum/SortStatus";
export default function PackingList({
  Items,
  onDeleteItem,
  onToggleItem,
  onClearItem,
  onSortChange,
  Status,

}) {
  return (
    <div className="list">
      <ul>
        {Items.map((it) => (
          <Item
            item={it}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={it.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={Status}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value={`${SortStatus.INPUT_ORDER}`}>Sort by input order</option>
          <option value={`${SortStatus.DESCRIPTION}`}>Sort by description</option>
          <option value={`${SortStatus.PACKED_STATUS}`}>Sort by packed status</option>
        </select>
        <button onClick={onClearItem}>Clear List</button>
      </div>
    </div>
  );
}
