export default function Header(props: { title: string }) {
  return (
    <div className="bg-primary pt-10">
      <div className="content mx-auto text-white max-w-screen-lg pt-10 pb-6">
        <h1 className="font-bold text-4xl">{props.title}</h1>
      </div>
    </div>
  );
}
