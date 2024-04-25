interface IClipPage {
  params: {
    id: string;
  };
}

export default function ClipPage({ params }: IClipPage) {
  return <div>Single clip page with id: {params.id}</div>;
}
