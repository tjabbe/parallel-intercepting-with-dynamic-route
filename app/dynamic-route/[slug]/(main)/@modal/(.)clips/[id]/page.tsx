interface IChannelClipModalPageProps {
  params: {
    id: string;
  };
}

export default function ChannelClipModal({
  params: { id },
}: IChannelClipModalPageProps) {
  return <p>Intercepted Clip Page with id: {id}</p>;
}
