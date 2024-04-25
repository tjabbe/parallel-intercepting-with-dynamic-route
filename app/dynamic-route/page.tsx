import Link from "next/link";

export default function HomeDynamic() {
  return (
    <div>
      <div>
        <p>Router will call the single clip page, not the intercepted route</p>
        <Link href="/dynamic-route/channel/clips/1">Single clip page</Link>
      </div>
      <div style={{ marginTop: 20 }}>
        <p>
          Link to the /list page, clicking on the "clip" link in that page will
          trigger the intercepted route in [slug]
        </p>
        <Link href="/dynamic-route/list">List page</Link>
      </div>
      <div style={{ marginTop: 20 }}>
        <p>
          Link to the channel clips page, where clicking on the "clip" link will
          trigger intercepted route
        </p>
        <Link href="/static-route/channel/clips">Channel clips page</Link>
      </div>
    </div>
  );
}
