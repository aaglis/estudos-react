"use client";

interface IGenerate {
  qtd: number;
}

export default function GerenateNumbers(props: IGenerate) {
  const maxValue = 60;

  if (props.qtd) {
    return (
      <div>
        {Array.from({ length: props.qtd }).map((_item, index) => {
          return (
            <span
              key={index}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black"
            >
              {Math.floor(Math.random() * maxValue)}
            </span>
          );
        })}
      </div>
    );
  } else {
    return <div></div>;
  }
}
