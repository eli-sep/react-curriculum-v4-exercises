function SnackList() {
  const list = [
    { name: 'Nuts', rank: 5 },
    { name: 'Yogurt', rank: 4 },
    { name: 'Beef Jerky', rank: 3 },
    { name: 'Chips and Dip', rank: 2 },
    { name: 'Fruit', rank: 1 },
  ];

  const sortedList = list.toSorted((a, b) => a.rank - b.rank);

  return (
    <ul>
      {sortedList.map((snack) => {
        return <li key={snack.rank}>{snack.name}</li>;
      })}
    </ul>
  );
}

export default SnackList;
