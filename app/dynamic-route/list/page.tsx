import Link from "next/link";

export default function ListPage() {
  return (
    <div>
      <p>
        Clicking this link will trigger the intercepted route in [slug], when it
        shouldn't
      </p>
      <Link href="/dynamic-route/channel/clips/1">Link to clip 1</Link>
    </div>
  );
}
