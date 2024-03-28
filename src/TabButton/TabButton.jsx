function TabButton ({buttonName, onSelect, isSelected}) {
  return (
    <button className={isSelected ? "active" : "inactive"} onClick={onSelect}>{buttonName}</button>
  );
}

export default TabButton;