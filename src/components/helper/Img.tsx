type TProps = {
  className?: string;
  src: string;
  alt: string;
  aos?: boolean;
};

export default function Img(props: TProps) {
  return (
    <>
      {props.aos ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          data-aos
          src={props.src}
          alt={props.alt}
          className={props.className}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={props.src} alt={props.alt} className={props.className} />
      )}
    </>
  );
}
