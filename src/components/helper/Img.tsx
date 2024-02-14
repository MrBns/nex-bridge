type TProps = {
  className?: string;
  src: string;
  alt: string;
};

export default function Img(props: TProps) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img src={props.src} alt={props.alt} className={props.className} />
    </>
  );
}
