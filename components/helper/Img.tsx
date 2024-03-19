type TProps = {
  className?: string;
  src: string;
  alt: string;
  aos?: boolean;
  draggable?: boolean;
};

export default function Img(props: TProps) {
  return (
    <>
      {props.aos ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          draggable="false"
          data-aos
          src={props.src}
          alt={props.alt}
          className={props.className}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={props.src}
          draggable={props.draggable}
          alt={props.alt}
          className={props.className}
        />
      )}
    </>
  );
}
