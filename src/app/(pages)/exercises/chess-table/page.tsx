import Square from "./components/Square";

export default function chessTable() {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold py-5">Chess Table</h1>
      <div className="flex justify-center">
        {Array.from({ length: 8 }).map((_item, index) => {
          return buildChessLine(index);
        })}
      </div>
    </div>
  );
}

function buildChessLine(number: number) {
  if (number % 2 == 0) {
    return (
      <div key={number}>
        {Array.from({ length: 8 }).map((_item, index) => {
          if (index % 2 == 0) {
            return <Square whiteColor={true} key={index} />;
          }
          if (index % 2 != 0) {
            return <Square whiteColor={false} key={index} />;
          }
        })}
      </div>
    );
  } else {
    return (
      <div key={number}>
        {Array.from({ length: 8 }).map((_item, index) => {
          if (index % 2 !== 0) {
            return <Square whiteColor={true} key={index} />;
          }
          if (index % 2 == 0) {
            return <Square whiteColor={false} key={index} />;
          }
        })}
      </div>
    );
  }
}
