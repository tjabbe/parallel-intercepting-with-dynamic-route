import { PropsWithChildren } from "react";

interface IChannelLayoutProps {
  modal: React.ReactNode;
}

export default function ChannelLayout({
  children,
  modal,
}: PropsWithChildren<IChannelLayoutProps>) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
