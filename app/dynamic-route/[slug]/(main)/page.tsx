import Link from "next/link";

export default function ChannelPage() {
  return (
    <div>
      <p style={{ marginBottom: 20 }}>Channel page</p>
      <Link href="/dynamic-route/channel/clips">Channel clips</Link>
    </div>
  );
}
