import Link from "next/link";

export default function ListPage() {
  return (
    <div>
      <p>This will not trigger intercepted route (static-route)</p>
      <Link href="/static-route/channel/clips/1">Clip 1</Link>
    </div>
  );
}
