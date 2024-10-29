interface ItextoBotao {
  name: string;
}
export default function Button(props: ItextoBotao) {
  console.log(props);
  return (
    <button className="w-32 h-9 rounded bg-white text-black font-bold">
      {props.name ? props.name : "sem texto - texto padrao"}
    </button>
  );
}
