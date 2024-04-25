import Link from "next/link";

export default function HomeStatic() {
  return (
    <div>
      <div>
        <Link href="/static-route/channel/clips/1">Single clip page</Link>
      </div>
      <div style={{ marginTop: 20 }}>
        <Link href="/static-route/list">List page</Link>
      </div>
      <div style={{ marginTop: 20 }}>
        <Link href="/static-route/channel/clips">Channel clips page</Link>
      </div>
    </div>
  );
}
