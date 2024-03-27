
interface PropsType {
  title: string;
  summary: string;
  url: string;
  img: string;
}

export default function BlogMetaData({ ...props }: PropsType) {
  return (
    <>
      <title>{props.title}</title>
      <meta name="title" content={props.title} />
      <meta name="description" content={props.summary.substring(0, 150)} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={props.url} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.summary.substring(0, 150)} />
      <meta property="og:image" content={props.img} />

      <meta property="twitter:card" content={props.title} />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:title" content={props.title} />
      <meta property="twitter:description" content={props.summary.substring(0, 150)} />
      <meta property="twitter:image" content={props.img} />
    </>
  );
}
