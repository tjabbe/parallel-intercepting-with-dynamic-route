import { PropsWithChildren } from "react";

interface IChannelLayoutProps {
  params: {
    slug: string;
  };
  modal: React.ReactNode;
}

export default function ChannelLayout({
  children,
  params,
  modal,
}: PropsWithChildren<IChannelLayoutProps>) {
  return (
    <div>
      <p>Slug: {params.slug}</p>
      {children}
      {modal}
    </div>
  );
}
