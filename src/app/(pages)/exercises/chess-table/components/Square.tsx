interface ISquareColor {
  whiteColor: boolean;
}

export default function Square(props: ISquareColor) {
  return (
    <>
      <div className={props.whiteColor ? "p-6 bg-white" : "p-6 bg-black"}></div>
    </>
  );
}
